import React, { Component } from 'react'

import { connect } from 'react-redux'
import CurrentTripItem from '../CurrentTripItem/CurrentTripItem'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'

const styles = {text: {size: '8px' },
    card: {
        width: '50%',
        margin: '5px',
        padding: '5px',
        background: 'transparent',
        border: '1px solid white',
       
       
        
    },

    name:{background: 'transparent',
    color: 'white',
    width: '50%',
    
    padding: '5%',},
    paper: {
        background: 'transparent',
        color: 'white',
        width: '50%',
        border: '1px solid white',
        padding: '5%',
        
        
    }
}


class CurrentGuide extends Component {


  render() {
    return (
      
      <div>
        
        
          <h1>tesf</h1>
      
                         </div>
    );
  }
  
}


const mapStateToProps = reduxState => ({
  reduxState
});
export default connect(mapStateToProps)(CurrentGuide);
