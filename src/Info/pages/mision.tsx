import  { useState, useEffect } from "react";

export default function LoginTV() {
  const [qrToken, setQrToken] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) setQrToken(token);
    else setStatus("No se encontró token QR en la URL.");
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!qrToken) {
      setStatus("Token QR no disponible.");
      return;
    }

    setStatus("Iniciando sesión...");

    try {
      // 1. Login en backend
      const loginRes = await fetch("https://api-lira.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, contraseña }),
      });

      if (!loginRes.ok) {
        const errorData = await loginRes.json();
        throw new Error(errorData.message || "Error en login");
      }

      const loginData = await loginRes.json();

      const nombre = loginData.user?.nombre || "Usuario";

      // 2. Vincular token QR con nombre en backend
      const tvLoginRes = await fetch("https://api-lira.onrender.com/api/tv-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ qr_token: qrToken, nombre }),
      });

      if (!tvLoginRes.ok) {
        const errorTv = await tvLoginRes.json();
        throw new Error(errorTv.message || "Error vinculando con TV");
      }

      setStatus("¡Login exitoso! Puedes volver a la TV.");

    } catch (err) {
      setStatus("Error: " + (err instanceof Error ? err.message : String(err)));
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Login para TV</h2>
      {!qrToken ? (
        <p style={{ color: "red" }}>Token QR no detectado en la URL</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Correo:<br />
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              autoFocus
              style={{ width: "100%", padding: 8 }}
            />
          </label>
          <br /><br />
          <label>
            Contraseña:<br />
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
              style={{ width: "100%", padding: 8 }}
            />
          </label>
          <br /><br />
          <button type="submit" style={{ padding: "10px 20px" }}>
            Iniciar sesión
          </button>
        </form>
      )}
      <p>{status}</p>
    </div>
  );
}
