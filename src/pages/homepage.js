import React,{Component} from "react";
import Jumbotron from "../components/jumbotron";
import Search from "../components/search";
import Table from "../components/table";
import api from "../utils/api"
import  employees from "../employees.json"

class Homepage extends Component {

  state={
     employeeArray:[],
     search:"",
     originalArray:[] ,
     ascending:false
  }
  loadDirectory=() => {
    api.getRandomPeople().then(response => {
      return response.data.results ? (this.setState({employeeArray:response.data.results,originalArray:response.data.results})) : (this.setState({employeeArray:employees})) 
    })
  }
  componentDidMount(){
   this.loadDirectory()
  }

  // input logic for search

  handleInputChange = event => {
    const {name,value} = event.target
    
    this.setState({
      [name]: value
    });

      console.log(value)
      let currentState = this.state.originalArray;
      let filterState = currentState.filter((item) => {
        let wholeName = item.name.first +" "+  item.name.last;
        console.log(this.state.search)
        console.log(this.state.value)
        return wholeName.toLowerCase().includes(value.toLowerCase())
      })
      this.setState({
        employeeArray: filterState
      })
   
  };
  handleSort=event => {
    let sortedArray=[]
    let ascending=false
    if(this.state.ascending){
       sortedArray=this.state.employeeArray.sort((a,b) => {
        return b.name.first.localeCompare(a.name.first)
      })
      ascending=false
    } else{
      sortedArray=this.state.employeeArray.sort((a,b) => {
        return a.name.first.localeCompare(b.name.first)
      })
       ascending=true
    } 
    
   


      this.setState({
        employeeArray:sortedArray,
        ascending:ascending
      })
  }
  render(){
    return (
     
        <div>
          <Jumbotron/>
          <Search 
          search={this.state.search}
          // value={this.state.value}
          handleInputChange={this.handleInputChange}/>
          <Table  handleSort={this.handleSort} employeeArray={
             this.state.Search ? this.state.filterState : this.state.employeeArray
          }/>
         
        </div>
         
  
    )
  }
    
}; 

export default Homepage;
