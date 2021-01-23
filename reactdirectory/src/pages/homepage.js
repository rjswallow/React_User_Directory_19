import React from "react";
import Jumbotron from "../components/jumbotron";
import Search from "../components/search";
import Table from "../components/table";


function Homepage() {
    return(
        <div>
          <Jumbotron/>
          <Search/>
          <Table/>
        </div>
         
    )
}; 

export default Homepage;
