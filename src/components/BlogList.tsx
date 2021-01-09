import Link from "next/link";
import { READ_BROG } from "../lib/type";

interface Props {
  blog: READ_BROG;
  path: string;
}

export default function BlogList({ blog, path }: Props) {
  return (
    <div>
      <span>{blog.id}</span>
      {" : "}
      <Link href={`/${path}/${blog.id}`}>
        <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">
          {blog.title}
        </span>
      </Link>
    </div>
  );
}
