import "./LojaModule.css";
import Slider from "infinite-react-carousel";

const SimpleSlider = () => (
  <Slider
    arrows={null}
    slidesToShow={3}
    autoplay
    autoplayScroll={2}
    autoplaySpeed={8000}
  >
    <div>
      <Lojacard
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        preço="Designer de interiores"
      />
    </div>
    <div>
      <Lojacard
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        preço="Designer de interiores"
      />
    </div>{" "}
    <div>
      <Lojacard
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        preço="Designer de interiores"
      />
    </div>{" "}
    <div>
      <Lojacard
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        preço="Designer de interiores"
      />
    </div>{" "}
    <div>
      <Lojacard
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        preço="Designer de interiores"
      />
    </div>
    <div>
      <Lojacard
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        preço="Designer de interiores"
      />
    </div>{" "}
    <div>
      <Lojacard
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        preço="Designer de interiores"
      />
    </div>{" "}
    <div>
      <Lojacard
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        preço="Designer de interiores"
      />
    </div>
  </Slider>
);

function Lojacard(props) {
  return (
    <div className="lojacards">
      <div className="lojapic">
        <img src={props.img}></img>
        <div className="lojatext">
          <h2>{props.name}</h2>
          <p>{props.preço}</p>
        </div>
      </div>
    </div>
  );
}

function Loja() {
  return (
    <div id="Loja" className="wrapperlojaall">
      <div className="wrapperlojaleft">
        <h1 className="lojatext">
          <span className="name2">Compre</span> os
          <br /> nossos itens.
        </h1>
        <button className="botao"> Veja mais</button>
      </div>
      <div className="wrapperlojaright">
        <SimpleSlider />
      </div>
    </div>
  );
}

export default Loja;
