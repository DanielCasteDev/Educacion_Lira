// data.ts
import { API_BASE_URL } from '../../../../api/api_service';

export const loginUser = async (usuario: string, contraseña: string) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario, contraseña }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Error al iniciar sesión");
  }

  return response.json();
};