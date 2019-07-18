import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
// import TableBody from '@material-ui/core/TableBody';
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import TableCell from '@material-ui/core/TableCell'
// import TableRow from '@material-ui/core/TableRow'
// // import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import DayItem from '../DayItem/DayItem'
// import Dialog from '@material-ui/core/Dialog';
// import { whileStatement } from '@babel/types';
// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'


class NewGuide extends Component {

    state = {
        guide: {
            name: '',
            information: '',
        }
    }

    handleClick = () => {
        console.log('click working');

    }
    handleChangeInformation = (propertyName) => event => {
        this.setState({
            guide: {
                ...this.state.guide,
                [propertyName]: event.target.value,
            }
        });
    }

    handleChangeName = (propertyName) => event => {
        this.setState({

            guide:{
                ...this.state.guide,
                [propertyName]: event.target.value,
            }
        })
    }


    render() {
        return (
            <div>
                <h1>new guide</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <TextField label="City Name"
                type="text"
                value={this.state.guide.name}
                onChange={this.handleChangeName('name')}
                
                ></TextField>
                <Button stlye={{ float: 'right' }} onClick={this.handleClick}>Add Guide</Button>
                <TextField
                    fullWidth
                    multiline
                    rows='100'
                    label="Input Guide Information"
                    type="text"
                    value={this.state.guide.information}
                    onChange={this.handleChangeInformation('information')}


                ></TextField>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(NewGuide);