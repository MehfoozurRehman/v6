import { aida, dsmeglobal, seevitals } from "../assets";

import WorkCard from "./WorkCard";
import { memo } from "react";

const works = [
  {
    name: "AIDA Pro",
    tech: ["ReactJS", "ReactNative", "Sass", "Firebase", "Adobe Xd", "Rest"],
    banner: aida,
    info: "A website for startup to help companies and freelancers or jobseekers connect with candidates pre curated for companies according to customized requirements of companies",
    siteLink: "https://aida-pro.web.app/",
    githubLink: "https://github.com/MehfoozurRehman/Aida-Website"
  },
  {
    right: true,
    name: "DSMEGlobals.com",
    tech: ["ReactJS", "Sass", "Firebase", "Adobe Xd", "Rest"],
    banner: dsmeglobal,
    info: "A website for a startup empowering and helping non technical personal to build creative and intuitive digital identity",
    siteLink: "http://www.dsmeglobal.co/",
    githubLink: "https://github.com/MehfoozurRehman/dsmeglobal"
  },
  {
    name: "SeeVitals",
    tech: ["ReactJS", "Sass", "Firebase", "Adobe Xd", "Rest"],
    banner: seevitals,
    info: "A website for startup SeeVitals Technologies is an ambitious project brought to life by 3 friends that have recognized the dire need of technological interventions in the healthcare industry. 2 doctors having worked in numerous healthcare setups from around the world understood that the need to optimize the role of nurses and allied hospital sta…",
    siteLink: "http://seevitals.com/",
    githubLink: "https://github.com/MehfoozurRehman/seevitalsweb"
  }
];

const Work = memo(() => (
  <section id="work__section" className="work__section">
    <div className="work__section__header">
      <div className="home__section__sub__heading">Some Things I’ve Built</div>
      <div className="home__section__heading">Work</div>
    </div>
      {works.map((work, index) => (
        <WorkCard
          key={index}
          name={work.name}
          tech={work.tech}
          banner={work.banner}
          info={work.info}
          siteLink={work.siteLink}
          githubLink={work.githubLink}
          right={work.right}
        />
      ))}
  </section>
));

export default Work;
