import {
  Codesandbox,
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
} from "react-feather";

export default function Socials({}) {
  return (
    <>
      <div className="social__links">
        <div className="social__links__entries">
          <a
            href="https://github.com/MehfoozurRehman"
            title="github"
            className="social__links__entries__link"
          >
            <GitHub size={20} color="currentColor" />
          </a>
          <a
            href="https://www.facebook.com/MehfoozurRehmanIjaz/?_rdc=1&_rdr"
            title="facebook"
            className="social__links__entries__link"
          >
            <Facebook size={20} color="currentColor" />
          </a>
          <a
            href="https://www.instagram.com/mehfoozurrehman___/"
            title="instagram"
            className="social__links__entries__link"
          >
            <Instagram size={20} color="currentColor" />
          </a>
          <a
            href="https://www.linkedin.com/in/mehfooz-rehman-37a1b0231/"
            title="linkedin"
            className="social__links__entries__link"
          >
            <Linkedin size={20} color="currentColor" />
          </a>
          <a
            href="https://codesandbox.io/u/MehfoozurRehman"
            title="codesandbox"
            className="social__links__entries__link"
          >
            <Codesandbox size={20} color="currentColor" />
          </a>
        </div>
        <div className="social__links__line"></div>
      </div>
      <div className="social__email">
        <a
          href="mailto:mehfoozijaz786@gmail.com"
          className="social__email__text"
        >
          mehfoozijaz786@gmail.com
        </a>
        <div className="social__links__line"></div>
      </div>
    </>
  );
}
