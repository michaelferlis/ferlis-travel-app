import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux'
import { TextField } from '@material-ui/core';



class CityGuidesItem extends Component {

    getGuide=()=> {
        this.props.dispatch({ type: 'FETCH_GUIDE_DETAILS', payload: this.props.guideList.guide_id})
        this.props.history.push(`/city`)
      }

    render() {
        return (
            <>
            <pre>{JSON.stringify(this.props.reduxState)}</pre>
            <Card>
                 <pre>{JSON.stringify(this.props.reduxState)}</pre>
                    <Button onClick={this.getGuide}>{this.props.guideList.guide_name}</Button>
                    {/* <p >{this.props.guideList.information}</p> */}
                    
                    </Card>
                
            </>
        )
    }
}

export default connect()(CityGuidesItem);