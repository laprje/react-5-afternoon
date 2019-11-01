import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import updateRealEstateAgent from '../../ducks/reducer';

class WizardFive extends Component {

    render(){
        const { updateRealEstateAgent } = this.props
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={e => updateRealEstateAgent}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={this.props.realEstateAgentFalse}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { found } = state;
  
    return {
      found
    };
  }

export default connect(mapStateToProps, { updateRealEstateAgent})(WizardFive)