export function prependTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}
