import "./App.css";
import FaviconTheme from "../FaviconTheme/FaviconTheme";
import Navigation from "../Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../../pages/Home/HomePage"));
const AboutPage = lazy(() => import("../../pages/About/AboutPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFound/NotFoundPage"));

function App() {
  return (
    <>
      <FaviconTheme />
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
