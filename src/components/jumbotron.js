import React from "react";
import "../styles/jumbotron.css";

const styles = {
    headerStyle: {
      background: "blue"
    },
    headingStyle: {
      fontSize: 100
    }
  };

function Jumbotron() {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Click on carrots to filter by heading of use the search box to narrow your results.</p>
           
        </div>
    )
}

export default Jumbotron;