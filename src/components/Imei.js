import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../styles/Imei.css";
import $ from 'jquery';

class Imei extends Component {

    constructor(props){
        super(props);
        this.nextPage = this.nextPage.bind(this)
        this.state = {
            testVar: false
        };  
    }

    nextPage(){
        this.setState({testVar: true})
        console.log("testVar = " + this.state.testVar)
    }

    render() {
        return (
            <div className="Home">
                <input id="userInput" type="text" placeholder="Enter IMEI Here" onChange={this.enableButton.bind(this)}/>
                <Link to={'/test'}>
                    <button id="check" className="btn btn-success disabled" onClick={this.nextPage}>Check Status</button>
                </Link>
            </div>
        );
    }

    enableButton(event) {
        let imei = $("#userInput").val();
        let re = new RegExp("^([0-9]{15}|[0-9]{2}-[0-9]{6}-[0-9]{6}-[0-9])$");
        if (re.test(imei)) {
            $("#check").removeClass("disabled");
        } else {
            $("#check").addClass("disabled");
        } 
    }
}

export default Imei;
