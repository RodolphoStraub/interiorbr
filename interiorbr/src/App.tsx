import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Processo from "./components/Processo";
import Contato from "./components/Contato";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Sobre />
      <Processo />
      <Contato />
    </div>
  );
}

export default App;
