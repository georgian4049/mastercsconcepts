import { serverInstance } from "../axios.config";

export async function getAuthentication(body) {
  return await serverInstance.post("/api/auth/login", body);
}
