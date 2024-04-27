import { useState, useEffect } from "react";
import css from "./Contacts.module.css";

export default function Contacts() {
  const email = "zabolotnia.tetiana@gmail.com";
  const [successCopy, setSuccessCopy] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessCopy("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [successCopy]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setSuccessCopy("Email copied");
  }

  return (
    <div className={css.container}>
      <h3 className={css.title}>Let's keep in touch!</h3>
      <ul className={css.contactList}>
        <li className={css.contactListItem}>
          <a
            className={css.contactLink}
            href="https://www.linkedin.com/in/tetiana-zabolotnia/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li className={css.contactListItem}>
          {" "}
          <a
            className={css.contactLink}
            href="https://github.com/TetiZ"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li className={css.contactListItem}>
          <p className={css.contactLink} onClick={copyEmail}>
            {" "}
            {successCopy ? "Email copied" : email}
          </p>
        </li>
      </ul>
    </div>
  );
}
