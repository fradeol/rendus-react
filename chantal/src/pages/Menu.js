import MenuContexte from "../contexte/MenuContexte";
import BtnMenu from "../components/BtnMenu";
import ChangingMenu from "../components/ChangingMenu";

export default function Menu() {

    return (
        <MenuContexte>
            <div className="menu">
                
                <BtnMenu/>
                <ChangingMenu/>
            </div>
        </MenuContexte>
    );
}