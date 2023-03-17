import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));
const Like = lazy(() => import("./pages/Like"));

const App = function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={"Loadingg"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/liked" element={<Like />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
