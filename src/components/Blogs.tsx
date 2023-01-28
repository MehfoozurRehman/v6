import BlogCard from "./BlogCard";

export default function Blogs() {
  return (
    <section id="blog__section" className="services__section">
      <div className="services__section__header">
        <div className="home__section__sub__heading">
          If you interested to know how i do this
        </div>
        <div className="home__section__heading">Blogs</div>
      </div>
      <div className="services__section__content">
        <BlogCard />
      </div>
    </section>
  );
}
