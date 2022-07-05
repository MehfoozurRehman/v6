export default function TestimonialsCard({
  imageSrc,
  title,
  info,
  designation,
}) {
  return (
    <div className="card" style={{ maxWidth: "100%", marginRight: "0em" }}>
      <img
        src={
          imageSrc
            ? imageSrc
            : "https://ui-avatars.com/api/?name=" +
              title +
              "&background=0a192f&color=64ffda&size=65"
        }
        alt=""
        className="card__image__reverse"
      />
      <div className="card__heading__reverse" style={{ margin: "0em auto" }}>
        {title}
      </div>
      <div
        className="card__heading__reverse"
        style={{
          margin: ".3em auto",
          fontSize: 14,
          fontWeight: "300",
          marginTop: 0,
        }}
      >
        {designation}
      </div>
      <div className="card__info" style={{ textAlign: "center" }}>
        <span style={{ fontSize: 20, fontWeight: "bold", marginRight: 10 }}>
          "
        </span>
        {info}
        <span style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          "
        </span>
      </div>
    </div>
  );
}
