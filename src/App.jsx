import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <div>
        <Heading/>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
