import Image from "next/image";

type Props = {
  name: string;
  src: string;
};

const AboutProfileImage = ({ name, src }: Props) => {
  return (
    <div className="w-80 md:w-100% pb-80 mx-auto" style={{ position: "relative" }}>
      <Image
        src={src}
        alt={`Cover Image for ${name}`}
        className="shadow-sm w-full object-cover"
        fill
      />
    </div>
  );
}

export default AboutProfileImage;
