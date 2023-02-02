import Presentation from "../components/Presentation";
import Slider from "../components/Slider";

export default function Home() {

    return (
        <div className="home">
            <Slider/>
            <Presentation/>
        </div>
    );
}