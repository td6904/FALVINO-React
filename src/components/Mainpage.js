import React from "react";
import Group from "../images/group.jpg";
import grinta from "../images/grinta.png";

export default function Mainpage() {
  return (
    <div>
      <img className="main-photo" src={Group} alt="Falv logo" />
      <div className="news">
        <h1>
          <u>A la une</u>
        </h1>
        <br />
        <img
          src="https://imgs.search.brave.com/VLq1u39X5kg1zf2QHeLFBQhZVhtiLlG7JL6cfdNSGmo/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9jcmVh/dGl2ZWNsaWNrbWVk/aWEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA0L3dp/cmVmcmFtZS1ib3gt/MjcweDIwMy0zMDB4/MzAwLmpwZw"
          alt="wireframe"
          height="250px"
        />
        <br />
        <br />
        <br />
        <img
          src="https://imgs.search.brave.com/VLq1u39X5kg1zf2QHeLFBQhZVhtiLlG7JL6cfdNSGmo/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9jcmVh/dGl2ZWNsaWNrbWVk/aWEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA0L3dp/cmVmcmFtZS1ib3gt/MjcweDIwMy0zMDB4/MzAwLmpwZw"
          alt="wireframe"
          height="250px"
        />
        <br />
        <br />
      </div>
      <div className="dates">
        <h1>
          <u>Prochaines Dates</u>
        </h1>
        <br />
        <div className="date-cards">
          <div className="date-text">
            <h1>14 Janvier 2023</h1>
            <h2>Black Lab, Lille</h2>
            <h4>Début 21h</h4>
            <p>
              <u>Détails</u>
            </p>
          </div>
        </div>
        <br />
        <div className="date-cards">
          <div className="date-text">
            <h1>14 Janvier 2023</h1>
            <h2>Black Lab, Lille</h2>
            <h4>Début 21h</h4>
            <p>
              <u>Détails</u>
            </p>
          </div>
        </div>
        <br />
        <h4 className="more-dates">
          <u>Plus des Dates</u>
        </h4>
        <br />
        <br />
        <br />
      </div>
      <div className="discog">
        <h1>
          <u>Discographie</u>
        </h1>
        <br />
        <a href="https://open.spotify.com/album/5yR04UFDGZXAMLrZ3e6aou">
          <img src={grinta} alt="grinta" />
        </a>
        <br />
        <br />
        <h4>
          <u>Plus d'informations</u>
        </h4>
        <br />
        <br />
        <br />
      </div>
      <div className="email-signup">
        <img
          src="https://imgs.search.brave.com/VLq1u39X5kg1zf2QHeLFBQhZVhtiLlG7JL6cfdNSGmo/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9jcmVh/dGl2ZWNsaWNrbWVk/aWEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA0L3dp/cmVmcmFtZS1ib3gt/MjcweDIwMy0zMDB4/MzAwLmpwZw"
          alt="wireframe"
          height="250px"
        />
        <br />
        <br />
        <div className="form">
          <input
            className="email-input"
            type="text"
            placeholder="EMAIL"
          ></input>
          <br />
          <button className="button-input" type="submit">
            SIGN UP
          </button>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
