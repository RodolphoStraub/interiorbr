import React from "react";
import "./OpinioesModule.css";
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
      <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        cargo="Designer de interiores"
      />
    </div>
    <div>
      <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        cargo="Designer de interiores"
      />
    </div>{" "}
    <div>
      <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        cargo="Designer de interiores"
      />
    </div>{" "}
    <div>
      <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        cargo="Designer de interiores"
      />
    </div>{" "}
    <div>
      <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        cargo="Designer de interiores"
      />
    </div>
    <div>
      <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        cargo="Designer de interiores"
      />
    </div>{" "}
    <div>
      <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        cargo="Designer de interiores"
      />
    </div>{" "}
    <div>
      <Opinions
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        img="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg"
        name="Amelia Kristian"
        cargo="Designer de interiores"
      />
    </div>
  </Slider>
);

function Opinions(props) {
  return (
    <div className="opinioncards">
      <p>{props.text}</p>
      <div className="cardpic">
        <img src={props.img}></img>
        <div className="cardtext">
          <h2>{props.name}</h2>
          <p>{props.cargo}</p>
        </div>
      </div>
    </div>
  );
}

function Opinioes() {
  return (
    <div id="Opinioes" className="wrapperopinioesall">
      <div className="opinioestext">
        <h1 className="back">"</h1>
        <h1 className="opinion">
          Veja o que <span className="name2">nossos clientes</span>
          <br /> estão dizendo.
        </h1>
      </div>
      <SimpleSlider />
    </div>
  );
}

export default Opinioes;
