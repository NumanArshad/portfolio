import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  textField: {
    borderRadius: 4,
    marginTop: theme.spacing.unit*4,
    marginLeft: theme.spacing.unit*4,
    marginRight: theme.spacing.unit*4,
    fontSize: 16,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    padding: '10px 12px',
  },
  margin: {
    //margin: theme.spacing.unit,
    width:'100%',
    
  },
  marginn: {
    margin: theme.spacing.unit,
    width:100
  },
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    marginTop: theme.spacing.unit*4,
    marginLeft: theme.spacing.unit*4,
    marginRight: theme.spacing.unit*4,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
     // borderColor: '#80bdff',
     // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        {/* <Typography variant="h3" style={{textAlign:'center'}}>Contacts</Typography> */}
        <Grid container direction="row" style={{padding:30}}>
        {/* <Grid item xs={6} style={{marginTop:50}}>
        <Grid container direction="column" style={{alignContent:'center'}}>
        <Grid item>
        <Typography variant="display1">Address:</Typography>
        <Typography variant="subheading" style={{color:'black'}}>
        University of Engineering and Technology Lahore, Lahore,<br />
        Punjab, Pakistan
        </Typography>
        </Grid>
        <Grid item>
        <Typography variant="display1">Phone:</Typography>
        +92-304-4373759<br />+92-308-6415241
        </Grid>
        <Grid item>
        <Typography variant="display1">Email:</Typography>
        naumanm355@gmail.com<br/>numanuet311@gmail.com
        </Grid>
        </Grid>
        </Grid> */}
        <Grid item xs={12} style={{backgroundColor:'#efebe9'}}>
        <FormControl className={classes.margin}>
        <InputBase id="bootstrap-input" placeholder="First Name" required='true' margin="normal"
          classes={{
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          }}
        />
        <InputBase id="bootstrap-input" placeholder="E-mail Adress" required='true' type="email" margin="normal"
          classes={{
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          }}
        />
        <InputBase id="bootstrap-input" placeholder="Phone Number"required='true' type="number" margin="normal"
          classes={{
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          }}
        />
        <TextField
          multiline rows="4" placeholder="Message" className={classes.textField} margin="normal"
        />
      </FormControl>
      
      <Fab variant="extended" color="primary" aria-label="Add" className={classes.marginn}>Send</Fab>
        </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';

// const styles = theme => ({
//   fab: {
//     margin: theme.spacing.unit,
//   },
//   extendedIcon: {
//     marginRight: theme.spacing.unit,
//   },
// });

// function FloatingActionButtons(props) {
//   const { classes } = props;
//   return (
//     <div>
//       <Fab color="primary" aria-label="Add" className={classes.fab}>
//         <AddIcon />
//       </Fab>
//       <Fab color="secondary" aria-label="Edit" className={classes.fab}>
//         <Icon>edit_icon</Icon>
//       </Fab>
//       <Fab variant="extended" aria-label="Delete" className={classes.fab}>
//         <NavigationIcon className={classes.extendedIcon} />
//         Extended
//       </Fab>
//       <Fab disabled aria-label="Delete" className={classes.fab}>
//         <DeleteIcon />
//       </Fab>
//     </div>
//   );
// }

// FloatingActionButtons.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(FloatingActionButtons);