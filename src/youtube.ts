export default class LiteYTEmbedUtils {
  static preconnected = false;
  static addPrefetch(kind: string, url: string, as?: string) {
    const linkElem = document.createElement('link');
    linkElem.rel = kind;
    linkElem.href = url;
    if (as) {
      linkElem.as = as;
    }
    document.head.append(linkElem);
  }

  /**
   * Begin pre-connecting to warm up the iframe load
   * Since the embed's network requests load within its iframe,
   *   preload/prefetch'ing them outside the iframe will only cause double-downloads.
   * So, the best we can do is warm up a few connections to origins that are in the critical path.
   *
   * Maybe `<link rel=preload as=document>` would work, but it's unsupported: http://crbug.com/593267
   * But TBH, I don't think it'll happen soon with Site Isolation and split caches adding serious complexity.
   */
  static warmConnections() {
    if (this.preconnected) return;
    // The iframe document and most of its subresources come right off youtube.com
    this.addPrefetch(
      'preconnect',
      'https://www.youtube-nocookie.com',
    );
    // The botguard script is fetched off from google.com
    this.addPrefetch('preconnect', 'https://www.google.com');

    // Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.
    this.addPrefetch(
      'preconnect',
      'https://googleads.g.doubleclick.net',
    );
    this.addPrefetch(
      'preconnect',
      'https://static.doubleclick.net',
    );

    this.preconnected = true;
  }
}
