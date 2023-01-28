import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import TestimonialsCard from "./TestimonialsCard";

export default function Testimonials() {
  const [slidesPerView, setSlidesPerView] = useState(2.5);

  const data = [
    {
      name: "Lance Jarvis",
      designation: "General Manager",
      avatar: "https://testimonialapi.toolcarton.com/avatar/1.jpg",
      message:
        "We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service.",
    },
    {
      name: "Juliet Wright",
      designation: "Technical Director",
      avatar: "https://testimonialapi.toolcarton.com/avatar/2.jpg",
      message:
        "It has changed the way I used the website. Product lets you create anything you envision and it does it so easy and flawless. I can't imagine not working with the service.",
    },
    {
      name: "Michael D.",
      designation: "Investor",
      avatar: "https://testimonialapi.toolcarton.com/avatar/3.jpg",
      message:
        "Insights from service drove 30% lift in our conversions, this product service is essential for your company growth strategy.",
    },
    {
      name: "Kylie Lutz",
      designation: "Freelancer",
      avatar: "https://testimonialapi.toolcarton.com/avatar/4.jpg",
      message:
        "The company really helped with my personal branding - everything from conception to execution was amazing and super professional. Looking forwards for upgradation.",
    },
    {
      name: "Mark Twin",
      designation: "Developer",
      avatar: "https://testimonialapi.toolcarton.com/avatar/5.jpg",
      message:
        "Best company I have ever deal with online! Quick delivery and excellent customer service. Will definetly upgrade the service.",
    },
    {
      name: "Anne",
      designation: "Content Writer & Artist",
      avatar: "https://testimonialapi.toolcarton.com/avatar/6.jpg",
      message:
        "These folks are my go-to for any design or branding services. Excellent communication and I feel like I'm always a priority for them.",
    },
    {
      name: "Bryan S.",
      location: "Sydney, Australia",
      avatar: "https://testimonialapi.toolcarton.com/avatar/7.jpg",
      message:
        "Love your stuff, the quality has been incredible year after year. I tell everyone I know that they have to try the product. Thank you to the team the whole team.",
    },
    {
      name: "Kamren Hays",
      designation: "Marketing Head",
      avatar: "https://testimonialapi.toolcarton.com/avatar/8.jpg",
      message:
        "Product bring 10x multiplier in terms of both ease and spread of use. I'm able to quickly and easily execute on my marketing strategies. That the fundamental difference from other services.",
    },
    {
      name: "Diane Smith",
      designation: "Sales Head",
      avatar: "https://testimonialapi.toolcarton.com/avatar/9.jpg",
      message:
        "Team offers a powerful suite of tools that every client must have. And if you get stuck their support team will help out. Its is fast, reliable and has no complications at all.",
    },
    {
      name: "Mikayla Mccullough",
      designation: "Designer",
      avatar: "https://testimonialapi.toolcarton.com/avatar/10.jpg",
      message:
        "The vibe, level of inquiry, feedback and traffic at our product services and newly designed booth at a recent conference was very positive.",
    },
  ];

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
}
