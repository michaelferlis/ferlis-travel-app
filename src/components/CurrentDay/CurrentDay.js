import React, { Component } from 'react';
import { connect } from 'react-redux'

class CurrentDay extends Component {

  componentDidMount() {
    
  }
  getDashboard=()=> {
    this.props.history.push(`/home`)
  }

  render() {
    return (
      <div>
          <button onClick={this.getDashboard}>Dashboard</button>
          {/* <h2>{this.props.location.state && this.props.location.state.trip_name }</h2>
         <Table>
                    <TableHead>

                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>City</TableCell> */}
                            {/* <TableCell>Travel Information</TableCell>
                            <TableCell>Hotel Information</TableCell>
                            <TableCell>Restaurant Reservations</TableCell> */}
                            {/* <TableCell>Comments</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody> */}
                        {/* {this.props.reduxState.tripReducers.singleTrip.map(singleTrip => <CurrentTripItem history={this.props.history} key={singleTrip.date} singleTrip={singleTrip} />)}
                    </TableBody>
                </Table> */}
         {/* <pre>{JSON.stringify(this.props.reduxState.tripReducers.singleTrip, null, 2)}</pre> */}
         {/* <pre>{JSON.stringify(this.props.location.state.trip_name, null, 2)}</pre> */}
         {/* <h4>{this.props.location.state && this.props.location.state.trip_comments }</h4> */}
         <pre>{JSON.stringify(this.props.reduxState.tripReducers.singleDay, null, 2)}</pre>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
});
export default connect(mapStateToProps)(CurrentDay);