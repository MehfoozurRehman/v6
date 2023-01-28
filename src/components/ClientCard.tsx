interface ClientCardProps {
  image: string;
  name: string;
}

export default function ClientCard({ image, name }: ClientCardProps) {
  return (
    <div
      className="card"
      style={{
        minWidth: "fit-content",
        maxWidth: "fit-content",
        minHeight: 100,
      }}
    >
      <img loading="lazy" src={image} alt={name} className="card__img" />
    </div>
  );
}
