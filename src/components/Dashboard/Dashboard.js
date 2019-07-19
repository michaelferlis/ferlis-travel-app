import React, { Component } from 'react';

import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TripNames from '../TripNames/TripNames'
import Card from '@material-ui/core/Card';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import './Dashboard.css';



const styles = 
{text: {color: 'white',
  
},



button: {
  textAlign: 'center',
  width: 200,color: 'white' 

},

card: {
        width: '90%',
        height: '600%',
        color: 'white',
       textAlign: 'center',
        margin: '20px auto',
        padding: '10px',
        backgroundColor: 'transparent',
        fontSize: '24px',
        
    }
}

// sgMail.send(msg);

class Dashboard extends Component {
  state = {
  
    usernameIsEditable: false,
 
  }
  
  

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_TRIP_NAMES'})
  }
    getNew=()=> {
        this.props.history.push(`/new`)
      }
      getCurrent=()=> {
        this.props.history.push(`/current`)
      }
      getDay=()=> {
        this.props.history.push(`/day`)
      }
      getPast=()=> {
        this.props.history.push(`/past`)
      }

      
  render() {
    return (
     
      <div className="dashboard">
        
        {/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}
        
        
        {/* <Button type='submit' variant="contained" color="black"onClick={this.getNew}>New Trip</Button> */}
        
         
        
         <pre>{JSON.stringify(this.props.reduxState.tripReducers.tripListAll)}</pre>
         <pre>{JSON.stringify(this.props.reduxState.tripReducers)}</pre>
         <pre>{JSON.stringify(this.props.reduxState.tripReducers.tripNames)}</pre>
         <Grid container spacing={2}>
           <Grid item xs={6}>
             <Card style={styles.card} >  
               <h4 >Upcoming Trips</h4>
             {this.props.reduxState.tripReducers.tripNames.map(tripNames => <TripNames history={this.props.history} key={tripNames.id} tripNames={tripNames} complete={"false"} />)}  
             </Card>
             </Grid>
             <Grid item xs={6}>
             <Card style={styles.card} >
               <h4>Past Trips</h4> {this.props.reduxState.tripReducers.tripNames.map(tripNames => <TripNames history={this.props.history} key={tripNames.id} tripNames={tripNames} complete={"true"} />)}
             </Card>
             </Grid>
             </Grid>
         
      
      </div>
    );
  }
}
const mapStateToProps = reduxState => ({
    reduxState
});
export default connect(mapStateToProps)(Dashboard);