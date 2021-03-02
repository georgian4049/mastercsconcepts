import { serverInstance } from "../axios.config";

export async function postContent(body) {
  return await serverInstance.post("api/core-theory-content", body);
}
