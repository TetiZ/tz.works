import About from "../../components/About/About";
import Experiences from "../../components/Experiences/Experiences";

import experience from "../../experience.json";
import css from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className={css.aboutWrapper}>
      <h2 className={css.intro}>
        Hello, I am <About />
      </h2>
      <h3 className={css.title}>My name is Tetiana</h3>
      <p className={css.about}>
        This site was created to provide you information about myself and my
        projects in web development. The main goal is to show the portfolio of a
        novice web developer.
        <br />
        <br />
        I enjoy addressing challenges in a general sense. In my professional
        background, I have extensive experience in working with people, whether
        it is teaching foreign languages, sales or logistics.
        <br />
        <br />
        Solving complex problems in the world of code is not only a challenge
        for me but also a source of inspiration. Every line of code I write
        gives me satisfaction, like when you find the last piece of a puzzle and
        put it in its place.
      </p>
      <Experiences experience={experience} />
    </div>
  );
}
