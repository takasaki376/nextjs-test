import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getBlogData } from "../../lib/blogListApi";
import { READ_BROG } from "../../lib/type";
import { GetServerSideProps } from "next";

type Props = { blog: READ_BROG | null };
type PathProps = { id: string };

export const getServerSideProps: GetServerSideProps<Props, PathProps> = async ({
  params,
}) => {
  const blog = await getBlogData(params?.id);
  return { props: { blog } };
};

export default function SsrBlog({ blog }: Props) {
  const router = useRouter();
  if (router.isFallback || !blog) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={blog.title}>
      <p className="m-4">
        {"ID : "}
        {blog.id}
      </p>
      <p className="mb-12">
        登録日時：{blog.created_at}　更新日時：{blog.updated_at}
      </p>
      <p className="mb-4 text-xl font-bold">タイトル：{blog.title}</p>
      <p className="px-10">コンテンツ：{blog.content}</p>
      <Link href="/SsgPage">
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
          <span>Back to SSR Page</span>
        </div>
      </Link>
    </Layout>
  );
}
