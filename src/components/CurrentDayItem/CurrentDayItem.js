import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';



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

    setStateData = () => {
        this.props.singleDay &&
            this.setState({
                date: this.props.singleDay.day,
                city: this.props.singleDay.city,
                travel: this.props.singleDay.travel_information,
                hotel: this.props.singleDay.hotel,
                reservations: this.props.singleDay.restaurant_reservations,
                dayComments: this.props.singleDay.day_comments,
               
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
                   <p></p>
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
                    
                    <Button size="small" onClick={this.handleClickDelete}>
                             Delete Day
                         </Button>
                    </div>   
                        
          
               
                
                
              
           
        )
    }
}

export default connect()(CurrentDayItem);