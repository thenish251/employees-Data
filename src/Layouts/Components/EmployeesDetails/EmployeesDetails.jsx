import React, { Component } from "react";
import "./EmployeesDetails.css";
import UserDetails from "./UserDetails";

class EmployeesDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        
       
    }

    render() {
        return (
            <>
                <div className="employees-details-main-container">
                    <div className="employees-details-body">
                        <div className="employees-details-row">
                            <div className="employees-details-title">Hello Travels</div>
                            <div className="employees-details-contact">
                                <div className="contact-text">Contact</div>
                                <div className="employee-details-name">
                                    Imran Dola
                                </div>
                            </div>
                            <div className="employees-details-contact employees-details-city">
                                <div className="contact-text city-text">
                                    City
                                </div>
                                <div className="employee-details-name city-name">
                                    Surat
                                </div>
                            </div>
                            <div className="employees-details-contact employees-details-city">
                                <div className="contact-text state-text">
                                    State
                                </div>
                                <div className="employee-details-name state-name">
                                    Gujrat
                                </div>
                            </div>

                            <div className="view-details" onClick={() => this.props.showDetailsHandler(null)}>Hide details</div>
                        </div>
                        
                    <UserDetails detailsData={this.props.detailsData}/>
                    </div> 
                </div>
               
            </>
        );
    }
}
export default EmployeesDetails;

