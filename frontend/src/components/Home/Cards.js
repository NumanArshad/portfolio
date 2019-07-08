import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
const styles = theme => ({
  card: {
   width:'100%'
  },
  media: {
    height: 200,
  },
 });

class RecipeReviewCard extends React.Component {
  
 render() {
    const { classes } = this.props;
if(this.props.project.title==''){
    return ( <Card className={classes.card}>
     <CardMedia
          className={classes.media}
          image={this.props.project.img} //"/static/images/cards/paella.jpg"
          title="Paella dish"
        />
    </Card>)
}
else{
    return (
      <Card className={classes.card}>
       <CardContent>
            <Typography variant='body1' align='center' gutterBottom>{this.props.project.title}</Typography>
          <Typography component="p">
          {this.props.project.detail}
          </Typography>
        </CardContent>
     </Card>
    );
        }
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
