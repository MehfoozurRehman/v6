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
          skills={["ReactJS", "NextJS", "Remix", "Jotai", "Typescript"]}
        />
        <ServicesCard
          title="Application Development"
          skills={["React Native", "Electron", "Redux"]}
        />
        <ServicesCard
          title="Backend Development"
          skills={["MongoDB", "ExpressJS", "NodeJS", "Graphql", "Rest"]}
        />
        <ServicesCard
          title="Testing & Analytics"
          skills={["Firebase", "Google Analytics", "Simple Analytics", "Jest"]}
        />
        <ServicesCard
          title="Hosting"
          skills={[
            "Railway",
            "Netlify",
            "Heroku",
            "Vercel",
            "Github",
            "Firebase",
          ]}
        />
        <ServicesCard title="UI / UX Design" skills={["Adobe Xd", "Figma"]} />
        <ServicesCard title="Graphic Design" skills={["Illustrator", "Gimp"]} />
        <ServicesCard title="General" skills={["Git", "yarn", "npm"]} />
      </div>
    </section>
  );
}
