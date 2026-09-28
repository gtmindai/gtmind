/* eslint-disable react-refresh/only-export-components -- server entry, never hot-reloaded */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

export { renderHead } from "./seo/head";
export { allRoutes, getMeta } from "./seo/meta";
export { POSTS, preloadBodies } from "./data/blog";

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
