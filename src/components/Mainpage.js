import React from "react";
import Group from "../images/group.jpg";
import grinta from "../images/grinta.png";
import youtube from "../images/youtube.png";
import facebook from "../images/facebook.png";
import insta from "../images/insta.png";

const menu = document.querySelector('.menu')
const toggleButton = document.querySelector('.toggle-button')

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('open')
})

export default function Mainpage() {
  return (
    <>
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
        <div className="date-card-item">
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
          <div className="date-card-item">
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
          <div className="date-card-item">
            <div className="date-text">
              <h1>14 Janvier 2023</h1>
              <h2>Black Lab, Lille</h2>
              <h4>Début 21h</h4>
              <p>
                <u>Détails</u>
              </p>
            </div>
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
          <img className="home-grinta" src={grinta} alt="grinta" />
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
      <div className="socials">
        <a href="https://m.youtube.com/channel/UClzCn16tT9TDQ2tE3yG1ITQ">
          <img className="youtube" src={youtube} alt="youtube" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086291594451">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/falvinofalvino/">
          <img src={insta} alt="insta" />
        </a>
      </div>
      <br />
      <br />
    </>
  );
}
