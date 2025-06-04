export default (args: any) =>
  fetch(args, {
    headers: { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` },
  }).then((res) => res.json());
