import SectionTitle from "@/app/components/SectionTitle";
import ShareButtons from "@/components/ShareButtons";
import api from "@/libs/api";
import formatDate from "@/libs/date";
import Image from "next/image";
import { MDXRemote } from 'next-mdx-remote/rsc'
// import { Typography } from "@material-ui/core";


export default async function Blog({params}) {
  const articleData = await api({
    page: "story",
    query: {
      $filter: `data/slug/iv eq '${params.slug}'`
    }
  });
  const article = articleData.items[0]
  console.log(article.data.content.iv);
  const source = article.data.content.iv
  // const mdxSource = await serialize(source)
  // const md = { props: { source: mdxSource } }
  // const components = { Test, h2: (props) => <Typography variant="h2" {...props} /> }
  

  // return (
  //   <div>Hello</div>
  // )

  return (
    <article className="bg-base-200">
      <div className="max-w-screen-lg mx-auto pt-20 pb-8">
        <div className="mb-4 md:mb-0 w-full lg:w-3/4 mx-auto relative">
          <div className="px-4 lg:px-0">
            <SectionTitle text={article.data.title.iv} />
            <span className="inline-block align-middle text-sm text-center w-full">
              Story • {formatDate(article.data.date.iv)}
            </span>
          </div>

          {/* The button to open modal */}
          <label htmlFor={`modal-${article.data.id}`}>
            <Image
              src={article.data.imageURL.iv}
              alt={article.data.title.iv}
              width={800}
              height={500}
              className="w-full h-72 lg:h-96 mt-3 object-cover lg:rounded-lg cursor-pointer"
            />
          </label>
          <ShareButtons title={article.data.title.iv} />
          <div className="divider px-4 lg:px-0"></div>

          {/* Put this part before </body> tag */}
          <input
            type="checkbox"
            id={`modal-${article.data.id}`}
            className="modal-toggle"
          />
          <label
            htmlFor={`modal-${article.data.id}`}
            className="modal cursor-pointer">
            <div className="modal-box max-w-5xl relative">
              <label
                htmlFor={`modal-${article.data.id}`}
                className="btn btn-sm btn-circle absolute right-2 top-2 text-xs">
                ✕
              </label>
              <Image
                src={article.data.imageURL.iv}
                className="w-full"
                alt={article.data.title.iv}
                width={800}
                height={500}
              />
            </div>
          </label>
        </div>

        <div className="px-4 lg:px-0 mt-4 text-lg w-full lg:w-3/4 mx-auto prose lg:prose-xl">
          <div
            id="custom-markdown"
            className="wrapper">
              <MDXRemote className="prose" source={source} />
              {/* {source} */}
            </div>
        </div>
      </div>
    </article>
  );
}



export async function generateStaticParams() {
  const posts = (await api({page: "story"})).items;
 
  return posts.map((post) => ({
    slug: post.data.slug.iv,
  }));
}
