import LangueContexte from "../contexte/LangueContexte";
import Icone from "./Icone";
import TexteTraduit from './TexteTraduit'


export default function ChangeLanguage() {

    //State


    //Comportements
    

    //Affichage (render)
    return (
        
            <LangueContexte>
                <div className="content">
                    <Icone/>
                    <TexteTraduit/>
                </div>
            </LangueContexte>
        
        
    );
}