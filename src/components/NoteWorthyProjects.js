import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { fetcher } from "../utils/fetcher";
import ProjectCard from "./ProjectCard";

export default function NoteWorthyProjects() {
  const navigate = useNavigate();
  const {
    data,
    error,
  } = useSWR(
    "https://api.github.com/users/MehfoozurRehman/repos?per_page=10000&sort=updated",
    fetcher,
    { suspense: true }
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
            ?.filter((item, i) => i <= 8)
            .map((item) => <ProjectCard item={item} key={item.id} />)
        )}
      </div>

      <button
        className="home__section__button"
        onClick={() => {
          navigate("/archive");
          setTimeout(() => {
            window.scrollTo({ behavior: "smooth", top: 0 });
          }, 300);
        }}
        style={{ margin: "0em auto", marginTop: "4em" }}
        title="Load more projects"
      >
        Load more
      </button>
    </section>
  );
}
