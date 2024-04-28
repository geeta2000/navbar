import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./components/Page";
import Contect from "./components/contect";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/contect"
          element={
            <layout>
              <Contect />
            </layout>
          }
        ></Route>

        <Route
          path="/"
          element={
            <layout>
              <Home />
            </layout>
          }
        ></Route>
        <Route
          path="/Page"
          element={
            <layout>
              <Page />
            </layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
