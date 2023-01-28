import { useContext } from "react";
import  {monContexte}   from '../contexte/LangueContexte';
import '../App.css';



export default function Icone() {

    const { modifyLanguage} = useContext(monContexte);
    

    // <img src={"./assets/france.svg"} alt="fr" onClick={toggleLang} />
    return (
        <div className="all-btns">
            <img src={"./assets/france.svg"} alt="fr" onClick={() => modifyLanguage("FR")} />
            <img src={"./assets/united-kingdom.svg"} alt="en" onClick={() => modifyLanguage("EN")} />
            <img src={"./assets/spain.svg"} alt="es" onClick={() => modifyLanguage("ES")} />
        </div>
    );
}