import { serverInstance } from "../axios.config";

export async function getAuthentication(body) {
  return await serverInstance.post("/api/auth/login", body);
}
export async function registerUser(body) {
  return await serverInstance.post("/api/auth/register", body);
}

export async function getRefreshToken(body) {
  return await serverInstance.post("/api/auth/refresh", body);
}
