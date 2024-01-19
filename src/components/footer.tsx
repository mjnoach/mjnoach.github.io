import Image from "next/image";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className="border-t">
      <div className="container text-center py-10 md:py-5 space-y-4">
        <div className="text-muted">
          Illustrations by{" "}
          <a
            href="https://popsy.co"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Popsy
          </a>
        </div>
        <div className="inline-flex flex-col items-center gap-4 md:flex-row">
          <Image
            className="relative"
            src="/itx.svg"
            alt="Logo"
            width={35}
            height={35}
          />
          <span>© 2024 Andrzej Sienkiewicz</span>
        </div>
      </div>
    </footer>
  );
}
