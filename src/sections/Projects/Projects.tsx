import {
  IconBrandCss3,
  IconBrandDiscord,
  IconBrandFirebase,
  IconBrandGatsby,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandNpm,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandStripe,
  IconBrandTypescript,
  IconBrandWebflow,
  IconBroadcast,
  IconFileSpreadsheet,
  IconHash,
} from "@tabler/icons-react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1>PROJECTS</h1>
        <ProjectCard
          title="Monetize Your Guild"
          description="Turn your Discord server into a revenue stream with this innovative application. Developed with Next.js, TypeScript, and React, the platform uses the Discord API and Stripe SDK to facilitate secure server monetization. It provides owners with an intuitive control panel to manage payments and customize options, delivering a hassle-free experience to transform communities into financial opportunities."
          stack={[
            {
              icon: <IconBrandNextjs />,
              name: "NextJS",
            },
            {
              icon: <IconBrandTypescript />,
              name: "TypeScript",
            },
            {
              icon: <IconBrandReact />,
              name: "ReactJS",
            },
            {
              icon: <IconBrandFirebase />,
              name: "Firebase",
            },
            {
              icon: <IconBrandDiscord />,
              name: "Discord.JS",
            },
            {
              icon: <IconBrandStripe />,
              name: "Stripe SDK",
            },
          ]}
          ghUrl="https://github.com/Rodez97/discord-stripe-full"
          website="https://monetizeyourguild.pro/"
        />
        <ProjectCard
          title="Schedulify"
          description="A project solely crafted by me, I harnessed the capabilities of Next.js, Gatsby.js, React, Firebase, SendinBlue, TypeScript, and Node.js. Schedulify introduces a no-cost staff scheduling solution, streamlining the complexities of generating and overseeing employee schedules. Its intuitive interface, vital functionalities, and adaptability cater to diverse scheduling requirements of businesses."
          stack={[
            {
              icon: <IconBrandNextjs />,
              name: "NextJS",
            },
            {
              icon: <IconBrandTypescript />,
              name: "TypeScript",
            },
            {
              icon: <IconBrandReact />,
              name: "ReactJS",
            },
            {
              icon: <IconBrandFirebase />,
              name: "Firebase",
            },
            {
              icon: <IconBrandNodejs />,
              name: "NodeJS",
            },
            {
              icon: <IconBrandGatsby />,
              name: "GatsbyJS",
            },
          ]}
          ghUrl="https://github.com/Rodez97/Schedulify"
          website="https://schedulify.pro/"
        />
        <ProjectCard
          title="Cuttinboard"
          description="A collaborative effort with a friend, I led the entire development process. Employing technologies like React, Expo React Native, Webflow, Stripe, SendinBlue API, Firebase, OneSignal, TypeScript, and Redux, we created Cuttinboard. This platform revolutionizes restaurant management, offering a comprehensive solution to address the unique challenges of the hospitality industry. From scheduling and messaging to employee management, inventory tracking, and more, Cuttinboard optimizes operations and enhances overall efficiency for restaurant owners, managers, and staff."
          stack={[
            {
              icon: <IconBrandReact />,
              name: "ReactJS",
            },
            {
              icon: <IconBrandTypescript />,
              name: "TypeScript",
            },
            {
              icon: <IconBrandFirebase />,
              name: "Firebase",
            },
            {
              icon: <IconBrandNodejs />,
              name: "NodeJS",
            },
            {
              icon: <IconBrandRedux />,
              name: "Redux",
            },
            {
              icon: <IconBrandReactNative />,
              name: "React Native",
            },
            {
              icon: <IconBroadcast />,
              name: "One Signal",
            },
            {
              icon: <IconBrandWebflow />,
              name: "Webflow",
            },
          ]}
          ghUrl="https://github.com/Rodez97/Cuttinboard-Web"
          website="https://cuttinboard.webflow.io/"
        />
        <ProjectCard
          title="Cyberlight Website"
          description="This website was developed using pure HTML, CSS, and JavaScript. This project was a great opportunity to hone my skills and learn new techniques."
          stack={[
            {
              icon: <IconBrandHtml5 />,
              name: "HTML5",
            },
            {
              icon: <IconBrandCss3 />,
              name: "CSS3",
            },
            {
              icon: <IconBrandJavascript />,
              name: "JavaScript",
            },
            {
              icon: <IconBrandGithub />,
              name: "GitHub",
            },
          ]}
          ghUrl="https://github.com/Rodez97/CyberLight"
          website="https://rodez97.github.io/CyberLight/"
        />
        <ProjectCard
          title="GS-Translations"
          description="The purpose of this project is to provide an easy way to manage translations in Google Sheets using NodeJS. The tool allows users to fetch and upload translations from the spreadsheet, making it simple to keep track of and update translations across different languages and regions."
          stack={[
            {
              icon: <IconBrandNodejs />,
              name: "NodeJS",
            },
            {
              icon: <IconBrandTypescript />,
              name: "TypeScript",
            },
            {
              icon: <IconBrandJavascript />,
              name: "JavaScript",
            },
            {
              icon: <IconBrandGithub />,
              name: "GitHub",
            },
            {
              icon: <IconFileSpreadsheet />,
              name: "Google Spreadsheet API",
            },
            {
              icon: <IconHash />,
              name: "CLI",
            },
            {
              icon: <IconBrandNpm />,
              name: "NPM",
            },
          ]}
          ghUrl="https://github.com/Rodez97/gs-translations"
          website="https://www.npmjs.com/package/gs-translations"
        />
      </div>
    </section>
  );
}

export default Projects;
