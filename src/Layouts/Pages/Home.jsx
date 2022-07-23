import React, { Component } from "react";
import EmployeesInfo from "../Components/EmployeesInfo/EmployeesInfo";
  import EmployeesDetails from "../Components/EmployeesDetails/EmployeesDetails";


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetails:false,
            data:null,
            loading:false,
            detailsData:null
        };
    }

    componentDidMount = () => {
        fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    this.setState({
        data:data,
        loading:true
    })
  }
  );
    }


    showDetailsHandler =  (e) => {
        this.setState({
            showDetails: !this.state.showDetails,
            detailsData:e
        })
    }



    render() {

        return (
        <>{
            this.state.loading ? <> {this.state.showDetails  ? <EmployeesDetails showDetailsHandler={this.showDetailsHandler} /> : <EmployeesInfo showDetailsHandler={this.showDetailsHandler} data={this.state.data} />} </>: null
        }
       
        
           

    
        </>
        );
    }
}

export default Home;
