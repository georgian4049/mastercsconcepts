import { serverInstance } from "../axios.config";

export async function postContent(body) {
  return await serverInstance.post("api/content", body);
}

export async function getContent(courseArea, courseSubArea, materialCategory) {
  return await serverInstance.get(
    `api/content?courseArea=${courseArea}&courseSubArea=${courseSubArea}&materialCategory=${materialCategory}`
  );
}
