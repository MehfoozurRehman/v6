import { useNavigate } from "react-router-dom";

export default function NavLink({ scrollTo, label, defaultChecked }) {
  const navigate = useNavigate();
  return (
    <div className="header__content__nav__links__entry">
      <input
        id={scrollTo}
        type="radio"
        title={scrollTo}
        defaultChecked={defaultChecked}
        name="header__content__nav__links__entry"
        className="header__content__nav__links__entry__input"
        onClick={async () => {
          await navigate("/");
          document.getElementById(scrollTo + "__section").scrollIntoView();
        }}
      />
      <div className="header__content__nav__links__entry__content">{label}</div>
    </div>
  );
}
