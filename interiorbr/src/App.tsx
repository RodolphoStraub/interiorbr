import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Processo from "./components/Processo";
import Contato from "./components/Contato";
import Opinioes from "./components/Opinioes";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Sobre />
      <Processo />
      <Opinioes />
      <Contato />
    </div>
  );
}

export default App;
