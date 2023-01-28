import { Mail, MapPin, Phone } from "react-feather";
import { useEffect, useRef, useState } from "react";

import { InputBox } from "./InputBox";
import { TextareaBox } from "./TextareaBox";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (submitted) {
        form.current.reset();
        setSubmitted(false);
      }
    }, 3000);
  }, [submitted]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3dm7yud",
        "template_vu88eib",
        form.current,
        "user_5E0L53uCeIn6J8FtgNgs8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
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
                style={{ fontSize: 16, textAlign: "center", margin: "5em 0em" }}
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
  );
}
