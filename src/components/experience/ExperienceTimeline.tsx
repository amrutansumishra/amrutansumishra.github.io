import { experience } from "../../data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceTimeline() {
  return (
    <ol className="list-none">
      {experience.map((item, index) => (
        <li key={item.id}>
          <ExperienceCard item={item} index={index} />
        </li>
      ))}
    </ol>
  );
}
