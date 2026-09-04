import { Key, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import ClientCard from "./ClientCard";

interface ClientsProps {
  data: any;
}

export default function Clients({ data }: ClientsProps) {
  const sliderConfig = [
    { width: 500, slides: 1 },
    { width: 700, slides: 2 },
    { width: 1000, slides: 3 },
    { width: 1366, slides: 4 },
    { width: 1500, slides: 5 },
    { width: Infinity, slides: 6 },
  ];

  const [slidesPerView, setSlidesPerView] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  function changeSlidesPerView() {
    const windowWidth = window.innerWidth;
    const { slides } = sliderConfig.find((s) => s.width > windowWidth);
    setIsMobile(windowWidth < 800);
    setSlidesPerView(slides);
  }

  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
    return () => {
      window.removeEventListener("resize", changeSlidesPerView);
    };
  }, []);

  return (
    <section id="clients__section" className="services__section">
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
          slidesPerView={slidesPerView}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {data?.map((item: { _id: Key; name: any; logo: string }) => (
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
    </section>
  );
}
