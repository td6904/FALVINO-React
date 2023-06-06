import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Discography.css";
import grinta from "../images/grinta.jpeg";
import livelikeaman from "../images/livelikeaman.jpeg";
import morethanmyself from "../images/morethanmyself.jpeg";

const Discography = () => (
  <>
    <Helmet>
      <title>Discographie</title>
    </Helmet>

    <h1 className="pageTitle">
      <u>Discographie</u>
    </h1>

    {/* Optimise this as repating code */}

    <div className="disc-layout">
      <div>
        <a href="https://open.spotify.com/album/5yR04UFDGZXAMLrZ3e6aou">
          <img className="disc-cover" src={grinta} alt="disc" />
        </a>
        <h1 className="discTitle">Grinta (EP)</h1>
        <p className="disc-description">
          <b>Sortie : </b> 2022
        </p>
        <p className="disc-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pharetra lectus nisi. Nunc pharetra arcu turpis, at condimentum nunc
          ullamcorper ut.
        </p>
      </div>

      <div>
        <a href="https://open.spotify.com/album/5KvkueYobSmsJsyLEFb7fu">
        <img className="disc-cover" src={livelikeaman} alt="disc" />
        </a>
        <h1 className="discTitle">Live Like A Man (Single)</h1>
        <p className="disc-description">
          <b>Sortie : </b> 2022
        </p>

        <p className="disc-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pharetra lectus nisi. Nunc pharetra arcu turpis, at condimentum nunc
          ullamcorper ut.
        </p>
      </div>

      <div>
        <a href="https://open.spotify.com/album/1AdFx3BBijvLpHfOCmhr76">
        <img className="disc-cover" src={morethanmyself} alt="disc" />
        </a>
        <h1 className="discTitle">More Than Myself (Single)</h1>
        <p className="disc-description">
          <b>Sortie : </b> 2022
        </p>

        <p className="disc-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pharetra lectus nisi. Nunc pharetra arcu turpis, at condimentum nunc
          ullamcorper ut.
        </p>
      </div>
    </div>

    <div className="line"></div>

    <div className="home-button">
      <a className="home-button-link" href="/">
        FALVINO
      </a>
    </div>
  </>
);
export default Discography;
