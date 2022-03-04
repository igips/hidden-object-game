import "../styles/Home.css";
import xbox from "../img/x.jpg";
import ps4 from "../img/ps4.jpg";
import {Link} from "react-router-dom";
import { useEffect } from "react";

function Home(props) {

    useEffect(() => {
        props.changeNav("");

    }); 



	return (
        <div id="home-main">
            <div id="info">
                <div id="pick-info">
                    <p>Select an image.</p>
                    <p>Scroll through the image to find the correct character.</p>
                    <p>Click the character and choose the correct name.</p>
                    <p>You will be timed and your score will be recorded, so move fast!</p>
                </div>
                <div id="pick-div">
                    <Link to="/xbox"><img className="pick-img" src={xbox} alt="" /></Link>
                    <Link to="/ps4"> <img className="pick-img" src={ps4} alt="" /></Link>
                   
                </div>

            </div>

        </div>
		
	);
}

export default Home;