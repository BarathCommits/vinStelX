import { InternalLink } from "./InternalLink";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium tracking-[0.15em] text-white uppercase">
              vinStelX
            </p>
            <p className="mt-1 text-xs text-muted">Orbital infrastructure</p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted">
              Building compute at the edge of space for the next generation of
              satellite constellations.
            </p>
          </div>
          <ul className="flex flex-wrap gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <InternalLink
                  href={link.href}
                  className="text-xs tracking-wide text-muted uppercase transition-colors hover:text-white"
                >
                  {link.label}
                </InternalLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} vinStelX. All rights reserved.
          </p>
          <a
            href="mailto:hello@vinstelx.com"
            className="text-xs text-muted transition-colors hover:text-white"
          >
            hello@vinstelx.com
          </a>
        </div>
      </div>
    </footer>
  );
}
