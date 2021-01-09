import { READ_BROG } from "./type";
import axios from "axios";

export const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/bloglist/`;
export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// ------------------------------------
// ブログデータの全件取得
// ------------------------------------
export async function getAllBlogsData() {
  const res = await axios.get<READ_BROG[]>(apiUrl);
  const blogs = await res.data;
  const filteredBlogs = blogs.sort(function (a: READ_BROG, b: READ_BROG) {
    if (a.created_at < b.created_at) return 1;
    if (a.created_at > b.created_at) return -1;
    return 0;
  });
  return filteredBlogs;
}

// ------------------------------------
// ブログデータの全件取得（idのみ）
// ------------------------------------
export async function getAllBlogIds() {
  const res = await axios.get<READ_BROG[]>(apiUrl);
  const blogs = await res.data;
  return blogs.map((blog) => {
    return {
      params: {
        id: String(blog.id),
      },
    };
  });
}

// ------------------------------------
// ブログデータの取得（パラメータのキーで取得する）
// ------------------------------------
export async function getBlogData(id?: string) {
  if (!id) return null;
  const res = await axios.get<READ_BROG>(`${apiUrl}${id}/`);
  const blog = await res.data;
  return blog;
}
