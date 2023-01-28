import { useContext } from "react";
import dataLanguage from "./dataLanguage.js";
import {monContexte}  from '../contexte/LangueContexte';

export default function TexteTraduit () {
    
    const {langue} = useContext(monContexte);
    console.log(navigator.language.substring(0,2).toUpperCase());
    return (
        <div className="textes">
            <h1>{dataLanguage[langue].title}</h1>
            <p>{dataLanguage[langue].subtitle}</p>
            
        </div>
    );
}
