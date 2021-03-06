import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import DayItem from '../DayItem/DayItem'
import Dialog from '@material-ui/core/Dialog';
import { whileStatement } from '@babel/types';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = {
    text: {
        margin: '20px',
        color: 'white',
        inputWidth: '2000px',
    },

    button: { margin: 20, width: 150, color: 'white' },
    card: {
        // cushion: '30px',
        margin: '50px',
        background: 'transparent',
        color: 'white',
        label: 'white',
        height: '105vh',

    },
    textfield: {
        margin: "15px",
        borderWidth: "2px",
        borderColor: "white",
        borderStyle: "none none solid none",

    },

    table: {
        color: 'white',
    },

    InputLabelProps: {
        color: 'red'
    }
}

class NewTrip extends Component {
    state = {
        date: '',
        newDay: {
            date: '',
            city: '',
            travel: '',
            hotel: '',
            reservations: '',
            dayComments: '',
        },
        newTrip: {
            name: '',
            tripComments: ''
        }
    }
    componentDidMount() {
        this.getCurrentDate();
    } // COULD BREAK!!!!!!!~

    addNewDay = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_DAY', payload: this.state.newDay })
        this.setState({
            newDay: {
                date: '',
                city: '',
                travel: '',
                hotel: '',
                reservations: '',
                dayComments: '',
            },
        });
    }

    addTrip = event => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_TRIP', payload: {
                daysArray: this.props.reduxState.tripReducers.addDay,
                ...this.state.newTrip

            }
        })
        this.setState({
            newTrip: {
                name: '',
                tripComments: ''
            }
        });
        this.props.history.push(`/home`)
        this.props.dispatch({ type: 'FETCH_TRIP_NAMES' })
    }

    handleDayChangeFor = (propertyName) => event => {
        // console.log('event happended')
        this.setState({
            newDay: {
                ...this.state.newDay,
                [propertyName]: event.target.value,
            }
        });
    }

    getCurrentDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        this.setState({
            ...this.state, date: today,
        })
    }

    handleTripChangeFor = (propertyName) => event => {
        // console.log('event happended')
        this.setState({
            newTrip: {
                ...this.state.newTrip,
                [propertyName]: event.target.value,
            }
        });
    }

    render() {
        return (
            <div>
                <br />

                {/* <h2 style={{color: 'white'}}>Where to?</h2> */}
                <h2>{this.state.newTrip.name}</h2>


                <TextField InputLabelProps={{ style: { color: 'white' } }} label="Trip Name" type='text' value={this.state.newTrip.name} onChange={this.handleTripChangeFor('name')} />

                {/* <pre>{JSON.stringify(this.props.reduxState.tripReducers)}</pre>
                <pre>{JSON.stringify(this.props.reduxState.tripReducers.dayList)}</pre> */}
                {/* <h3 style={{color: 'white'}}>Add New Day to Trip</h3> */}
                <br />
                <Paper style={styles.card}>
                    <Grid container spacing={10}>
                        <Grid item xs={6}>
                            <TextField fullWidth style={styles.textfield} id="date" type="date" value={this.state.newDay.date} onChange={this.handleDayChangeFor('date')} />
                            <TextField fullWidth style={styles.textfield} label="City" InputLabelProps={{ style: { color: 'white' } }} type='text' value={this.state.newDay.city} onChange={this.handleDayChangeFor('city')} />
                            <TextField fullWidth style={styles.textfield} label="Travel Itnerary" InputLabelProps={{ style: { color: 'white' } }} type='text' value={this.state.newDay.travel} onChange={this.handleDayChangeFor('travel')} />
                            <TextField fullWidth style={styles.textfield} label="Hotel Information" InputLabelProps={{ style: { color: 'white' } }} type='text' value={this.state.newDay.hotel} onChange={this.handleDayChangeFor('hotel')} />
                            <TextField fullWidth style={styles.textfield} label="Restaurant Reservations" InputLabelProps={{ style: { color: 'white' } }} type='text' value={this.state.newDay.reservations} onChange={this.handleDayChangeFor('reservations')} />
                            <TextField fullWidth style={styles.textfield} label="Daily Comments" InputLabelProps={{ style: { color: 'white' } }} type='text' value={this.state.newDay.dayComments} onChange={this.handleDayChangeFor('dayComments')} />

                        </Grid>
                    </Grid>
                    <Button style={{ float: 'right' }} size="medium" type='submit' variant="contained" onClick={this.addNewDay}>Add New Day</Button>


                </Paper>
                <br />
                <br />
                <Table >
                    <TableHead>

                        <TableRow>
                            <TableCell style={{ color: 'white' }}>Date</TableCell>
                            <TableCell style={{ color: 'white' }}>City</TableCell>
                            <TableCell style={{ color: 'white' }}>Travel Information</TableCell>
                            <TableCell style={{ color: 'white' }}>Hotel Information</TableCell>
                            <TableCell style={{ color: 'white' }}>Restaurant Reservations</TableCell>
                            <TableCell style={{ color: 'white' }}>Comments</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.tripReducers.addDay.map(day => <DayItem history={this.props.history} key={day.id} day={day} />)}
                    </TableBody>
                </Table>
                <br />
                <TextField InputLabelProps={{ style: { color: 'white' } }} fullWidth label="Trip Comments" type='text' value={this.state.newTrip.tripComments} onChange={this.handleTripChangeFor('tripComments')} />

                {/* <p>{this.state.newTrip.tripComments}</p> */}
                <Button style={{ float: 'right' }} size="medium" type='submit' variant="contained" color="white" onClick={this.addTrip}>Save Trip</Button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(NewTrip);