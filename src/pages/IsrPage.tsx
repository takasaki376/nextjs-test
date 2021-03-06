import Layout from "../components/Layout";
import Link from "next/link";
import { getAllBlogsData } from "../lib/blogListApi";
import { GetStaticProps } from "next";
import { READ_BROG } from "../lib/type";
import BlogList from "../components/BlogList";

interface Props {
  filteredBlogs: READ_BROG[];
}

export const getStaticProps: GetStaticProps = async () => {
  const filteredBlogs = await getAllBlogsData();
  return {
    props: { filteredBlogs },
    revalidate: 60,
  };
};

export default function IsrPage({ filteredBlogs }: Props) {
  return (
    <Layout title="ISR page">
      <ul>
        {filteredBlogs &&
          filteredBlogs.map((blog) => (
            <BlogList key={blog.id} blog={blog} path="IsrBlog" />
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
