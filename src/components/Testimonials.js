import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialsCard from "./TestimonialsCard";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";

export default function Testimonials({}) {
  const [slidesPerView, setSlidesPerView] = useState(2.5);

  const { data, error } = useSWR(
    "https://testimonialapi.toolcarton.com/api",
    fetcher,
    { suspense: true }
  );
  useEffect(() => {
    if (window.innerWidth < 700) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(1.5);
    } else {
      setSlidesPerView(2.4);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1000) {
        setSlidesPerView(1.5);
      } else {
        setSlidesPerView(2.4);
      }
    });
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
        <Swiper slidesPerView={slidesPerView} spaceBetween={30}>
          {error ? (
            <div>failed to load</div>
          ) : (
            data.map((item) => (
              <SwiperSlide key={JSON.stringify(item)}>
                <TestimonialsCard
                  imageSrc={item.avatar}
                  title={item.name}
                  info={item.message}
                  designation={item.designation}
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </section>
  );
}
