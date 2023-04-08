import { Swiper, SwiperSlide } from "swiper/react";
import { memo, useEffect, useState } from "react";

import { Autoplay } from "swiper";
import TestimonialsCard from "./TestimonialsCard";
import dayyan from "../assets/dayyan.jpg";
import hammad from "../assets/hammad.png";

const testimonials = [
  {
    name: "Hammad Habib",
    designation: "Ceo Crazybeings Studios",
    avatar: hammad,
    message:
      "I have had the pleasure of working with Mehfooz for over two years, and I must say that he has been an indispensable asset to our team. Mehfooz is an incredibly talented developer who brings a wealth of experience and expertise to every project he works on. He is a consummate professional, always demonstrating the highest levels of integrity, work ethic, and dedication. One of the things that I appreciate most about Mehfooz is his unparalleled attention to detail, which ensures that the projects he works on are of the highest quality. Above all, Mehfooz is someone you can always rely on - he consistently delivers projects on time, every time. I would highly recommend Mehfooz to anyone looking for a top-tier developer who is passionate about his craft and committed to helping his clients achieve their goals.",
  },
  {
    name: "Dayyan Shahid",
    designation: "Ceo Dsme Globals",
    avatar: dayyan,
    message:
      "Mehfooz is a very talented and has a great eye for design. He is very professional and always delivers on time. I would highly recommend Mehfooz for any web development project.",
  },
  {
    name: "blackswanlrn",
    designation: "Employeer from Fiverr",
    message:
      "Mehfooz was very helpful, from beginning to end. He helped me get set up with VS Code Live Share, and then quickly solved one of my bugs/misunderstandings about React. He then patiently and diligently worked through another bug, helping me to understand that my problem was due to the state hook I was using.",
  },
];

const Testimonials = memo(() => {
  const [slidesPerView, setSlidesPerView] = useState(2.2);
  const [isMobile, setIsMobile] = useState(false);

  function changeSlidesPerView() {
    const windowWidth = window.innerWidth;
    const newSlidesPerView =
      windowWidth < 700 ? 1 : windowWidth < 1000 ? 1.5 : 2.2;
    setSlidesPerView(newSlidesPerView);
    setIsMobile(windowWidth < 800);
  }

  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
    return () => {
      window.removeEventListener("resize", changeSlidesPerView);
    };
  }, []);

  return (
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
        <Swiper
          loop={true}
          spaceBetween={30}
          modules={[Autoplay]}
          slidesPerView={slidesPerView}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {testimonials?.map((item) => (
            <SwiperSlide key={JSON.stringify(item)}>
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
  );
});

export default Testimonials;
