import { useEffect, useState } from "react";
import css from "./About.module.css";

export default function About() {
  const [intro, setIntro] = useState("");
  const [idx, setIdx] = useState(0);

  const definitions = [
    "problem solver",
    "opportunities hunter",
    "Fullstack developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (idx === definitions.length - 1) {
        setIdx(0);
      } else {
        setIdx((prevIdx) => prevIdx + 1);
      }
    }, 4200);
    return () => clearInterval(interval);
  }, [idx, definitions.length]);

  useEffect(() => {
    setIntro(definitions[idx]);
  }, [idx, definitions]);

  return <p className={css.intro}>{intro}</p>;
}
