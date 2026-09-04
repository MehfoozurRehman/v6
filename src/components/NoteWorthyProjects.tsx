import useSWR, { preload } from "swr";

import ProjectCard from "./ProjectCard";
import fetcher from "../utils/fetcher";
import { useLocation } from "wouter";

preload(
  "https://api.github.com/users/MehfoozurRehman/repos?sort=updated",
  fetcher
);

export default function NoteWorthyProjects() {
  const [, navigate] = useLocation();
  const { data } = useSWR(
    "https://api.github.com/users/MehfoozurRehman/repos?sort=updated",
    fetcher
  );

  return (
    <section id="projects__section" className="services__section">
      <div className="services__section__header">
        <div className="home__section__sub__heading">
          Other Noteworthy Projects
        </div>
        <div className="home__section__heading">Projects</div>
      </div>
      <div className="services__section__content">
        {data
          ?.filter((item) => item.description && !item.fork)
          ?.slice(0, 6)
          ?.map((item) => (
            <ProjectCard item={item} key={item.id} />
          ))}
      </div>
      <button
        className="home__section__button"
        onClick={() => {
          window.scrollTo({ behavior: "smooth", top: 0 });
          navigate("/archive");
        }}
        style={{ margin: "0 auto", marginTop: "4em" }}
        title="Load more projects"
      >
        Load more
      </button>
    </section>
  );
}
