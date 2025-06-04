interface FooterLinkProps {
  title: string;
  scrollTo: string;
}

function FooterLink({ title, scrollTo }: FooterLinkProps) {
  return (
    <button
      onClick={() => {
        document.getElementById(scrollTo + "__section").scrollIntoView();
        (document.getElementById(scrollTo) as HTMLInputElement).checked = true;
      }}
      title={scrollTo}
      className="footer__content__row__link"
    >
      {title}
    </button>
  );
}

export default FooterLink;
