import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./styles/globals.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="mask">
        <Header />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
