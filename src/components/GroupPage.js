import React from "react";
import { Helmet } from "react-helmet";
import '../styles/GroupPage.css'
import GroupHead from "../images/groupHead.jpg"
import tyler from "../images/tyler-group.jpg"
import leo from "../images/leo-group.jpg"
import remi from "../images/remi-group.jpg"

const GroupPage = () => (
  <>
    <Helmet>
      <title>Le Groupe</title>
    </Helmet>

    <h1 className="pageTitle">
      <u>Le Groupe</u>
    </h1>
    <div>
      <img
        className="groupHead"
        src={GroupHead}
        alt="Welcome"
      />
    </div>

    <div>
      <h1 className="nameTitle">
        <u>Rémi Falvo</u>
      </h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra
        lectus nisi. Nunc pharetra arcu turpis, at condimentum nunc ullamcorper
        ut. Nunc est eros, vehicula vitae purus sed, scelerisque rutrum leo. Sed
        nisi ante, lacinia eget porta vitae, pretium elementum felis. Vestibulum
        sed purus quam. Maecenas tincidunt eget nisi id posuere. Aenean vitae
        scelerisque orci, ut elementum ante. Vestibulum blandit scelerisque arcu
        non bibendum. Curabitur nec urna rhoncus, lobortis sem vel, ultrices
        diam. Mauris volutpat tincidunt mauris non placerat. Mauris tincidunt
        enim sit amet finibus feugiat. Suspendisse aliquam tellus sem, vitae
        vulputate justo facilisis id. Curabitur in mauris velit. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Nunc augue ligula, fermentum quis ligula at, aliquam tempus augue.
        Etiam id volutpat risus, sed eleifend erat.
        <br />
        <br />
        Aliquam id sem hendrerit, venenatis purus ut, scelerisque ex. Sed tempor
        vitae ex vitae aliquam. Phasellus erat mi, cursus et augue nec, euismod
        convallis erat. Nunc non enim semper, sollicitudin augue sed, ornare
        odio. Quisque convallis velit at sapien ultrices, vitae consequat felis
        dignissim. Nam elementum, diam non consectetur luctus, mauris elit
        auctor ante, non vestibulum nisl nunc eget lacus. Phasellus a arcu ut
        ante ornare sollicitudin a congue risus.
      </p>
      <img
        className="profile"
        src={remi}
        alt="Remi"
      />
    </div>
    <div className="line"></div>
    <div>
      <h1 className="nameTitle">
        <u>Tyler Durnion</u>
      </h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra
        lectus nisi. Nunc pharetra arcu turpis, at condimentum nunc ullamcorper
        ut. Nunc est eros, vehicula vitae purus sed, scelerisque rutrum leo. Sed
        nisi ante, lacinia eget porta vitae, pretium elementum felis. Vestibulum
        sed purus quam. Maecenas tincidunt eget nisi id posuere. Aenean vitae
        scelerisque orci, ut elementum ante. Vestibulum blandit scelerisque arcu
        non bibendum. Curabitur nec urna rhoncus, lobortis sem vel, ultrices
        diam. Mauris volutpat tincidunt mauris non placerat. Mauris tincidunt
        enim sit amet finibus feugiat. Suspendisse aliquam tellus sem, vitae
        vulputate justo facilisis id. Curabitur in mauris velit. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Nunc augue ligula, fermentum quis ligula at, aliquam tempus augue.
        Etiam id volutpat risus, sed eleifend erat.
        <br />
        <br />
        Aliquam id sem hendrerit, venenatis purus ut, scelerisque ex. Sed tempor
        vitae ex vitae aliquam. Phasellus erat mi, cursus et augue nec, euismod
        convallis erat. Nunc non enim semper, sollicitudin augue sed, ornare
        odio. Quisque convallis velit at sapien ultrices, vitae consequat felis
        dignissim. Nam elementum, diam non consectetur luctus, mauris elit
        auctor ante, non vestibulum nisl nunc eget lacus. Phasellus a arcu ut
        ante ornare sollicitudin a congue risus.
      </p>
      <img
        className="profile"
        src={tyler}
        alt="Tyler"
      />
    </div>
    <div className="line"></div>
    <div>
      <h1 className="nameTitle">
        <u>Léo Reghem</u>
      </h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra
        lectus nisi. Nunc pharetra arcu turpis, at condimentum nunc ullamcorper
        ut. Nunc est eros, vehicula vitae purus sed, scelerisque rutrum leo. Sed
        nisi ante, lacinia eget porta vitae, pretium elementum felis. Vestibulum
        sed purus quam. Maecenas tincidunt eget nisi id posuere. Aenean vitae
        scelerisque orci, ut elementum ante. Vestibulum blandit scelerisque arcu
        non bibendum. Curabitur nec urna rhoncus, lobortis sem vel, ultrices
        diam. Mauris volutpat tincidunt mauris non placerat. Mauris tincidunt
        enim sit amet finibus feugiat. Suspendisse aliquam tellus sem, vitae
        vulputate justo facilisis id. Curabitur in mauris velit. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Nunc augue ligula, fermentum quis ligula at, aliquam tempus augue.
        Etiam id volutpat risus, sed eleifend erat.
        <br />
        <br />
        Aliquam id sem hendrerit, venenatis purus ut, scelerisque ex. Sed tempor
        vitae ex vitae aliquam. Phasellus erat mi, cursus et augue nec, euismod
        convallis erat. Nunc non enim semper, sollicitudin augue sed, ornare
        odio. Quisque convallis velit at sapien ultrices, vitae consequat felis
        dignissim. Nam elementum, diam non consectetur luctus, mauris elit
        auctor ante, non vestibulum nisl nunc eget lacus. Phasellus a arcu ut
        ante ornare sollicitudin a congue risus.
      </p>
      <img
        className="profile"
        src={leo}
        alt="Leo"
      />
    </div>
    <div className="line"></div>

    <div className="home-button">
      <a className="home-button-link" href="/">
        FALVINO
      </a>
    </div>
  </>
);
export default GroupPage;
