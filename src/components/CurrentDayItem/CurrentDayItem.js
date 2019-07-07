import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';



const styles = {text: {size: '8px' },
    comments: {
        width: '1000px',
        margin: '5px',
        padding: '5px',
        
    }
}



class CurrentDayItem extends Component {

    state = {
        newDay: {
            date: '',
            city: '',
            travel: '',
            hotel: '',
            reservations: '',
            dayComments: '',
        }
    }
 
    componentDidMount () {
        this.setStateData()
        

    }
    handleChange = (event) => {
        this.setState({
            ...this.state, [event.target.id]: event.target.value,
        })
    }

    setStateData = () => {
        console.log('set state test');
        
        this.props.singleDay &&
            this.setState({
                date: this.props.singleDay.day,
                city: this.props.singleDay.city,
                travel: this.props.singleDay.travel_information,
                hotel: this.props.singleDay.hotel,
                reservations: this.props.singleDay.restaurant_reservations,
                dayComments: this.props.singleDay.day_comments,
                editMode: false,
               
            })
    }

    updateDay = () =>{
        console.log(this.state);
        
    }

    handleClickDelete = () =>{
        console.log('button');
        this.props.dispatch({
            type: 'DELETE_DAY',
            payload: this.props.singleDay.id
        })
        this.props.history.push(`/home`)
    }
  
    

    render() {
        return (
            
               <div>

                    <TextField
                                onChange={this.handleChange}
                                id="date"
                                disabled={!this.state.editMode}
                                fullWidth
                                label="Date"
                                value={this.state.date}
                                margin="normal"
                            />
                             <TextField
                                onChange={this.handleChange}
                                id="city"
                                disabled={!this.state.editMode}
                                fullWidth
                                label="City"
                                value={this.state.city}
                                margin="normal"
                            />
                             <TextField
                                onChange={this.handleChange}
                                id="travel"
                                disabled={!this.state.editMode}
                                fullWidth
                                label="Travel Information"
                                value={this.state.travel}
                                margin="normal"
                            />
                             <TextField
                                onChange={this.handleChange}
                                id="hotel"
                                disabled={!this.state.editMode}
                                fullWidth
                                label="Hotel Information"
                                value={this.state.hotel}
                                margin="normal"
                            />
                             <TextField
                                onChange={this.handleChange}
                                id="reservations"
                                disabled={!this.state.editMode}
                                fullWidth
                                label="Restaurant Reservations"
                                value={this.state.reservations}
                                margin="normal"
                            />
                             <TextField
                                onChange={this.handleChange}
                                id="dayComments"
                                disabled={!this.state.editMode}
                                fullWidth
                                label="Daily Comments"
                                value={this.state.dayComments}
                                margin="normal"
                            />
    <Grid item xs={9} className="grid-item-text-center">
                            {this.state.editMode ?
                                <Button size="large" onClick={this.updateDay} variant="contained" color="primary">Save Changes</Button>
                                :
                                <Button size="large" onClick={() => { this.setState({ ...this.state, editMode: true }) }} variant="contained" color="primary">Edit Day</Button>
                            }
                        </Grid>

                   {/* <p></p>
                   <pre>{JSON.stringify(this.state)}</pre>
                   <h4>Date</h4>
                   <TextField value={this.props.singleDay.day.substring(5, 7) + "/" + this.props.singleDay.day.substring(8, 10) + "/" + this.props.singleDay.day.substring(0, 4)}></TextField>
                   <br />
                   <h4>City</h4>
                    <TextField value={this.props.singleDay.city}></TextField>
                    <br />
                    <h4>Travel Information</h4>
                    <TextField value={this.props.singleDay.travel_information}></TextField>
                    <br />
                    <h4>Hotel Information</h4>
                    <TextField value={this.props.singleDay.hotel}></TextField>
                    <br />
                    <h4>Restaurant Reservations</h4>
                    <TextField value={this.props.singleDay.restaurant_reservations}></TextField>
                    <br />
                    <h4>Daily Comments</h4>
                    <TextField style={styles.comments}value={this.props.singleDay.day_comments}></TextField>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button size="small" onClick={this.checkState}>
                             state
                         </Button>
                    <Button size="small" onClick={this.handleClickDelete}>
                             Delete Day
                         </Button> */}
                    </div>   
                        
          
               
                
                
              
           
        )
    }
}

export default connect()(CurrentDayItem);