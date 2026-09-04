import { memo } from "react";

interface ServicesCardProps {
  title: string;
  skills?: string[];
}

const ServicesCard = memo(({ title, skills }: ServicesCardProps) => (
  <div className="card">
    <div className="card__heading">{title}</div>
    <div className="card__info">
      {skills?.map((skill, i) =>
        i !== skills.length - 1 ? skill + ", " : skill
      )}
    </div>
  </div>
));

export default ServicesCard;
