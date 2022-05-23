import React,{useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Inicio from "../page/Inicio";

const App = () => {
 
  return (

    
          <BrowserRouter>
           
              <Routes>
                <Route exact path="/" element={<Inicio />} />
            
              </Routes>

          </BrowserRouter>

    
  );
};

export default App;
