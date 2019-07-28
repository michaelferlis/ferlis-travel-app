import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CityGuidesItem from '../CityGuidesItem/CityGuidesItem'


import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'


class CityGuides extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_GUIDES'})
    
  }
  getDashboard=()=> {
    this.props.history.push(`/newguide`)
  }

  getGuide=()=> {
    this.props.history.push(`/city`)
  }

  render() {
    return (
      <div>
        <h1>City Guides</h1>
        
        <pre>{JSON.stringify(this.props.reduxState.tripReducers.guideList)}</pre>
       
        {this.props.reduxState.tripReducers.guideList.map(guideList => <CityGuidesItem history={this.props.history} key={guideList.guide_id} guideList={guideList}/>)}  
        
      
          <Button onClick={this.getDashboard}>Create New Guide</Button>


      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState
});

export default connect(mapStateToProps)(CityGuides);
