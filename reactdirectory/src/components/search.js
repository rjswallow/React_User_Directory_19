import React from "react";

function Search(props) {
    return (
        <div className="row input-group mb-3 justify-content-center">
            <div className="col-sm-4 ">
            <input type="text" name="search" value={props.search}   className="form-control" id="search" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" 
            onChange={props.handleInputChange}
            // value={props.value}
            />
            </div>
           
        </div>
    )
}


export default Search;