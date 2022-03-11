import { AppRoutes } from "./Routes";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
