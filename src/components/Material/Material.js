// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import axios from 'axios';
// import TableBody from '@material-ui/core/TableBody';
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import TableCell from '@material-ui/core/TableCell'
// import TableRow from '@material-ui/core/TableRow'
// // import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// // import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import DayItem from '../DayItem/DayItem'
// import Dialog from '@material-ui/core/Dialog';


// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
// import Typography from '@material-ui/core/Typography';
// // import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Chip from '@material-ui/core/Chip';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
//   },
//   icon: {
//     verticalAlign: 'bottom',
//     height: 20,
//     width: 20,
//   },
//   details: {
//     alignItems: 'center',
//   },
//   column: {
//     flexBasis: '33.33%',
//   },
//   helper: {
//     borderLeft: `2px solid ${theme.palette.divider}`,
//     padding: theme.spacing(1, 2),
//   },
//   link: {
//     color: theme.palette.primary.main,
//     textDecoration: 'none',
//     '&:hover': {
//       textDecoration: 'underline',
//     },
//   },
// }));
// const classes = useStyles();

// class Material extends Component {

  

    
//     render() {
//         return (
//           <div className={classes.root}>
//           <ExpansionPanel defaultExpanded>
//             <ExpansionPanelSummary
//               // expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1c-content"
//               id="panel1c-header"
//             >
//               <div className={classes.column}>
//                 <Typography className={classes.heading}>Location</Typography>
//               </div>
//               <div className={classes.column}>
//                 <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
//               </div>
//             </ExpansionPanelSummary>
//             <ExpansionPanelDetails className={classes.details}>
//               <div className={classes.column} />
//               <div className={classes.column}>
//                 <Chip label="Barbados" onDelete={() => {}} />
//               </div>
//               <div className={clsx(classes.column, classes.helper)}>
//                 <Typography variant="caption">
//                   Select your destination of choice
//                   <br />
//                   <a href="#sub-labels-and-columns" className={classes.link}>
//                     Learn more
//                   </a>
//                 </Typography>
//               </div>
//             </ExpansionPanelDetails>
//             <Divider />
//             <ExpansionPanelActions>
//               <Button size="small">Cancel</Button>
//               <Button size="small" color="primary">
//                 Save
//               </Button>
//             </ExpansionPanelActions>
//           </ExpansionPanel>
//         </div>
//         );
//     }
// }



// export default connect()(Material);