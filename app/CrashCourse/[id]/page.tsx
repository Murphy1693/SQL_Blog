import { getPostData } from "@/utils/posts";

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

export default async function Post({ params }) {
  let id = params.id;
  let postData = await getPostData(id);
  return (
    <div>
      <div className="text-center font-serif text-2xl italic">
        {postData.title}
      </div>
      <div
        className="m-auto"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
}
