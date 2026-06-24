export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function href(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash =
    normalized !== "/" && !normalized.endsWith("/")
      ? `${normalized}/`
      : normalized;
  return `${basePath}${withSlash}`;
}
