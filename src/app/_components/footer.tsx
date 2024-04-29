import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center justify-between">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} MadWaste. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500">
            Made with ❤️ by Group 18.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
