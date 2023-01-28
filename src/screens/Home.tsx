import AboutMe from "../components/AboutMe";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import GithubCalender from "../components/GithubCalender";
import HomeSection from "../components/HomeSection";
import NoteWorthyProjects from "../components/NoteWorthyProjects";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Work from "../components/Work";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";

// import Blogs from "../components/Blogs";

export default function Home() {
  const { data } = useSWR(
    "https://dsmeglobal-api-production.up.railway.app/api/v1/get_client",
    fetcher
  );
  return (
    <>
      <HomeSection />
      <AboutMe happyClients={data} />
      <Services />
      <Work />
      <NoteWorthyProjects />
      <GithubCalender />
      <Clients data={data} />
      <Testimonials />
      {/* <Blogs /> */}
      <Contact />
    </>
  );
}
