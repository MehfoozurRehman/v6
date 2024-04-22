import { Mail, MapPin, Phone } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import useSWR, { preload } from "swr";

import Calendar from "react-github-calendar";
import InputBox from "../components/InputBox";
import ProjectCard from "../components/ProjectCard";
import ServicesCard from "../components/ServicesCard";
import TestimonialsCard from "../components/TestimonialsCard";
import TextareaBox from "../components/TextareaBox";
import WorkCard from "../components/WorkCard";
import emailjs from "@emailjs/browser";
import fetcher from "../utils/fetcher";
import getExperience from "../utils/getExperience";
import { pic } from "../assets";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { useLocation } from "wouter";
import { works } from "../data/works";

// import ClientCard from "../components/ClientCard";

preload("https://api.github.com/users/MehfoozurRehman", fetcher);
preload(
  "https://api.github.com/users/MehfoozurRehman/repos?sort=updated",
  fetcher
);

export default function Home() {
  const [, navigate] = useLocation();
  const { data: projects } = useSWR(
    "https://api.github.com/users/MehfoozurRehman/repos?sort=updated",
    fetcher
  );
  const { data } = useSWR(
    "https://api.github.com/users/MehfoozurRehman",
    fetcher
  );

  // const sliderConfig = [
  //   { width: 500, slides: 1 },
  //   { width: 700, slides: 2 },
  //   { width: 1000, slides: 3 },
  //   { width: 1366, slides: 4 },
  //   { width: 1500, slides: 5 },
  //   { width: Infinity, slides: 6 },
  // ];

  // const [clientSlidesPerView, setClientSlidesPerView] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  // function changeClientSlidesPerView() {
  //   const windowWidth = window.innerWidth;
  //   const { slides } = sliderConfig.find((s) => s.width > windowWidth);
  //   setIsMobile(windowWidth < 800);
  //   setClientSlidesPerView(slides);
  // }
  const [testimonialSlidesPerView, setTestimonialtestimonialSlidesPerView] =
    useState(2);

  function changeTestimonialSlidesPerView() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 700) {
      setTestimonialtestimonialSlidesPerView(1);
      setIsMobile(true);
    } else if (windowWidth < 1000) {
      setTestimonialtestimonialSlidesPerView(1.5);
      setIsMobile(true);
    } else {
      setTestimonialtestimonialSlidesPerView(2);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    // changeClientSlidesPerView();
    changeTestimonialSlidesPerView();
    // window.addEventListener("resize", changeClientSlidesPerView);
    window.addEventListener("resize", changeTestimonialSlidesPerView);
    return () => {
      // window.removeEventListener("resize", changeClientSlidesPerView);
      window.removeEventListener("resize", changeTestimonialSlidesPerView);
    };
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        form.current.reset();
        setSubmitted(false);
      }, 3000);
    }
  }, [submitted]);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_3dm7yud",
        "template_vu88eib",
        form.current,
        "user_5E0L53uCeIn6J8FtgNgs8"
      );
      setSubmitted(true);
    } catch (error) {
      alert(error.text);
    }
  };

  return (
    <>
      <section id="home__section" className="home__section">
        <div className="home__section__sub__heading">Hi, i am</div>
        <div className="home__section__heading">Mefooz-ur-Rehman</div>
        <div className="home__section__slogan">
          Let's Build You A <span>Digital Identity</span>
        </div>
        <div className="home__section__info">
          I'm a Web Developer based in Pakistan. Proficient in web and mobile
          development. I enjoy turning complex problems into simple, beautiful
          and intuitive solutions. Working at this time for
          <a href="https://crazybeingstudio.com/" target="_blank">
            Crazybeings Studio
          </a>
        </div>
        <button
          className="home__section__button"
          title="Check out my work!"
          onClick={() => {
            document.getElementById("work__section").scrollIntoView();
            document.getElementById("work").checked = true;
          }}
        >
          Check out my work!
        </button>
      </section>
      <section id="about__section" className="about__section">
        <div className="about__section__left">
          <div className="about__section__left__content">
            <div className="about__section__left__content__blob">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M61.4,-21.8C67.3,-1.8,51.3,23.4,29.1,39.4C6.9,55.4,-21.5,62,-40.9,49.5C-60.4,37,-70.8,5.3,-62.5,-18C-54.1,-41.3,-27.1,-56.3,0.3,-56.4C27.7,-56.5,55.5,-41.8,61.4,-21.8Z"
                  transform="translate(100 100)"
                ></path>
              </svg>
              <div className="about__section__left__content__blob__content">
                {getExperience(data?.created_at)} +
                <span>Years of Experience</span>
              </div>
            </div>
            <div className="about__section__left__content__blob">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44.3,-14.2C52.2,10.1,50,38,34.9,49.2C19.8,60.5,-8.2,55.2,-24.9,41.4C-41.5,27.6,-46.8,5.3,-40.8,-16.4C-34.7,-38.1,-17.4,-59.3,0.4,-59.4C18.1,-59.6,36.3,-38.6,44.3,-14.2Z"
                  transform="translate(100 100)"
                ></path>
              </svg>
              <div className="about__section__left__content__blob__content">
                {data?.public_repos + data?.total_private_repos} +
                <span>Projects Completed</span>
              </div>
            </div>
            <div className="about__section__left__content__blob">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M54.3,-18.6C59.7,-1.2,45.9,21.5,28.1,33.1C10.3,44.7,-11.5,45.3,-32,33C-52.5,20.7,-71.7,-4.4,-66.2,-22.1C-60.6,-39.8,-30.3,-50,-2.9,-49C24.5,-48.1,49,-36,54.3,-18.6Z"
                  transform="translate(100 100)"
                ></path>
              </svg>
              <div className="about__section__left__content__blob__content">
                50 +<span>Happy Clients</span>
              </div>
            </div>
            <img
              src={pic}
              alt={data?.login}
              className="about__section__left__content__img"
            />
          </div>
        </div>
        <div className="about__section__right">
          <div className="home__section__sub__heading">
            Let me introduce myself
          </div>
          <div
            className="home__section__heading"
            style={{
              marginBottom: -20,
            }}
          >
            About me
          </div>
          <div
            className="home__section__info"
            style={{
              marginBottom: 0,
              maxWidth: "unset",
            }}
          >
            I'm a Web Developer based in Pakistan. I enjoy turning complex
            problems into simple, beautiful and intuitive solutions.
          </div>
          <div
            className="home__section__info"
            style={{
              marginTop: 20,
              maxWidth: "unset",
            }}
          >
            I like to build functional and user-friendly and at the same time
            attractive websites for you. Moreover, I add a personal touch to
            your product and make sure that it is eye-catching and easy to use.
            My aim is to bring across your message and identity in the most
            creative way.
          </div>
          <a
            href="https://docs.google.com/document/d/1Z3e-5Ti2Zw9aol5RH5BUoiL8AC7HROHHQQkfvX6MQbQ/edit?usp=sharing"
            className="home__section__button"
            title="Download CV"
          >
            Download CV
          </a>
        </div>
      </section>
      <section id="services__section" className="services__section">
        <div className="services__section__header">
          <div className="home__section__sub__heading">
            What can i do for you
          </div>
          <div className="home__section__heading">Services</div>
        </div>
        <div className="services__section__content">
          {services?.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              skills={service.skills}
            />
          ))}
        </div>
      </section>
      <section id="work__section" className="work__section">
        <div className="work__section__header">
          <div className="home__section__sub__heading">
            Some Things I’ve Built
          </div>
          <div className="home__section__heading">Work</div>
        </div>
        {works?.map((work, index) => (
          <WorkCard
            key={index}
            company={work.company}
            name={work.name}
            tech={work.tech}
            banner={work.banner}
            info={work.info}
            siteLink={work.siteLink}
            right={work.right}
          />
        ))}
      </section>
      <section id="projects__section" className="services__section">
        <div className="services__section__header">
          <div className="home__section__sub__heading">
            Other Noteworthy Projects
          </div>
          <div className="home__section__heading">Projects</div>
        </div>
        <div className="services__section__content">
          {projects
            ?.filter((item) => item.description && !item.fork)
            ?.slice(0, 6)
            ?.map((item) => (
              <ProjectCard item={item} key={item.id} />
            ))}
        </div>
        <button
          className="home__section__button"
          onClick={() => {
            window.scrollTo({ behavior: "smooth", top: 0 });
            navigate("/archive");
          }}
          style={{ margin: "0 auto", marginTop: "4em" }}
          title="Load more projects"
        >
          Load more
        </button>
      </section>
      <div className="github__calender__wapper">
        <Calendar
          username="mehfoozurrehman"
          blockRadius={5}
          fontSize={14}
          year={new Date().getFullYear()}
          style={{
            color: "white",
            margin: "0 2em",
            marginBottom: "3em",
            marginTop: "-3em",
            padding: "2em",
          }}
          blockSize={16}
        />
      </div>
      {/* <section id="clients__section" className="services__section">
        <div className="services__section__header">
          <div className="home__section__sub__heading">
            Who I have worked with
          </div>
          <div className="home__section__heading">Clients</div>
        </div>
        <div
          className="services__section__content"
          style={{
            paddingRight: isMobile ? 0 : "2em",
            marginLeft: 0,
          }}
        >
          <Swiper
            loop={true}
            spaceBetween={30}
            modules={[Autoplay]}
            slidesPerView={clientSlidesPerView}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {clients?.map((item: { _id: Key; name: any; logo: string }) => (
              <SwiperSlide key={JSON.stringify(item)}>
                <ClientCard
                  key={item._id}
                  name={item.name}
                  image={
                    "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                    item.logo
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
      <section id="testimonials__section" className="services__section">
        <div className="services__section__header">
          <div className="home__section__sub__heading">
            Feedback from my clients & team
          </div>
          <div className="home__section__heading">Testimonials</div>
        </div>
        <div
          className="services__section__content"
          style={{
            paddingRight: isMobile ? 0 : "2em",
          }}
        >
          <Swiper slidesPerView={testimonialSlidesPerView} spaceBetween={30}>
            {testimonials?.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialsCard
                  imageSrc={item.avatar}
                  title={item.name}
                  info={item.message}
                  designation={item.designation}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section
        id="contact__section"
        className="services__section"
        style={{ overflow: "unset" }}
      >
        <div
          className="services__section__header"
          style={{ alignItems: "flex-start" }}
        >
          <div className="home__section__sub__heading">Get in touch</div>
          <div className="home__section__heading">Contact</div>
        </div>
        <div
          className="services__section__content services__section__content__special"
          style={{ alignItems: "flex-start", marginRight: "-2em" }}
        >
          <div className="services__section__content__left">
            <div className="services__section__content__left__entry">
              <div className="services__section__content__left__entry__icon">
                <MapPin size={20} color="currentColor" />
              </div>
              <div className="services__section__content__left__entry__content">
                Samundri, Faisalabad, Punjab, Pakistan
              </div>
            </div>
            <div className="services__section__content__left__entry">
              <div className="services__section__content__left__entry__icon">
                <Phone size={20} color="currentColor" />
              </div>
              <div className="services__section__content__left__entry__content">
                +92 313 7178074
              </div>
            </div>
            <div className="services__section__content__left__entry">
              <div className="services__section__content__left__entry__icon">
                <Mail size={20} color="currentColor" />
              </div>
              <div className="services__section__content__left__entry__content">
                mehfoozijaz786@gmail.com
              </div>
            </div>
          </div>
          <div className="services__section__content__right">
            <form
              className="services__section__content__right__form"
              ref={form}
              id="contact__form"
              onSubmit={sendEmail}
            >
              {submitted ? (
                <div
                  className="home__section__heading"
                  style={{
                    fontSize: 16,
                    textAlign: "center",
                    margin: "5em 0em",
                  }}
                >
                  Thanks for sending message
                </div>
              ) : (
                <>
                  <div className="home__section__heading">Say Something</div>
                  <InputBox
                    placeholder="Your Name"
                    type="text"
                    name="from_name"
                  />
                  <InputBox
                    placeholder="Email Address"
                    type="email"
                    name="email"
                  />
                  <InputBox placeholder="Subject" type="text" name="subject" />
                  <TextareaBox placeholder="Message" />
                  <button
                    className="home__section__button"
                    style={{ width: "100%", marginTop: 20 }}
                    title="send"
                    type="submit"
                  >
                    Send
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
