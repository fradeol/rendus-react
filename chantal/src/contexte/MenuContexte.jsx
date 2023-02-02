import { createContext, useState } from "react"
import dataMenu from "../data/dataMenu";

export const contexteMenu = createContext();

export default function MenuContexte(props) {

    const [categorieAliment, setCategorieAliment] = useState(dataMenu[0]);

    const toggleCategorie = (newCategorie) => {
        setCategorieAliment(newCategorie)
    }

    return (
        <div>
            <contexteMenu.Provider value={{ categorieAliment, toggleCategorie }}>
                {props.children}
            </contexteMenu.Provider>
            
        </div>
    )
}