import ServicesCard from "./ServicesCard";

const services = [
  {
    title: "Frontend Development",
    skills: [
      "ReactJS",
      "NextJS",
      "Remix",
      "Jotai",
      "Typescript",
      "React Native",
      "Electron",
      "Redux",
      "Netlify",
      "Vercel",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "Graphql",
      "Rest",
      "Firebase",
      "Railway",
      "Heroku",
    ],
  },
  {
    title: "General",
    skills: ["Adobe Xd", "Figma", "Illustrator", "Gimp", "Git", "yarn", "npm"],
  },
];

export default function Services() {
  return (
    <section id="services__section" className="services__section">
      <div className="services__section__header">
        <div className="home__section__sub__heading">What can i do for you</div>
        <div className="home__section__heading">Services</div>
      </div>
      <div className="services__section__content">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            skills={service.skills}
          />
        ))}
      </div>
    </section>
  );
}
