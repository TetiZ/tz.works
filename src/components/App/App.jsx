import FaviconTheme from "../FaviconTheme/FaviconTheme";

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/Home/HomePage"));
const AboutPage = lazy(() => import("../../pages/About/AboutPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFound/NotFoundPage"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <FaviconTheme />
    </Layout>
  );
}

export default App;
