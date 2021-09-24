import { Link } from "react-router-dom";

import WikiSection from "./WikiSection";
import Menu from "../Menu";

import "./wikis.scss";

import arrow from "../../assets/images/flecheNavRouge.png";

const regions = [
  { name: "Vanna", route: "vanna" },
  { name: "Feidlimid", route: "feidlimid" },
  { name: "Kervollen", route: "kervollen" },
  { name: "Karnaclok", route: "karnaclok" },
  { name: "Drok'nor", route: "droknor" },
];

const others = [
  { name: "Magie", route: "magie" },
  { name: "Dieux", route: "dieux" },
];

const Wikis = () => {
  return (
        <div className="wikis">
            <Menu />
            <h1 className="wikis__title">Index du Wiki</h1>
            <Link to="/" className="to-home">
                Accueil
                <img src={arrow} alt="Retour à l'accueil" />
            </Link>
            <WikiSection title="Régions" links={regions} />
            <WikiSection title="Informations Générales" links={others} />
        </div>
  );
};

export default Wikis;
