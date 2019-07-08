import React, { Component } from 'react'
// import TableCell from '@material-ui/core/TableCell';
// import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';



// const styles = {text: {size: '8px' },
//     comments: {
//         width: '1000px',
//         margin: '5px',
//         padding: '5px',
        
//     }
// }



class CurrentDayItem extends Component {

    state = {
         
            day: '',
            city: '',
            travel: '',
            hotel: '',
            reservations: '',
            dayComments: '',
        
    }
 
    componentDidMount () {
        console.log('test',this.state);
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
                day: this.props.singleDay.day,
                city: this.props.singleDay.city,
                travel: this.props.singleDay.travel_information,
                hotel: this.props.singleDay.hotel,
                reservations: this.props.singleDay.restaurant_reservations,
                dayComments: this.props.singleDay.day_comments,
                editMode: false,
                id: this.props.singleDay.id,
               
            })
    }

    updateDay = () =>{
        console.log(this.state);
        this.props.dispatch({
            type: 'UPDATE_DAY',
            payload: this.state
        })
        this.setState({
            ...this.state, editMode: false,
        })
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
                         <Button size="small" onClick={this.handleClickDelete}>
                             Delete Day
                         </Button> 
                    </div>   
                        
  
           
        )
    }
}

export default connect()(CurrentDayItem);