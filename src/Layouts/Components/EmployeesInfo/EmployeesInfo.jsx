import React, { Component } from "react";
import "./EmployeesInfo.css";

class EmployeesInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        console.log(this.props.data)
        return (
            <>
                <div className="employees-info-main-container">
                    <div className="employees-info-body">
                        {this.props.data.results.map((item , index) => {
                            return (
                                <div className="employees-info-row">
                            <div className="employees-info-title">{item.name}</div>
                            <div className="employees-info-contact">
                                <div className="contact-text">Gender</div>
                                <div className="employee-info-name">
                                    {item.gender}
                                </div>
                            </div>
                            <div className="employees-info-contact employees-info-city">
                                <div className="contact-text city-text">
                                    Skin Color
                                </div>
                                <div className="employee-info-name city-name">
                                    {item.skin_color}
                                </div>
                            </div>
                            <div className="employees-info-contact employees-info-city">
                                <div className="contact-text state-text">
                                    Mass
                                </div>
                                <div className="employee-info-name state-name">
                                   {item.mass}
                                </div>
                            </div>

                            <div className="view-details" onClick={(item) => this.props.showDetailsHandler(item)}>View details</div>
                        </div>
                            )
                        })}
                        
                        <div className="employees-info-row">
                            <div className="employees-info-title">Hellomet</div>
                            <div className="employees-info-contact">
                                <div className="contact-text">Contact</div>
                                <div className="employee-info-name">
                                    Swapnil Warng
                                </div>
                            </div>
                            <div className="employees-info-contact employees-info-city">
                                <div className="contact-text city-text">
                                    City
                                </div>
                                <div className="employee-info-name city-name">
                                    Mumbai
                                </div>
                            </div>
                            <div className="employees-info-contact employees-info-city">
                                <div className="contact-text state-text">
                                    State
                                </div>
                                <div className="employee-info-name state-name">
                                    Maharashtra
                                </div>
                            </div>

                            <div className="view-details" onClick={() => this.props.showDetailsHandler()}>View details</div>
                        </div>
                        <div className="employees-info-row">
                            <div className="employees-info-title">Hellomet</div>
                            <div className="employees-info-contact">
                                <div className="contact-text">Contact</div>
                                <div className="employee-info-name">
                                    Swapnil Warng
                                </div>
                            </div>
                            <div className="employees-info-contact employees-info-city">
                                <div className="contact-text city-text">
                                    City
                                </div>
                                <div className="employee-info-name city-name">
                                    Mumbai
                                </div>
                            </div>
                            <div className="employees-info-contact employees-info-city">
                                <div className="contact-text state-text">
                                    State
                                </div>
                                <div className="employee-info-name state-name">
                                    Maharashtra
                                </div>
                            </div>

                            <div className="view-details" onClick={() => this.props.showDetailsHandler()}>View details</div>
                        </div>
                    </div>
                    <div className="employees-info-footer">
                        <div className="pagination">
                            <div>{`<`}</div>
                            <div>1</div>
                            <div className="active-page">2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>{`>`}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EmployeesInfo;
