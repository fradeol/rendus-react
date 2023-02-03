import Presentation from "../components/Presentation";
import Slider from "../components/Slider";
import dataMenu from "../data/dataMenu";

export default function Home() {

    return (
        <div className="home">
            <Slider/>
            <Presentation/>
        </div>
    );
}