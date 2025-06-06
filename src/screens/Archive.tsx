import { Box, GitHub, Globe, Layout } from "react-feather";

import fetcher from "../utils/fetcher";
import useSWR from "swr";

export default function Archive() {
  const { data, isLoading } = useSWR(
    "https://api.github.com/users/MehfoozurRehman/repos?per_page=10000&sort=updated",
    fetcher,
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
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "#64ffda",
          }}
        >
          <svg
            style={{ width: "100px", height: "100px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 150"
          >
            <path
              fill="none"
              stroke="#64ffda"
              stroke-width="15"
              stroke-linecap="round"
              stroke-dasharray="300 385"
              stroke-dashoffset="0"
              d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
            >
              <animate
                attributeName="stroke-dashoffset"
                calcMode="spline"
                dur="2"
                values="685;-685"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
              ></animate>
            </path>
          </svg>
        </div>
      )}
      {data !== undefined && (
        <div className="services__section__content" style={{ marginRight: 0 }}>
          {data
            ?.filter((item: { fork: boolean }) => item.fork === false)
            ?.map((item: any) => (
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
                  style={{ minHeight: "fit-content" }}
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
                  {item.homepage && item.homepage !== null && (
                    <a
                      href={item.homepage}
                      className="portfolio__section__content__entry__button"
                    >
                      <Globe size={20} color="currentColor" />
                      Website
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}
