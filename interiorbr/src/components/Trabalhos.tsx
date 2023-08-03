import "./TrabalhosModule.css";
import Slider from "infinite-react-carousel";

const SimpleSlider = () => (
  <Slider
    arrows={null}
    slidesToShow={3}
    autoplay
    autoplayScroll={1}
    autoplaySpeed={8000}
  >
    <div>
      <Trabalho
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
      />
    </div>
    <div>
      <Trabalho
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
      />
    </div>{" "}
    <div>
      <Trabalho
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
      />
    </div>{" "}
    <div>
      <Trabalho
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
      />
    </div>{" "}
    <div>
      <Trabalho
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
      />
    </div>
    <div>
      <Trabalho
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
      />
    </div>{" "}
    <div>
      <Trabalho
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
      />
    </div>{" "}
    <div>
      <Trabalho
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
      />
    </div>
  </Slider>
);

function Trabalho(props) {
  return (
    <div className="trabalhopic">
      <img src={props.img}></img>
    </div>
  );
}

function Trabalhos() {
  return (
    <div className="wrappertrabalhosall">
      <div className="wrappertrabalhosleft">
        <h1>
          <span className="name2">100+ projetos</span>
          <br /> por todo o mundo.
        </h1>
        <p className="trabalhotext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <button className="botao">Explorar</button>
      </div>
      <div className="wrappertrabalhosright">
        <SimpleSlider />
      </div>
    </div>
  );
}

export default Trabalhos;
