interface ServicesCardProps {
  title: string;
  skills?: string[];
}

export default function ServicesCard({ title, skills }: ServicesCardProps) {
  return (
    <div className="card">
      <div className="card__heading">{title}</div>
      <div className="card__info">
        {skills?.map((skill, i) =>
          i !== skills.length - 1 ? skill + ", " : skill
        )}
      </div>
    </div>
  );
}
