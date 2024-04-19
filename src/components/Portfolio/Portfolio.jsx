import phonebook from "../../img/desktop/phonebook.jpg";
import movieLib from "../../img/desktop/movie-library.jpg";
import energyFlow from "../../img/desktop/energy-flow.jpg";

import { PiArrowBendDownRightThin } from "react-icons/pi";
import css from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <>
      <ul>
        <li className={css.listItem}>
          <img src={phonebook} width="400" alt="phonebook website preview" />
          <div className={css.textWrapper}>
            <h2 className={css.projName}>Phonebook</h2>
            <h3 className={css.projStack}>
              [React (Hooks, Routers, Redux, Redux Toolkit)]
            </h3>
            <p className={css.projDescr}>
              A simple Phonebook linked to a Swagger backend API. This App
              enables users to register and gain personalized access to create,
              search using filters, edit, or delete contacts.
            </p>
            <div className={css.linksWrapper}>
              <a
                className={css.projLink}
                href="https://phonebook-inky-five.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live page <PiArrowBendDownRightThin />
              </a>

              <a
                className={css.projLink}
                href="https://github.com/TetiZ/Phonebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                Code <PiArrowBendDownRightThin />
              </a>
            </div>
          </div>
        </li>
        <li className={css.listItem}>
          <div className={css.textWrapper}>
            <h2 className={css.projName}>Movie Library</h2>
            <h3 className={css.projStack}>[React (Hooks, Routes), REST API]</h3>
            <p className={css.projDescr}>
              An application connected to TMBD that allows viewing movie trends
              in real-time, with the ability to search for a specific movie, and
              browse details, ratings, reviews, and cast.
            </p>
            <div className={css.linksWrapper}>
              <a
                className={css.projLink}
                href="https://goit-react-hw-05-ruby.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live page <PiArrowBendDownRightThin />
              </a>

              <a
                className={css.projLink}
                href="https://goit-react-hw-05-ruby.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                Code <PiArrowBendDownRightThin />
              </a>
            </div>
          </div>
          <img src={movieLib} width="400" alt="movie library website preview" />
        </li>
        <li className={css.listItem}>
          <img src={energyFlow} width="400" alt="phonebook website preview" />
          <div className={css.textWrapper}>
            <h2 className={css.projName}>Energy Flow</h2>
            <h3 className={css.projStack}>
              [JavaScript, REST API, HTML5, CSS3. Git, Trello, Vite]
            </h3>
            <p className={css.projDescr}>
              Fitness and workout website which utilizes a REST API and saves
              data to local storage, pagination. Users can filter exercises by
              available muscle groups or search for specific body parts.
            </p>
            <div className={css.linksWrapper}>
              <a
                className={css.projLink}
                href="https://tetiz.github.io/energy_flow/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live page <PiArrowBendDownRightThin />
              </a>

              <a
                className={css.projLink}
                href="https://github.com/TetiZ/energy_flow"
                rel="noopener noreferrer"
                target="_blank"
              >
                Code <PiArrowBendDownRightThin />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
