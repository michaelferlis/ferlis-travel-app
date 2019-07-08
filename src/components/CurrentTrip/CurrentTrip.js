import React, { Component } from 'react'

import { connect } from 'react-redux'
import CurrentTripItem from '../CurrentTripItem/CurrentTripItem'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

class CurrentTrip extends Component {

  state = {
    tripComments: '',
    editMode: false,

  }

  componentDidMount() {
    this.setTripComments();
    console.log('current state', this.state.id);
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

  render() {
    return (
      <div>
        <h2>{this.props.location.state && this.props.location.state.trip_name}</h2>


        <>
          {this.props.reduxState.tripReducers.singleTrip.map(singleTrip => <CurrentTripItem history={this.props.history} key={singleTrip.date} singleTrip={singleTrip} />)}
        </>

        <pre>{JSON.stringify(this.props.location.state && this.props.location.state.id)}</pre>
        <pre>{JSON.stringify(this.props.location.state && this.state.editMode)}</pre>
        <h4>Trip Comments</h4>
        <h5>{this.props.location.state && this.props.location.state.trip_comments}</h5>

        <TextField
          onChange={this.handleChange}
          id="tripComments"
          disabled={!this.state.editMode}
          fullWidth
          label="Trip Comments"
          value={this.state.tripComments}
          margin="normal"
        />
        <Grid item xs={9} className="grid-item-text-center">
                            {this.state.editMode ?
                                <Button size="large" onClick={this.updateTrip} variant="contained" color="primary">Save Changes</Button>
                                :
                                <Button size="large" onClick={() => { this.setState({ ...this.state, editMode: true }) }} variant="contained" color="primary">Edit Trip Comments</Button>
                            }
                            </Grid>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
});
export default connect(mapStateToProps)(CurrentTrip);
