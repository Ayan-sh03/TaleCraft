import "./App.css";
import AllTales from "./assets/Components/AllTales";
import Home from "./assets/Components/Home";
import Login from "./assets/AuthPages/Login";
import Signup from "./assets/AuthPages/Signup";
// import CreateOwnTale from "./assets/Components/CreateOwnTale";
import CreateTale from "./assets/Components/CreateTale";
import TopTales from "./assets/Components/TopTales";
import Navbar from "./assets/Components/Navbar";
import { Route } from "react-router";
import CreateOwnTale from "./assets/Components/CreateOwnTale";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AllTales />
      <CreateOwnTale />
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <CreateTale /> */}
      {/* <TopTales /> */}
    </>
  );
}

export default App;
