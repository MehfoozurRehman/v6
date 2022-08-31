import ServicesCard from "./ServicesCard";

export default function Services() {
  return (
    <section id="services__section" className="services__section">
      <div className="services__section__header">
        <div className="home__section__sub__heading">What i can do for you</div>
        <div className="home__section__heading">Services</div>
      </div>
      <div className="services__section__content">
        <ServicesCard
          title="Web Development"
          skills={[
            "ReactJS",
            "MongoDB",
            "ExpressJS",
            "NodeJS",
            "Typescript",
            "Graphql",
            "Rest",
          ]}
        />
        <ServicesCard
          title="Application Development"
          skills={[
            "React Native",
            "Electron",
            "MongoDB",
            "ExpressJS",
            "NodeJS",
            "Graphql",
            "Rest",
          ]}
        />
        <ServicesCard
          title="Testing & Analytics"
          skills={["Firebase", "Simple Analytics", "Jest"]}
        />
        <ServicesCard title="UI / UX Design" skills={["Adobe Xd", "Figma"]} />
        <ServicesCard title="Graphic Design" skills={["Illustrator", "Gimp"]} />
      </div>
    </section>
  );
}
