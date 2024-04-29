import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import HeroGeneric from "@/app/_components/hero-generic";
import Image from "next/image";

export default function Contact() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Header />
        <HeroGeneric title="About" description="Meet the team." />
        <div className="md:w-1/2 mx-auto mb-10">
        <div style={{ width: "100%", paddingBottom: "56.25%", position: "relative" }} className="mb-5">
          <Image
            src="/assets/app/group.jpg"
            alt="A picture of our group."
            className="shadow-sm w-full object-cover"
            fill
          />
        </div>
          <p className="text-center">
            We are a group of students from the University of Wisconsin-Madison
            who are passionate about sustainability and the environment. We
            created this blog to raise awareness about the environmental impact
            of e-waste and to encourage people to recycle their electronics
            responsibly.
          </p>
          <h2 className="text-4xl font-bold mt-8 text-center">Our Mission</h2>
          <p className="text-center">
            Our mission is to educate people about the dangers of e-waste and
            the importance of recycling electronics. We believe that everyone
            has a role to play in protecting the environment, and we want to
            empower people to make a positive impact through their actions.
          </p>
          <h2 className="text-4xl font-bold mt-8 text-center">Our Team</h2>
          <h3 className="text-2xl font-bold mt-4">Ram</h3>
          <p>
            Ram is a junior at the University of Wisconsin - Madison. He is double majoring in Computer Science and 
            Data Science and getting a certificate in Mathematics. He is interested in e-waste because it’s a major 
            environmental issue that also touches on technology. Learning more about e-waste helps him discover new ways 
            to recycle and manage worn out pieces of technology. He looks forward to spreading awareness about the importance 
            of e-waste.
          </p>
        </div>
      </Container>
    </main>
  );
}
