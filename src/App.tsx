import { useEffect, useRef } from "react";
import "./App.css";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import Hero from "./sections/Hero/Hero";
import { AnimationPlaybackControls, animate, useScroll } from "framer-motion";
import Projects from "./sections/Projects/Projects";

function App() {
  const container = useRef<HTMLDivElement>(null);
  const animControls = useRef<AnimationPlaybackControls>();
  const { scrollYProgress } = useScroll({
    container,
  });
  useEffect(() => {
    scrollYProgress.on("change", (yProgress) => {
      // Ensure the animation controls exist
      if (!animControls.current) return;

      // Calculate the new time for the animation based on scroll progress
      animControls.current.time = yProgress * animControls.current.duration;
    });

    animControls.current = animate(
      ".animate-bar",
      {
        boxShadow: ["#00ffff 0px 0px 20px 2px", "#a200ff 0px 0px 20px 2px"],
      },
      { duration: 0.8 }
    );
    animControls.current.pause();
  }, [scrollYProgress]);

  return (
    <>
      <main dir="ltr" className="app-container" ref={container}>
        <Hero />
        <Projects />
        <footer className="text-center text-gray-400 text-xs mt-10 mb-4">
          <p className="text-sm">Made by Danilo</p>

          <p>
            with the help of Clara.{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </p>

          <p>{new Date().getFullYear()}</p>
        </footer>
      </main>

      <AnimatedBackground />
    </>
  );
}

export default App;
