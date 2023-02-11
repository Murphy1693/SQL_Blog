import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../utils/posts";

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

const inter = Inter({ subsets: ["latin"] });

export default async function Home({ allPostsData }) {
  const allPostsData2 = await getSortedPostsData();
  console.log(allPostsData2);
  return (
    <div className="flex gap-4">
      {allPostsData2.map(({ id, date, title }) => (
        <li className="w-full border-2 border-black" key={id}>
          {title}
          <br />
          {id}
          <br />
          {date}
        </li>
      ))}
      <Link href="/CrashCourse">Hi there</Link>
    </div>
  );
}
