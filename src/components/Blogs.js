import BlogCard from "./BlogCard";
import { useMedium } from "react-use-medium";

export default function Blogs() {
  const { data, isFetched } = useMedium("samerbuna");

  return (
    <section id="blog__section" className="services__section">
      <div className="services__section__header">
        <div className="home__section__sub__heading">
          If you interested to know how i do this
        </div>
        <div className="home__section__heading">Blogs</div>
      </div>
      <div className="services__section__content">
        {isFetched
          ? data &&
            data.items
              .filter((item, i) => i < 4 && i > 0)
              .map((item) => (
                <BlogCard key={JSON.stringify(item)} data={item} />
              ))
          : null}
      </div>
    </section>
  );
}
