import { useEffect } from "react";
import useSWR from "swr";
import Layout from "../components/Layout";
import Link from "next/link";
import { apiUrl, fetcher } from "../lib/blogListApi";
import { READ_BROG } from "../lib/type";
import BlogList from "../components/BlogList";

export default function SsgCsrPage() {
  const { data: blogs, mutate } = useSWR(apiUrl, fetcher);
  const filteredBlogs = blogs?.sort(function (a: READ_BROG, b: READ_BROG) {
    if (a.created_at < b.created_at) return 1;
    if (a.created_at > b.created_at) return -1;
    return 0;
  });

  useEffect(() => {
    mutate();
  }, []);

  return (
    <Layout title="CSR page">
      <ul>
        {filteredBlogs &&
          filteredBlogs.map((blog: READ_BROG) => (
            <BlogList key={blog.id} blog={blog} path="CsrBlog" />
          ))}
      </ul>
      <Link href="/">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
}
