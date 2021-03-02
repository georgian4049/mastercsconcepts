import { serverInstance } from "../axios.config";

export async function postContent(body) {
  return await serverInstance.post("coreTheoryContent", body);
}
