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

const styles = {
    text: {
        margin: 20,
        color: 'white',
        labelWidth: '200px',
    },
    
    button: {margin: 20,width: 150, color: 'white' },
    card: {
        width: '100%',
        margin: '20px auto',
        background: 'transparent',
        color: 'white',
        label: 'white',
        labelWidth: '200px',
    },
    table: {
        color: 'white',
    }
}

class NewTrip extends Component {
    state = {
       date:'',
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
    componentDidMount () {
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
        this.props.dispatch({ type: 'ADD_TRIP', payload: {
            daysArray: this.props.reduxState.tripReducers.addDay,
         ...this.state.newTrip

        } })
        this.setState({
            newTrip: {
                name: '',
                tripComments: ''
            }
        });
        this.props.history.push(`/home`)
        this.props.dispatch({type: 'FETCH_TRIP_NAMES'})
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
                
                <h2 style={{color: 'white'}}>Where to?</h2>
                <h2>{this.state.newTrip.name}</h2>

                <TextField style={styles.text} label="Trip Name" type='text' value={this.state.newTrip.name} onChange={this.handleTripChangeFor('name')} />
                
                {/* <pre>{JSON.stringify(this.props.reduxState.tripReducers)}</pre>
                <pre>{JSON.stringify(this.props.reduxState.tripReducers.dayList)}</pre> */}
                <h3 style={{color: 'white'}}>Add New Day to Trip</h3>
                <Card style={styles.card}>
                    
                        <TextField id="date"type="date" defaultValue={this.state.date}onChange={this.handleDayChangeFor('date')}/>
                        <TextField style={styles.text} label="City" type='text' value={this.state.newDay.city} onChange={this.handleDayChangeFor('city')} />
                        <TextField style={styles.text} label="Travel Itnerary" type='text' value={this.state.newDay.travel} onChange={this.handleDayChangeFor('travel')} />
                        <TextField style={styles.text} label="Hotel" type='text' value={this.state.newDay.hotel} onChange={this.handleDayChangeFor('hotel')} />
                        <TextField style={styles.text} label="Restaurant Reservations" type='text' value={this.state.newDay.reservations} onChange={this.handleDayChangeFor('reservations')} />
                        <TextField style={styles.text} label="Daily Comments" type='text' value={this.state.newDay.dayComments} onChange={this.handleDayChangeFor('dayComments')} />
                        <Button style={{color: 'white'}} size="medium" type='submit' variant="outlined" onClick={this.addNewDay}>Add New Day</Button>
                        

                    
                </Card>
                <Table >
                    <TableHead>

                        <TableRow>
                            <TableCell style={{color: 'white'}}>Date</TableCell>
                            <TableCell style={{color: 'white'}}>City</TableCell>
                            <TableCell style={{color: 'white'}}>Travel Information</TableCell>
                            <TableCell style={{color: 'white'}}>Hotel Information</TableCell>
                            <TableCell style={{color: 'white'}}>Restaurant Reservations</TableCell>
                            <TableCell style={{color: 'white'}}>Comments</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.tripReducers.addDay.map(day => <DayItem history={this.props.history} key={day.id} day={day} />)}
                    </TableBody>
                </Table>

                <TextField style={{color: 'white'}} label="Trip Comments" type='text' value={this.state.newTrip.tripComments} onChange={this.handleTripChangeFor('tripComments')} />
                
                <p>{this.state.newTrip.tripComments}</p>
                <Button style={{color: 'white'}} size="medium" type='submit' variant="outlined" color="white" onClick={this.addTrip}>Save Trip</Button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(NewTrip);