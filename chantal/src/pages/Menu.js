import MenuContexte from "../contexte/MenuContexte";

export default function Menu() {

    return (
        <MenuContexte>
            <div className="menu">
                <h1>Miam Miam</h1>
                <button>Entrées</button>
                <button>PLats</button>
                <button>Deserts</button>
            </div>
        </MenuContexte>
    );
}