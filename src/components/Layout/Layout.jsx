import AppBar from "../AppBar/AppBar";
import Contacts from "../Contacts/Contacts";

import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
      <Contacts />
    </div>
  );
}
