import Container from "@/app/_components/container";
import Button from "./button";

export function HeroMain() {
    return (
        <Container>
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl md:text-6xl font-bold tracking-tighter leading-tight mb-3 text-center">
                        Explore e-waste, empower sustainability.
                    </h1>
                    <p className="text-lg text-center text-primary-700 mb-5">Discover how you can make a difference in protecting our environment by learning about responsible recycling practices.</p>
                    <div className="flex flex-row space-x-4 mb-10">
                        <Button label="About" slug="about"/>
                        <Button label="Contact" slug="contact" />
                        <Button label="Posts" slug="posts" />
                    </div>
                    <img src="/assets/app/banner.png" alt="Banner" className="w-screen mb-10" />
                </div>
            </div>
        </Container>
    );
}

export default HeroMain;
