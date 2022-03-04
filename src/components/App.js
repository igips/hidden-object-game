import "../styles/App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import Game from "./Game";
import {HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {
  
  const [char, setChar] = useState("");

  function changeChar(type) {
    setChar(type);
  }



	return (
		<HashRouter>
			<Nav char={char}></Nav>
			
				<Routes>
					<Route path="/" element={<Home changeNav={changeChar}/>} />
          <Route path="/xbox" element={<Game changeNav={changeChar} type="xbox"/>} />
          <Route path="/ps4" element={<Game changeNav={changeChar} type="ps4"/>} />					
				</Routes>
		
			<Footer></Footer>
		</HashRouter>
	);
}

export default App;
