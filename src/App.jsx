import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { LEGAL_PAGES } from "./data/legal";
import Home from "./pages/Home";
import Legal from "./pages/Legal";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {LEGAL_PAGES.map(({ slug }) => (
          <Route key={slug} path={slug} element={<Legal slug={slug} />} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
