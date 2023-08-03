import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Trabalhos from "./components/Trabalhos";
import Processo from "./components/Processo";
import Loja from "./components/Loja";
import Opinioes from "./components/Opinioes";
import Contato from "./components/Contato";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Sobre />
      <Trabalhos />
      <Processo />
      <Loja />
      <Opinioes />
      <Contato />
    </div>
  );
}

export default App;
