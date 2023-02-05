import { useContext } from "react"
import { contexteMenu } from "../contexte/MenuContexte"
import dataMenu from "../data/dataMenu";
import '../styles/ChangingMenu.css'

export default function ChangingMenu() {

    const {categorieAliment} = useContext(contexteMenu);

    return (
        <div className="list-miam">
            <h3>{categorieAliment.toUpperCase()}</h3>
            { dataMenu.map( ( meal ) => {
                if(meal.categorie === categorieAliment){
                    return (
                        <li key={meal.id}><img src={meal.image} alt={meal.nom} /> { meal.nom } : { meal.prix }</li>
                    )
                }
            })}
        </div>
    )
}