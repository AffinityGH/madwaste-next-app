import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />
        <a href="/posts" className="hover:underline hover:text-red-500 decoration-black text-red-900">
          &lt; Back
        </a>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
          <div className="mx-auto max-w-2xl mt-10 text-stone-500 italic text-sm">
            Interested in our sources? You can find more information about them <a href="/about/#sources"className="hover:underline hover:text-red-500 decoration-black text-red-900">here</a>.
          </div>
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  var post;
  try {
    post = getPostBySlug(params.slug);
  } catch (error) {
    return notFound();
  }

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | MadWaste.`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
