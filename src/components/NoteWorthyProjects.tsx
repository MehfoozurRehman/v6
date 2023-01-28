import ProjectCard from "./ProjectCard";
import { fetcher } from "../utils/fetcher";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { useTransition } from "react";

export default function NoteWorthyProjects() {
  const [_isPending, startTransition] = useTransition();
  const navigate = useNavigate();
  const { data, error } = useSWR(
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
        {error ? (
          <div>failed to load</div>
        ) : (
          data
            ?.filter((item, i) => i <= 8 && item.fork === false)
            ?.map((item: any) => <ProjectCard item={item} key={item.id} />)
        )}
      </div>
      <button
        className="home__section__button"
        onClick={() => {
          startTransition(() => {
            window.scrollTo({ behavior: "smooth", top: 0 });
            navigate("/archive");
          });
        }}
        style={{ margin: "0 auto", marginTop: "4em" }}
        title="Load more projects"
      >
        Load more
      </button>
    </section>
  );
}
