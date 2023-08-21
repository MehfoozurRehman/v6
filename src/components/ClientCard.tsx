interface ClientCardProps {
  image: string;
  name: string;
}

export default function ClientCard({ image, name }: ClientCardProps) {
  return (
    <div
      className="card"
      style={{
        minWidth: "100%",
        minHeight: 100,
        marginBottom: 0,
      }}
    >
      <img
        loading="lazy"
        src={image}
        alt={name}
        className="card__img"
        style={{
          minHeight: 100,
        }}
      />
    </div>
  );
}
