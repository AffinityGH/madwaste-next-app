import Container from "@/app/_components/container";
import Button from "./button";

interface HeroMainProps {
    title: string;
    description: string;
}

export function HeroGeneric({title, description}: HeroMainProps) {
    return (
        <Container>
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-7xl font-bold tracking-tighter leading-tight mb-3 text-center">
                        {title}
                    </h1>
                    <p className="text-lg text-center text-primary-700 mb-5">{description}</p>
                    {/* <div className="flex flex-row space-x-4 mb-10">
                        <Button label="About" slug="about"/>
                        <Button label="Contact" slug="contact" />
                        <Button label="Posts" slug="posts" />
                    </div> */}
                    {/* <img src="/assets/app/banner.png" alt="Banner" className="w-screen mb-10" /> */}
                </div>
            </div>
        </Container>
    );
}

export default HeroGeneric;
