import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import HeroMain from "@/app/_components/hero-main";
import Form from "@/app/_components/form";
import HeroGeneric from "@/app/_components/hero-generic";
import NewForm from "@/app/_components/newform";

export default function Contact() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

return (
    <main>
        <Container>
            <Header />
            <HeroGeneric title="Contact" description="Contact us for more information." />
        </Container>
        <div className="flex justify-center">
            <NewForm />
        </div>
    </main>
);
}
