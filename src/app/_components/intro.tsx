import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        <span className="text-red-500">Mad</span>Waste.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        An e-waste awareness blog based in Madison.
      </h4>
    </section>
  );
}
