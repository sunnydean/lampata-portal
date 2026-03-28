function normalizeBasePath(basePath: string) {
  if (!basePath || basePath === "/") {
    return "/";
  }

  const trimmed = basePath.replace(/^\/+|\/+$/g, "");
  return `/${trimmed}/`;
}

export function withBasePath(path: string) {
  if (!path || path.startsWith("#") || /^[a-z]+:/i.test(path)) {
    return path;
  }

  const basePath = normalizeBasePath(import.meta.env.BASE_URL ?? "/");

  if (path === "/") {
    return basePath;
  }

  const trimmedPath = path.replace(/^\/+/, "");
  return `${basePath}${trimmedPath}`;
}
