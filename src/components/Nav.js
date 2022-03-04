import "../styles/Nav.css";
import chief from "../img/chief.png";
import marcus from "../img/marcus.png";
import niko from "../img/niko.png";
import arthur from "../img/arthur.png";
import kratos from "../img/kratos.png";
import nathan from "../img/nathan.png";


function Nav(props) {

    const pic1 = props.char === "xbox" ? chief : arthur;
    const name1 = props.char === "xbox" ? "Master Chief" : "Arthur Morgan";
    const pic2 = props.char === "xbox" ? marcus : kratos;
    const name2 = props.char === "xbox" ? "Marcus Fenix" : "Kratos";
    const pic3 = props.char === "xbox" ? niko : nathan;
    const name3 = props.char === "xbox" ? "Niko Bellic" : "Nathan Drake";
    




	if (props.char === "") {
		return <nav></nav>;

	} else  {
		return (
			<nav>
				<div className="char-div">
					<img className="char-img" src={pic1} alt="" />
					<span>{name1}</span>
				</div>

				<div className="char-div">
					<img className="char-img" src={pic2} alt="" />
					<span>{name2}</span>
				</div>

				<div className="char-div">
					<img className="char-img" src={pic3} alt="" />
					<span>{name3}</span>
				</div>
			</nav>
		);

	} 
}

export default Nav;
