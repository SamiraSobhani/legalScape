// import Header from "./components/Header";
import Logo from "./components/Logo";
import Welcome from "./components/Welcome";
import Button from "./components/Button";
import HomeSearch from "./components/HomeSearch";
import Footer from "./components/Footer";
import "./styles/main.scss";
function App() {
  return (
    <div className="container">
      <Logo />
      <Welcome />
      <Button />
      <HomeSearch />
      <Footer />
    </div>
  );
}

export default App;
