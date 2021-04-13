import React from "react"
import SearchPage from "./pages/searchPages"
import  Details from "./pages/PageDetails"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"




import "./styles/index.css"

function App() {
 return(
 
  
  <Router>
   <Switch>
   <Route path="/" exact component = {SearchPage} />
   <Route path="/book/:bookId" exact component={Details} />
   </Switch>
  </Router>
  
 )
}

export default App;
