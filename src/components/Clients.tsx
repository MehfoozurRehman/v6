import { Key, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import ClientCard from "./ClientCard";

interface ClientsProps {
  data: any;
}

export default function Clients({ data }: ClientsProps) {
  const [slidesPerView, setSlidesPerView] = useState(6);

  function changeSlidesPerView() {
    if (window.innerWidth < 500) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 700) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1366) {
      setSlidesPerView(4);
    } else if (window.innerWidth < 1500) {
      setSlidesPerView(5);
    } else {
      setSlidesPerView(6);
    }
  }

  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
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
          marginRight: 0,
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
