import { useContext } from "react";
import { contexteMenu } from "../contexte/MenuContexte";
// import SwitchCate from '../contexte/MenuContexte'
import '../styles/BtnMenu.css';


export default function Icone() {

    const { toggleCategorie } = useContext( contexteMenu );

    return (
        <div className="content-miam">
            <h1>Miam Miam</h1>
            <div className="btnsMenus">
                <button onClick={() => toggleCategorie( "entree" )}>Entrées</button>
                <button onClick={() => toggleCategorie( "plat" )}>Plats</button>
                <button onClick={() => toggleCategorie( "dessert" )}>Desserts</button>
            </div>
            
        </div>
    )
}