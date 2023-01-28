export const mdxFetcher = (...args: any[]) =>
  fetch(...args).then((res) => res.text());
