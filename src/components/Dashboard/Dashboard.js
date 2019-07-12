import React, { Component } from 'react';

import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TripNames from '../TripNames/TripNames'
import Card from '@material-ui/core/Card';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridList from '@material-ui/core/GridList';

import GoogleMaps from '../Maps';



const styles = {text: {margin: 200},button: {margin: 20,width: 200, },
    card: {
        width: '30%',
        height: '300 auto',
        float: 'left',
       
        margin: '20px auto',
        padding: '5px',
        backgroundColor: 'transparent',
        
        
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
      <div>
        
        {/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}
        
        
        {/* <Button type='submit' variant="contained" color="black"onClick={this.getNew}>New Trip</Button> */}
        
         
        
         {/* <pre>{JSON.stringify(this.props.reduxState.tripReducers.tripListAll)}</pre>
         <pre>{JSON.stringify(this.props.reduxState.tripReducers)}</pre>
         <pre>{JSON.stringify(this.props.reduxState.tripReducers.tripNames)}</pre> */}
             <Card style={styles.card}>  
               <h4>Upcoming Trips</h4>
             {this.props.reduxState.tripReducers.tripNames.map(tripNames => <TripNames history={this.props.history} key={tripNames.id} tripNames={tripNames} complete={"false"} />)}  
             </Card>

             <Card style={styles.card}>
               <h4>Past Trips</h4> {this.props.reduxState.tripReducers.tripNames.map(tripNames => <TripNames history={this.props.history} key={tripNames.id} tripNames={tripNames} complete={"true"} />)}
             </Card>
         
         <GridList cols={2.5}>
        
          <GridListTile >
            test
            {/* <GridListTileBar
             
            /> */}
          </GridListTile>
        
      </GridList>
      
      </div>
    );
  }
}
const mapStateToProps = reduxState => ({
    reduxState
});
export default connect(mapStateToProps)(Dashboard);