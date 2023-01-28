import ReactMarkdown from "react-markdown";
import { mdxFetcher } from "../utils/mdxFetcher";
import { useLocation } from "react-router-dom";
import useSWR from "swr";

export default function ProjectDetails() {
  const location = useLocation();
  const { data } = useSWR(
    "https://raw.githubusercontent.com/mehfoozurrehman/" +
      location.pathname.split("/")[2] +
      "/main/README.md",
    mdxFetcher,
    {
      suspense: true,
    }
  );
  return (
    <section
      id="projects__section"
      className="services__section"
      style={{ marginTop: 0 }}
    >
      <ReactMarkdown className="md__container" children={data} />
    </section>
  );
}
