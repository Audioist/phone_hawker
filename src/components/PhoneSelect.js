import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../styles/PhoneSelect.css";
import { bindActionCreators } from 'redux';
import { get_model } from '../state/phone/action-creator';

let iphones = ["X", "8 Plus", "8", "7 Plus", "7", "SE", "6S Plus", "6S", "6 Plus", "6"];

// const PhoneSelect = (props) => {
class PhoneSelect extends Component {
    render(){   
        return (
            <div className="PhoneSelect">
                <div className="container">
                    <h3 className="display-4 text-center">Please select your model:</h3>
                    {iphones.map( (el) => {
                            return <button key={el} onClick={this.onButtonClick.bind(this, el)} className="btn btn-default">iPhone {el}</button>
                            }
                        )
                    }
                    <p>currently selected: iPhone {this.props.phone.model}</p>
                </div>
            </div>
        );
    }

    onButtonClick = (model) => {
        this.props.get_model(model);
        console.log(model)
    }
}



const mapStateToProps = (state) => {
    return  {
        phone: state.phone
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({get_model}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneSelect);