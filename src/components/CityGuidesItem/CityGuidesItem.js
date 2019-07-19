import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { TextField } from '@material-ui/core';



class CityGuidesItem extends Component {

    

    render() {
        return (
            <>
                
                    <p >{this.props.guideList.guide_name}</p>
                    {/* <p >{this.props.guideList.information}</p> */}
                    
                   
                        
                
            </>
        )
    }
}

export default connect()(CityGuidesItem);