import { getText } from "../utils/getText";
import { parseDate } from "../utils/perseDate";

export default function BlogCard({ data }) {
  return (
    <a href={data.link} className="card" style={{ padding: 0 }}>
      <img src={data.thumbnail} alt={data.title} className="card__banner" />
      <div style={{ padding: "2em" }}>
        <div className="card__heading">{data.title}</div>
        <div className="card__info">
          {getText(data.description).substring(0, 130) + "..."}
        </div>
        <div
          className="portfolio__section__content__entry__content"
          style={{ marginBottom: "0em" }}
        >
          {parseDate(data.pubDate)} - By {data.author}
        </div>
      </div>
    </a>
  );
}
