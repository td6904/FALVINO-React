import React from "react";
import { Helmet } from "react-helmet";
import "../styles/ContactPage.css";
import youtube from "../images/youtube.png";
import facebook from "../images/facebook.png";
import insta from "../images/insta.png";
const Discography = () => (
  <>
    <Helmet>
      <title>Contact</title>
    </Helmet>

    <h1 className="pageTitle">
      <u>Contact</u>
    </h1>

    <p><b>Email : </b>falvinoenscene@gmail.com</p>
    <p><b>Phone : </b>XX.XX.XX.XX.XX</p>
    <div className="socials">
        <a href="https://m.youtube.com/channel/UClzCn16tT9TDQ2tE3yG1ITQ" ><img src={youtube} alt="youtube" /></a>
        <a href="https://www.facebook.com/profile.php?id=100086291594451" ><img src={facebook} alt="facebook" /></a>
        <a href="https://www.instagram.com/falvinofalvino/" ><img src={insta} alt="insta" /></a>
        
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <h2>REACT FORM HERE!</h2>



    
    <div className="line"></div>

    <div className="home-button">
      <a className="home-button-link" href="/">
        FALVINO
      </a>
    </div>
  </>
);
export default Discography;
