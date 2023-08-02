import "./ContatoModule.css";

function Contato() {
  return (
    <div id="Contato" className="wrappercontatoall">
      <div className="wrappercontatoleft">
        <h1 className="name2">Empresa</h1>
        <h2>
          InteriorBr Studio, Ltd <br />
          Rua João. S,357
          <br /> São Paulo,Brasil
        </h2>
      </div>
      <div className="wrappercontatomid">
        <h1 className="name2">Sobre nós</h1>
        <h2>Referências</h2>
        <h2>Serviços</h2>
        <h2>Contrato</h2>
        <h2>Time</h2>
      </div>
      <div className="wrappercontatoleft">
        <h1 className="name2">Contatos</h1>
        <h2>interiorbr@gmail.com</h2>
        <h2>(xx)xxxxx-xxxx</h2>
        <h2>(xx)xxxxx-xxxx</h2>
      </div>
      <div className="wrappercontatoseguir">
        <h1 className="name2">Nos Siga</h1>
        <img
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.iconpacks.net%2Ficons%2F2%2Ffree-facebook-icon-2868-thumb.png&tbnid=o3u-RVbw9dm_FM&vet=12ahUKEwjK0uP0mbyAAxX7NbkGHTDxAVAQMygMegUIARDfAQ..i&imgrefurl=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Ffacebook-2868.html&docid=8vIpvVk3sUAyOM&w=512&h=512&q=facebook%20svg%20icon&ved=2ahUKEwjK0uP0mbyAAxX7NbkGHTDxAVAQMygMegUIARDfAQ"
          alt="facebook icon"
        />
        <h2>twitter</h2>
        <h2>instagram</h2>
        <h2>
          © 2023. InteriorBr, Ltd,
          <br /> Todos os direitos reservados.
        </h2>
      </div>
    </div>
  );
}

export default Contato;
