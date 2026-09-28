import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { LEGAL_PAGES } from "./data/legal";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        {LEGAL_PAGES.map(({ slug }) => (
          <Route key={slug} path={slug} element={<Legal slug={slug} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
