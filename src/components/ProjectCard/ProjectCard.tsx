import { ReactNode } from "react";
import styles from "./ProjectCard.module.css";
import { IconBrandGithub, IconWorldWww } from "@tabler/icons-react";
import TechChip from "../TechChip/TechChip";

interface ProjectCardProps {
  title: string;
  description: string;
  stack?: { icon: ReactNode; name: string }[];
  ghUrl: string;
  website: string;
}

function ProjectCard({
  title,
  description,
  stack,
  ghUrl,
  website,
}: ProjectCardProps) {
  return (
    <article className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="flex gap-1 list-none">
        {stack?.map((s) => (
          <li key={s.name}>
            <TechChip {...s} />
          </li>
        ))}
      </ul>
      <div className="flex gap-5 justify-end absolute -top-5 -right-5">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={ghUrl}
          className="transition border-white-800 border p-2 rounded-full bg-slate-500 text-white hover:text-cyan-600 hover:border-cyan-600 hover:bg-white"
        >
          <IconBrandGithub size={40} />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={website}
          className="transition border-white-800 border p-2 rounded-full bg-slate-500 text-white hover:text-cyan-600 hover:border-cyan-600 hover:bg-white"
        >
          <IconWorldWww size={40} />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
