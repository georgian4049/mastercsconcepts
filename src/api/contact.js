import { serverInstance } from "../axios.config";

export async function postQuery(body) {
  return await serverInstance.post(`api/query`, body);
}
