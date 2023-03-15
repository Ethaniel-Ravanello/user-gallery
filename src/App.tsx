import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));

const App = function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loadingg"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
