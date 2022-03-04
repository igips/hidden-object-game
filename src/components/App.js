import "../styles/App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import {HashRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<HashRouter>
			<Nav></Nav>
			
				<Routes>
					<Route path="/" element={<Home/>} />
					
				</Routes>
		
			<Footer></Footer>
		</HashRouter>
	);
}

export default App;
