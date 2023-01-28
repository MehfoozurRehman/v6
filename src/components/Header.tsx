import { Menu, X } from "react-feather";
import { useLayoutEffect, useState } from "react";

import NavLink from "./NavLink";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const navLinks = [
    {
      label: "Home",
      scrollTo: "home",
      defaultChecked: true,
    },
    {
      label: "About Me",
      scrollTo: "about",
    },
    {
      label: "Services",
      scrollTo: "services",
    },
    {
      label: "Work",
      scrollTo: "work",
    },
    {
      label: "Clients",
      scrollTo: "clients",
    },
    {
      label: "Testimonials",
      scrollTo: "testimonials",
    },
    // {
    //   label: "Blog",
    //   scrollTo: "blog",
    // },
  ];
  const [isNavOpen, setIsNavOpen] = useState(true);
  useLayoutEffect(() => {
    if (window.innerWidth < 950) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 950) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    });
  }, []);

  return (
    <div className="header">
      <div className="header__content">
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            navigate("/");
            setTimeout(() => {
              document.getElementById("home").checked = true;
            }, 300);
          }}
          className="header__content__logo"
          title="logo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="header__content__logo__img"
            viewBox="0 0 169 168"
          >
            <g transform="translate(-857.568 -473.344)">
              <g transform="translate(857.568 473.344)" fill="transparent">
                <path
                  d="M 84.49999237060547 155.2491149902344 C 81.587646484375 155.2491149902344 78.74848937988281 154.6988220214844 76.06140899658203 153.6135406494141 C 73.28136444091797 152.49072265625 70.78355407714844 150.8396301269531 68.63738250732422 148.7061462402344 L 19.59810066223145 99.95704650878906 C 17.43433952331543 97.80608367919922 15.75942707061768 95.29632568359375 14.6198616027832 92.49745941162109 C 13.51892757415771 89.79343414306641 12.96070957183838 86.93447875976562 12.96070957183838 84 C 12.96070957183838 81.06549835205078 13.51892757415771 78.20654296875 14.6198616027832 75.50252532958984 C 15.75942707061768 72.70365142822266 17.43433952331543 70.19389343261719 19.59810066223145 68.04293823242188 L 68.63738250732422 19.29384803771973 C 70.78355407714844 17.16036987304688 73.28136444091797 15.5092830657959 76.06140899658203 14.38645648956299 C 78.74832916259766 13.30123996734619 81.58766174316406 12.7509126663208 84.49981689453125 12.7509126663208 C 84.5 12.7509126663208 84.49981689453125 12.7509126663208 84.49999237060547 12.7509126663208 C 87.41233825683594 12.75089168548584 90.25149536132812 13.30117416381836 92.93857574462891 14.38645648956299 C 95.71862030029297 15.5092830657959 98.2164306640625 17.16036987304688 100.3626022338867 19.29384803771973 L 149.4019012451172 68.04295349121094 C 151.565673828125 70.19391632080078 153.2405853271484 72.70367431640625 154.380126953125 75.50252532958984 C 155.4810638427734 78.20654296875 156.0392761230469 81.06549835205078 156.0392761230469 84 C 156.0392761230469 86.93447875976562 155.4810638427734 89.79345703125 154.380126953125 92.49747467041016 C 153.2405853271484 95.29632568359375 151.565673828125 97.80610656738281 149.4019012451172 99.95706176757812 L 100.3626251220703 148.7061462402344 C 98.21644592285156 150.8396301269531 95.71862030029297 152.49072265625 92.93857574462891 153.6135406494141 C 90.25149536132812 154.6988220214844 87.41233825683594 155.2491149902344 84.49999237060547 155.2491149902344 Z"
                  stroke="none"
                />
                <path
                  d="M 84.49999237060547 15.25088500976562 C 79.18018341064453 15.25088500976562 74.17266082763672 17.31636047363281 70.39987182617188 21.06683349609375 L 21.36061096191406 69.81597900390625 C 17.55601501464844 73.59804534912109 15.46070861816406 78.63536071777344 15.46070861816406 83.99997711181641 C 15.46070861816406 89.36461639404297 17.55599975585938 94.40193176269531 21.36061096191406 98.18404388427734 L 70.39987182617188 146.9331359863281 C 74.17266082763672 150.6836242675781 79.18018341064453 152.7490997314453 84.49999237060547 152.7490997314453 C 89.81977844238281 152.7490997314453 94.82730102539062 150.6836242675781 98.60011291503906 146.9331359863281 L 147.639404296875 98.18404388427734 C 151.4440002441406 94.40195465087891 153.5392761230469 89.36461639404297 153.5392761230469 84 C 153.5392761230469 78.63538360595703 151.4440002441406 73.59804534912109 147.639404296875 69.81595611572266 L 98.60009002685547 21.06683349609375 C 94.82730102539062 17.31636047363281 89.81977844238281 15.25088500976562 84.49999237060547 15.25088500976562 M 84.49999237060547 10.25088500976562 C 90.87481689453125 10.25088500976562 97.2496337890625 12.67420959472656 102.125114440918 17.52082824707031 L 151.1644287109375 66.26995086669922 C 160.99755859375 76.04492950439453 160.99755859375 91.95507049560547 151.1644287109375 101.7300491333008 L 102.1251373291016 150.4791412353516 C 92.37416076660156 160.1724243164062 76.62582397460938 160.1724243164062 66.87484741210938 150.4791412353516 L 17.83558654785156 101.7300491333008 C 8.002426147460938 91.95507049560547 8.002426147460938 76.04490661621094 17.83558654785156 66.26995086669922 L 66.87484741210938 17.52082824707031 C 71.75033569335938 12.67420959472656 78.12516784667969 10.25088500976562 84.49999237060547 10.25088500976562 Z"
                  stroke="none"
                  fill="#64ffda"
                />
              </g>
              <g transform="translate(576.687 249.079)">
                <path
                  d="M390.623,330.884h-5.735V300.492l-18.862,19.061c-1.093-1-1.693-1.5-2.246-2.053-7-6.995-13.949-14.049-21.033-20.96-1.808-1.764-2.9-3.515-2.539-6.11a37.276,37.276,0,0,0,.035-4.712l25.064,25.263,25.317-25.508Z"
                  transform="translate(0)"
                  fill="#64ffda"
                  className="icon"
                />
                <path
                  d="M346.423,333.983v14.376H340.6V319.725l28.716,28.791c-2.085,0-4.413.131-6.713-.069a4.517,4.517,0,0,1-2.355-1.468c-4.416-4.4-8.777-8.848-13.156-13.282Z"
                  transform="translate(-0.236 -17.5)"
                  fill="#64ffda"
                  className="icon"
                />
              </g>
            </g>
          </svg>
        </button>
        <button
          className="header__content__menu"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          title="menu open/close"
        >
          {isNavOpen ? (
            <X size={20} color="currentColor" />
          ) : (
            <Menu size={20} color="currentColor" />
          )}
        </button>
        {isNavOpen ? (
          <div className="header__content__nav">
            <OutsideClickHandler
              onOutsideClick={() => {
                if (window.innerWidth < 950) {
                  setIsNavOpen(false);
                }
              }}
            >
              <div className="header__content__nav__wrapper">
                <div className="header__content__nav__links">
                  {navLinks?.map((link, index) => (
                    <NavLink
                      key={link.label}
                      index={index}
                      label={link.label}
                      scrollTo={link.scrollTo}
                      defaultChecked={link.defaultChecked}
                    />
                  ))}
                </div>
                <div className="header__content__nav__button">
                  <input
                    id="contact"
                    type="radio"
                    name="header__content__nav__links__entry"
                    className="header__content__nav__button__input"
                    onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        document
                          .getElementById("contact__section")
                          .scrollIntoView();
                      }, 300);
                    }}
                    title="contact"
                  />
                  <div className="header__content__nav__button__content">
                    Contact
                  </div>
                </div>
                <a
                  href="https://www.buymeacoffee.com/mehfoozurrehman"
                  className="header__content__nav__link"
                  target="_blank"
                >
                  Buy me a coffee
                </a>
              </div>
            </OutsideClickHandler>
          </div>
        ) : null}
      </div>
    </div>
  );
}
