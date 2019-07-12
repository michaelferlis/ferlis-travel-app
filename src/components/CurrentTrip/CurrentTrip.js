import React, { Component } from 'react'

import { connect } from 'react-redux'
import CurrentTripItem from '../CurrentTripItem/CurrentTripItem'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

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
    this.props.history.push(`/home`)  
  }

  markComplete = () =>{
   this.props.dispatch({
     type: 'MARK_COMPLETE',
     payload: {
      id: this.props.location.state.id
     }
   })
    
  }
  render() {
    return (
      <div>
        <h2>{this.props.location.state && this.props.location.state.trip_name}</h2>
        <TextField
          onChange={this.handleChange}
          id="trip_name"
          disabled={!this.state.editMode}
          fullWidth
          label="Trip Name"
          value={this.state.trip_name}
          margin="normal"
        />
        <>
          {this.props.reduxState.tripReducers.singleTrip.map(singleTrip => <CurrentTripItem history={this.props.history} key={singleTrip.id} singleTrip={singleTrip} />)}
        </>

        {/* <pre>{JSON.stringify(this.props.location.state && this.props.location.state.id)}</pre>
        <pre>{JSON.stringify(this.props.location.state && this.state.editMode)}</pre> */}
        <h4>Trip Comments</h4>
      <Grid container spacing={1}>
        
        <TextField
          onChange={this.handleChange}
          id="trip_comments"
          disabled={!this.state.editMode}
          fullWidth
          label="Trip Comments"
          value={this.state.trip_comments}
          margin="normal"
        />
        
        </Grid>
        <Grid item xs={9} className="grid-item-text-center">
                            {this.state.editMode ?
                                <Button size="small" onClick={this.updateTrip} variant="contained" color="white">Save Changes</Button>
                                :
                                <Button size="small" onClick={() => { this.setState({ ...this.state, editMode: true }) }} variant="contained" color="primary">Edit Trip</Button>
                            }
                            </Grid>
                            <Button size="small" onClick={this.addDay}variant="contained" color="white">
                             Add Day
                         </Button> 
                         <Button size="small" onClick={this.markComplete}variant="contained" color="white">
                            Trip Complete
                         </Button> 
                         </div>
    );
  }
  
}


const mapStateToProps = reduxState => ({
  reduxState
});
export default connect(mapStateToProps)(CurrentTrip);
