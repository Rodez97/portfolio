import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import data from "../../data";

function Projects() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1>PROJECTS</h1>
        {data.projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            stack={project.stack}
            ghUrl={project.ghUrl}
            website={project.website}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
