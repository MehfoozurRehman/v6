import { Box, GitHub, Globe, Layout } from "react-feather";

import fetcher from "../utils/fetcher";
import useSWR from "swr";

export default function Archive() {
  const { data } = useSWR(
    "https://api.github.com/users/MehfoozurRehman/repos?per_page=10000&sort=updated",
    fetcher,
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
      <div className="services__section__header">
        <div className="home__section__sub__heading">
          List of all the projects i have done
        </div>
        <div className="home__section__heading">Archive</div>
      </div>
      {data !== undefined && (
        <div className="services__section__content" style={{ marginRight: 0 }}>
          {data
            ?.filter((item) => item.fork === false)
            ?.map((item) => (
              <div key={item.id} className="services__section__content__list">
                <div className="card__heading">
                  {item.homepage && item.homepage !== null ? (
                    <Layout size={30} color="currentColor" />
                  ) : (
                    <Box size={30} color="currentColor" />
                  )}
                  <span>{item.name.replace(/-/g, " ").replace(/_/g, " ")}</span>
                </div>
                <div
                  className="card__info"
                  style={{
                    minHeight: "fit-content",
                  }}
                >
                  {item.description}
                </div>
                <div className="portfolio__section__content__entry__content">
                  {item.language !== null ? item.language : "HTML"}
                </div>
                <div className="portfolio__section__content__entry__buttons">
                  <a
                    href={item.html_url}
                    className="portfolio__section__content__entry__button"
                  >
                    <GitHub size={20} color="currentColor" />
                    Github
                  </a>
                  {item.homepage && item.homepage !== null ? (
                    <a
                      href={item.homepage}
                      className="portfolio__section__content__entry__button"
                    >
                      <Globe size={20} color="currentColor" />
                      Website
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}
