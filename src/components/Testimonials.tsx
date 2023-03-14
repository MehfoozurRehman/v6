import { Swiper, SwiperSlide } from "swiper/react";
import { memo, useEffect, useState } from "react";

import { Autoplay } from "swiper";
import TestimonialsCard from "./TestimonialsCard";

const data = [
  {
    name: "Hammad Habib",
    designation: "CEO-Crazybeings Studios",
    avatar:
      "https://pps.whatsapp.net/v/t61.24694-24/316473669_100509249562203_2709700008914137589_n.jpg?ccb=11-4&oh=01_AdQk4XjXQr1mVa6Gi5VFKRVOyfT8iPNpQt3UG5XP2SrWJw&oe=640882AA",
    message:
      "I have been working with Mehfooz for over 2 years now and he has been a great asset to our team. He is a very talented developer. He is very professional and always delivers on time.",
  },
  {
    name: "Dayyan Shahid",
    designation: "CEO-DSME Globals",
    avatar:
      "https://pps.whatsapp.net/v/t61.24694-24/324732660_960244285385806_5620088309334937601_n.jpg?ccb=11-4&oh=01_AdRjximA_sPNEV-Lm5kV5MdD8uF1JrW-CqcanBInP3TUuQ&oe=640895EF",

    message:
      "Mehfooz is a very talented and has a great eye for design. He is very professional and always delivers on time. I would highly recommend Mehfooz for any web development project.",
  },
];

const Testimonials = memo(() => {
  const [slidesPerView, setSlidesPerView] = useState(2);

  function changeSlidesPerView() {
    if (window.innerWidth < 700) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(1.5);
    } else {
      setSlidesPerView(2);
    }
  }

  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);

  return (
    <section id="testimonials__section" className="services__section">
      <div className="services__section__header">
        <div className="home__section__sub__heading">
          Feedback from my clients & team
        </div>
        <div className="home__section__heading">Testimonials</div>
      </div>
      <div className="services__section__content services__section__content__test">
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
          {data?.map((item) => (
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
