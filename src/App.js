import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";
import SearchPage from "./components/SearchPage";

function App() {
  const [searchTerm,setSearchTerm] = useState("")
   
  function getSearchTerm(e) {
    setSearchTerm(e.target.value)
    
  }
  return (
    <div className="app">
      <Router>
        <Header term={searchTerm} getSearchTerm={getSearchTerm}/>
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage term={searchTerm} />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
