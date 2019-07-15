import React, { Component } from 'react'
// import TableCell from '@material-ui/core/TableCell';
// import TableRow from '@material-ui/core/TableRow';
// import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
// import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { border } from '@material-ui/system';
// import { makeStyles } from '@material-ui/core/styles';


const styles = {text: {size: '8px' },
    card: {
        width: '50%',
        margin: '5px',
        padding: '5px',
        background: 'transparent',
       
       
        
    },
    paper: {
        background: 'transparent',
        color: 'white',
        width: '50%',
        border: '1px solid white',
        padding: '5%'
    }
}

class TripItem extends Component {

    
  
    handleClickDay = () =>{
        console.log('button');
        this.props.dispatch({ type: 'FETCH_DAY_DETAILS', payload: this.props.singleTrip.id })
        
        this.props.history.push({
            pathname: '/day',
            state: this.props.singleTrip,
        })
    }
    


    render() {
      
        return (
            <div>
                <h2>{this.props.tripName}</h2>
                
            <Grid container spacing={6}>

        <Grid item xs={6}>
          <Paper style={styles.paper} onClick={this.handleClickDay}>
           
           
          {this.props.singleTrip.day.substring(5, 7) + "/" + this.props.singleTrip.day.substring(8, 10) + "/" + this.props.singleTrip.day.substring(0, 4)}
          <br/>
          <br/>
          {this.props.singleTrip.city}
          <br/>
          <br/>
          Daily Comments:  
          <br/>
          {this.props.singleTrip.day_comments}</Paper>
        </Grid>
        
      </Grid>
               
                {/* <TableRow >
                    {/* <Button size="small" onClick={this.handleClickDay}>
                             View Day
                         </Button> */}
                    {/* <TableCell onClick={this.handleClickDay}>{this.props.singleTrip.day.substring(5, 7) + "/" + this.props.singleTrip.day.substring(8, 10) + "/" + this.props.singleTrip.day.substring(0, 4)}</TableCell>
                    <TableCell onClick={this.handleClickDay}>{this.props.singleTrip.city}</TableCell>
                   
                    <TableCell onClick={this.handleClickDay}>{this.props.singleTrip.day_comments}</TableCell>
                
                </TableRow> */} 
                </div>
               
                
                
              
           
        )
    }
}

export default connect()(TripItem);