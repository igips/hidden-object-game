import "../styles/Game.css";
import xbox from "../img/x.jpg";
import ps4 from "../img/ps4.jpg";
import { useEffect } from "react";
import chief from "../img/chief.png";
import marcus from "../img/marcus.png";
import niko from "../img/niko.png";
import arthur from "../img/arthur.png";
import kratos from "../img/kratos.png";
import nathan from "../img/nathan.png";

function Game(props) {
	const pic1 = props.type === "xbox" ? chief : arthur;
	const name1 = props.type === "xbox" ? "Master Chief" : "Arthur Morgan";
	const pic2 = props.type === "xbox" ? marcus : kratos;
	const name2 = props.type === "xbox" ? "Marcus Fenix" : "Kratos";
	const pic3 = props.type === "xbox" ? niko : nathan;
	const name3 = props.type === "xbox" ? "Niko Bellic" : "Nathan Drake";

	useEffect(() => {
		props.changeNav(props.type);
	});

    function dropDown(e) {
        const dropDown = document.getElementById("drop-down");
        dropDown.style.display = "block";
        dropDown.style.position = "absolute";
        dropDown.style.left = e.pageX + "px";
        dropDown.style.top = e.pageY + "px"; 
    }

    function pickChar() {
        const dropDown = document.getElementById("drop-down");
        dropDown.style.display = "none";
    }

	return (
		<div id="game-main">
			<img onClick={(e) => dropDown(e)} id="game-img" src={props.type === "xbox" ? xbox : ps4} alt="" />
			<div id="drop-down">
				<div id="drop-down-inner">
					<div onClick={() => pickChar()}>
						<img  className="drop-img" src={pic1} alt="" />
						<span>{name1}</span>
					</div>
					<div onClick={() => pickChar()}>
						<img  className="drop-img" src={pic2} alt="" />
						<span>{name2}</span>
					</div>
					<div onClick={() => pickChar()}>
						<img  className="drop-img" src={pic3} alt="" />
						<span>{name3}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Game;
