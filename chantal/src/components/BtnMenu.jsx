import { useContext } from "react";
import { contexteMenu } from "../contexte/MenuContexte";
import dataMenu from "../data/dataMenu";




export default function Icone() {

    const { toggleCategorie } = useContext( contexteMenu );

    return (
        <div>
            <button onClick={() => toggleCategorie( dataMenu.categorie === "entree" )}></button>
        </div>
    )
}