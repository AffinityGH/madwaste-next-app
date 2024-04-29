import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div style={{ width: "100%", paddingBottom: "56.25%", position: "relative" }}>
      <Image
        src={src}
        key={slug}
        alt={`Cover Image for ${title}`}
        className={cn("shadow-sm w-full object-cover", {
          "hover:shadow-lg transition-shadow duration-200": slug,
        })}
        layout="fill"
      />
    </div>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
