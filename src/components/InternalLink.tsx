import { href } from "@/lib/paths";

type InternalLinkProps = React.ComponentProps<"a"> & {
  href: string;
};

export function InternalLink({
  href: path,
  children,
  ...props
}: InternalLinkProps) {
  return (
    <a href={href(path)} {...props}>
      {children}
    </a>
  );
}
