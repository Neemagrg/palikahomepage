import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Tourism from "./pages/Tourism";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/tourism"
          element={<Tourism />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;