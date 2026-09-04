import { GitHub, Link } from "react-feather";

import { memo } from "react";
import project from "../assets/project.webp";

interface WorkCardProps {
  tech: string[];
  right?: boolean;
  banner?: string;
  info?: string;
  siteLink?: string;
  githubLink?: string;
  name: string;
}

const WorkCard = memo(
  ({
    tech,
    right,
    banner,
    info,
    siteLink,
    githubLink,
    name,
  }: WorkCardProps) => (
    <div
      className="work__section__entry"
      style={right ? { justifyContent: "flex-end" } : null}
    >
      <a
        href={siteLink}
        className="work__section__entry__left"
        title={name.replace(".com", "")}
      >
        <img
          loading="lazy"
          src={banner ? banner : project}
          alt={name.replace(".com", "")}
          className="work__section__entry__left__img"
        />
      </a>
      <div
        className="work__section__entry__right"
        style={right ? { left: 0, alignItems: "flex-start" } : null}
      >
        <div className="work__section__entry__right__sub__heading">
          DSME Globals
        </div>
        <div className="work__section__entry__right__heading">
          {name.replace(".com", "")}
        </div>
        <div
          className="work__section__entry__right__info"
          style={right ? { textAlign: "left" } : null}
        >
          {info
            ? info
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro saepe dolores tempore voluptate voluptatem eum qui. Nobis consectetur in odio a iure iste laborum vero, assumenda omnis. Laudantium, ab unde."}
        </div>
        <div
          className="work__section__entry__right__tech"
          style={right ? { textAlign: "left" } : null}
        >
          {tech?.map((item, i) => (i !== tech.length - 1 ? item + ", " : item))}
        </div>
        <div className="work__section__entry__right__links">
          <a
            href={siteLink}
            className="work__section__entry__right__links__link"
            title="github"
          >
            <GitHub size={20} color="currentColor" />
          </a>
          <a
            href={githubLink}
            className="work__section__entry__right__links__link"
            title="website"
          >
            <Link size={20} color="currentColor" />
          </a>
        </div>
      </div>
    </div>
  )
);

export default WorkCard;
