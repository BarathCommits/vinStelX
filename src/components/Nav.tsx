"use client";

import { usePathname } from "next/navigation";
import { InternalLink } from "./InternalLink";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <InternalLink
          href="/"
          className="text-sm font-medium tracking-[0.15em] text-white uppercase"
        >
          vinStelX
        </InternalLink>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/" || pathname === ""
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <InternalLink
                  href={link.href}
                  className={`text-xs tracking-wide uppercase transition-colors ${
                    isActive ? "text-white" : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                </InternalLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
