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
import { getDoc, doc } from "firebase/firestore";
import { db } from "../index.js";
import { useState } from "react";

function Game(props) {
	const pic1 = props.type === "xbox" ? chief : arthur;
	const name1 = props.type === "xbox" ? "Master Chief" : "Arthur Morgan";
	const pic2 = props.type === "xbox" ? marcus : kratos;
	const name2 = props.type === "xbox" ? "Marcus Fenix" : "Kratos";
	const pic3 = props.type === "xbox" ? niko : nathan;
	const name3 = props.type === "xbox" ? "Niko Bellic" : "Nathan Drake";

	const [locX, setLocX] = useState();
	const [locY, setLocY] = useState();
	const [found, setFound] = useState(0);

	useEffect(() => {
		props.changeNav(props.type);
	});

	function isCoordWithinTwoDegrees(coord1, coord2) {
		return (
			coord1 === coord2 ||
			coord1 + 1 === coord2 ||
			coord1 + 2 === coord2 ||
			coord1 - 1 === coord2 ||
			coord1 - 2 === coord2
		);
	}

	async function checkIfFound(con, name) {
		const gotData = await getDoc(doc(db, "locations", con));

		let characters = gotData.data().chars;

		characters.forEach((character) => {
			if (character.name === name) {
				if (
					isCoordWithinTwoDegrees(character.xCoord, locX) &&
					isCoordWithinTwoDegrees(character.yCoord, locY)
				) {
					removeFoundFromDropDown(name);
					grayOutNav(name);
                    createTag(name);

					if (found < 2) {
						setFound(found + 1);
					} else {
						alert("You Won");
					}
				}
			}
		});
	}

	function createTag(name) {
		const tag = document.createElement("div");
        tag.classList.add("tag");
		tag.textContent = name;
		tag.style.display = "block";
		tag.style.position = "absolute";
		tag.style.left = (locX - 5) + "%";
		tag.style.top = locY + "%";
		document.getElementById("game-main").appendChild(tag);
	}

	function grayOutNav(name) {
		const charDivs = Array.from(document.getElementsByClassName("char-div"));

		charDivs.forEach((charDiv) => {
			if (charDiv.children[1].innerText === name && charDiv.style.opacity !== "0.2") {
				charDiv.style.opacity = "0.2";
			}
		});
	}

	function removeFoundFromDropDown(name) {
		const dropDownDivs = Array.from(document.getElementsByClassName("drop-down-div"));

		dropDownDivs.forEach((dropDownDiv) => {
			if (dropDownDiv.children[1].innerText === name) {
				dropDownDiv.style.display = "none";
			}
		});
	}

	function dropDown(e) {
		const x = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
		const y = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);
		setLocX(x);
		setLocY(y);
		const dropDown = document.getElementById("drop-down");
		dropDown.style.display = "block";
		dropDown.style.position = "absolute";
		dropDown.style.left = x + "%";
		dropDown.style.top = y + "%";
	}

	function pickChar(name) {
		const dropDown = document.getElementById("drop-down");
		dropDown.style.display = "none";
		checkIfFound(props.type, name);
	}

	return (
		<div id="game-main">
			<img onClick={(e) => dropDown(e)} id="game-img" src={props.type === "xbox" ? xbox : ps4} alt="" />
			<div id="drop-down">
				<div id="drop-down-inner">
					<div className="drop-down-div" onClick={() => pickChar(name1)}>
						<img className="drop-img" src={pic1} alt="" />
						<span>{name1}</span>
					</div>
					<div className="drop-down-div" onClick={() => pickChar(name2)}>
						<img className="drop-img" src={pic2} alt="" />
						<span>{name2}</span>
					</div>
					<div className="drop-down-div" onClick={() => pickChar(name3)}>
						<img className="drop-img" src={pic3} alt="" />
						<span>{name3}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Game;
