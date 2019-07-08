import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    //...theme.mixins.gutters(),
   // paddingTop: theme.spacing.unit * 2,
    //paddingBottom: theme.spacing.unit * 2,
  },
  card: {
   width:'100%',
  // maxWidth:200
  },
  media: {
    height: 200,
  },
 });

class TeamCard extends React.Component {
  
 render() {
    const { classes } = this.props;

    return (
      // <Paper className={classes.root} elevation={1}>
      <Card className={classes.card}>
      <CardMedia
          className={classes.media}
          image={this.props.team.img} //"/static/images/cards/paella.jpg"
          title="Paella dish"
        />
       <CardContent>
            <Typography variant='body1' align='center' gutterBottom>{this.props.team.name}</Typography>
            <Typography variant='body1' align='center' gutterBottom>{this.props.team.skills}</Typography>
            <Typography variant='body1' align='center' gutterBottom>{this.props.team.contact}</Typography>
            <Typography variant='body1' align='center' gutterBottom>{this.props.team.email}</Typography>
          {/* <Typography component="p">
          {this.props.team.email}
          </Typography> */}
        </CardContent>
     </Card>
    //  </Paper>
    );
        
  }
}

TeamCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamCard);




// const styles = theme => ({
//   root: {
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit * 2,
//     paddingBottom: theme.spacing.unit * 2,
//   },
// });

// function PaperSheet(props) {
//   const { classes } = props;

//   return (
//     <div>
//       <Paper className={classes.root} elevation={1}>
//         <Typography variant="h5" component="h3">
//           This is a sheet of paper.
//         </Typography>
//         <Typography component="p">
//           Paper can be used to build surface or other elements for your application.
//         </Typography>
//       </Paper>
//     </div>
//   );
// }

// PaperSheet.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(PaperSheet);
