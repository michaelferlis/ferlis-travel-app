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


class CurrentTrip extends Component {


  
  state = {
    trip_name: '',
    trip_comments: '',
    editMode: false,
  }

  componentDidMount() {
    this.setTripComments();
  }

  handleChange = (event) => {
    this.setState({
      ...this.state, [event.target.id]: event.target.value,
    })
  }

  setTripComments = () => {
    this.props.location.state &&
    this.setState({
      trip_comments: this.props.location.state.trip_comments,
      trip_name: this.props.location.state.trip_name,
      editMode: false,
      id: this.props.location.state.id,
    })
  }

  updateTrip = () => {
    this.props.dispatch({
      type: 'UPDATE_TRIP',
      payload: {
        ...this.state, id: this.props.location.state.id
      }
    })
    this.setState({
      ...this.state, editMode: false,
    })
  }
  getDashboard = () => {
    this.props.history.push(`/home`)
  }
  addDay= () =>{
    this.props.dispatch({
      type: 'ADD_SINGLE_DAY',
      payload: {
        ...this.state, trip_id: this.props.location.state.id
      }
    })
    this.props.history.push(`/dashboard`)  
  }

  markComplete = () =>{
   this.props.dispatch({
     type: 'MARK_COMPLETE',
     payload: {
      id: this.props.location.state.id
     }
   })
   this.props.history.push(`/dashboard`)  
  }
  render() {
    return (
      
      <div>
        {/* <h3 style={{color: "white"}}>{this.props.location.state && this.props.location.state.trip_name}</h3> */}
      
        <TextField 
          onChange={this.handleChange}
          id="trip_name"
          disabled={!this.state.editMode}
          fullWidth
          label=""
          value={this.state.trip_name}
          margin="normal"
          style={styles.name}
        />
        <>
          {this.props.reduxState.tripReducers.singleTrip.map(singleTrip => <CurrentTripItem history={this.props.history} key={singleTrip.id} singleTrip={singleTrip} />)}
        </>

        <h4 style={{color: 'white'}}></h4>
      <Grid container>
        <Grid item xs={12}>
        <Card style={styles.card}>
        <TextField
          onChange={this.handleChange}
          id="trip_comments"
          disabled={!this.state.editMode}
          fullWidth
          multiline
          rows='10'
          label="Trip Comments"
          value={this.state.trip_comments}
          margin="normal"
        />
        </Card>
        </Grid>
        </Grid>
        <Grid item xs={9} className="grid-item-text-center">
          <br/>
          <br/>
          
                            {this.state.editMode ?
                                <Button size="small" onClick={this.updateTrip} variant="contained" color="white">Save Changes</Button>
                                :
                                <Button size="small" onClick={() => { this.setState({ ...this.state, editMode: true }) }} variant="contained" color="white">Edit Trip</Button>
                            }
                            </Grid>
                            <br/>
                         <Button size="small" style={{float: 'right'}} onClick={this.markComplete}variant="contained" color="white">
                            Trip Complete
                         </Button> 
                         <br/>
                         <br/>
                         <Button size="small" onClick={this.addDay}variant="contained" color="white">
                             Add Day
                         </Button> 
                         </div>
    );
  }
  
}


const mapStateToProps = reduxState => ({
  reduxState
});
export default connect(mapStateToProps)(CurrentTrip);
