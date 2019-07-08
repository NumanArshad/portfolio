import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PrimarySearchAppBar from './Appbar'
import Button from '@material-ui/core/Button';
import Pic from './Pic.jpg'
import RecipeReviewCard from './Cards'
import TeamCard from './Teamcard'
import { Input } from '@material-ui/core';
import PaperSheet from './Contact'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const styles = theme => ({
    root: {
      
        paddingTop: '70px'
      },
     
      imgRoot: {
        display: 'flex',
        justifyContent: 'left',
        marginLeft: '100px',
      }, icon: {
        color: "#6A1B9A",
    
      },
      fontC: {
        font: 'Arial Bold',
      },
      pap: {
        zIndex: -1
      },
    
       img: {
    //    width: '100%',
//      height: "75%",
  minHeight:280,
        backgroundImage: `url(${Pic})`,
        backgroundSize: 'cover',
        backkgroundRepeat: 'no-repeat',
        paddingBottom: '3%'
      },
      textColor: {
        color: 'white',
      },
    
      projectH: {
      //  marginTop:30,
        // [theme.breakpoints.down('sm')]: {
        //  marginTop:10
        // },
      },
});

const projectList=[
{img:Pic,title:'',detail:''},
{img:Pic,title:'yahoo development',detail:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},
{img:Pic,title:'yahoo development',detail:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},
{img:Pic,title:'',detail:''},
{img:Pic,title:'',detail:''},
{img:Pic,title:'yahoo development',detail:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},
]
const teamList=[
  {img:Pic,name:'numan arhad',skill:'software engineer',contact:'+92-3086415241',email:'numanuet311@gmail.com'},
  {img:Pic,name:'numan arhad',skill:'software engineer',contact:'+92-3086415241',email:'numanuet311@gmail.com'},
  {img:Pic,name:'numan arhad',skill:'software engineer',contact:'+92-3086415241',email:'numanuet311@gmail.com'},
  {img:Pic,name:'numan arhad',skill:'software engineer',contact:'+92-3086415241',email:'numanuet311@gmail.com'}
]
class Container extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    recipient:'',sender:'',subject:'',text:''
  };
 this.scrollToTop=this.scrollToTop.bind(this);

  }
  scrollToTop() {
    scroll.scrollToTop( {duration: 800,
             delay: 0,
           smooth: 'easeInOutQuart'
    });
  }

  sendEmail = ()=> {
    const { email } = this.state;
    alert("call");
    var user ={'EmailAddress':'afshanarsha2783@gmail.com'}
    var ROOT_URL='http://localhost:3301';
      const postRequest =  fetch(ROOT_URL+'/api/Accounts/sendEmail', {
            method: 'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
             mode: 'cors',
            body: JSON.stringify(user)
       }).then((response)=>{
        alert('********'+response.status);
        response.json().then(data=>{
          alert("data:......" + data.sendStatus )
        if(data.sendStatus=='failure'){
          alert("failure");
        }
        else if(data.sendStatus=='emailsent') {
          alert("send success");
    
        }
     
    
         });
       })
       
  //emailServer.handleEmail('naumanm355@gmail.com');
  }


showProject(project){

return <Grid item   sm={6} xs={12}><RecipeReviewCard project={project} /></Grid>
  }
  showTeam(team){

    return <Grid item  md={3}  sm={6} xs={12}><TeamCard team={team} /></Grid>
      }
render() {
    const { classes } = this.props;

    return (
      <div style={{overflow:'hidden'}}>
     
            <PrimarySearchAppBar />
        {/* https://drive.google.com/uc?id=1It0ixxcBA7TbL22KqpZcLXnyOYW2UI1O show  */}
          {/* https://drive.google.com/uc?export=download&id=1It0ixxcBA7TbL22KqpZcLXnyOYW2UI1O download link  */}
    {/* <img src="https://drive.google.com/uc?id=1It0ixxcBA7TbL22KqpZcLXnyOYW2UI1O" style={{width:100,height:100}} /> */}
    <Grid container justify="center" className={classes.img}>



<Grid item style={{marginTop:30,marginBottom:10}} >

  <Typography variant="display3" align="center" style={{ color: 'white', fontWeight: 'bold' }} gutterBottom>
   Welcome to Rising Pearls
</Typography>
  
  <Typography variant="display1" className={classes.fontC} size="small"  gutterBottom align="center" style={{ color: 'white' }}>
    Full Stack Developer
</Typography>
  <Typography variant="headline" align="center" style={{ color: 'white' }} >
    (I Have experience in Software developement, 
</Typography>
  <Typography variant="headline" align="center" style={{ color: 'white' }}>
  android app development and web developement)
</Typography>
 

</Grid>
</Grid> 



<Typography variant="display1" align="center" style={{color:'black',fontWeight:'bold',marginTop:10}}
id="projects" >Projects</Typography>



 <Grid container  style={{padding:20}} spacing={24}
 >
 {
   projectList.map((project)=>{
     return this.showProject(project);
   })
 }
{/* <Grid item lg={6} md={6} sm={12} xs={12}><RecipeReviewCard /></Grid>
<Grid item lg={6} md={6} sm={12} xs={12}><RecipeReviewCard /></Grid>
<Grid item lg={6} md={6} sm={12} xs={12}><RecipeReviewCard /></Grid>
<Grid item lg={6} md={6} sm={12} xs={12}><RecipeReviewCard /></Grid> */}
</Grid> 
<Grid item className={classes.projectH} > 
<Typography variant="display1" align="center" style={{color:'black',fontWeight:'bold'}}
id="team">Team</Typography>
</Grid>
<Grid container  style={{padding:20}} spacing={24}
>
 {
   teamList.map((team)=>{
     return this.showTeam(team);
   })
 }
</Grid> 

<Typography variant="display1" align="center" style={{color:'black',fontWeight:'bold',marginBottom:10}} id="contacts">
Contacts</Typography>
<Grid container direction="row"  style={{padding:20
  //,backgroundColor:'black'
  }} spacing={24}>
<Grid item md={6} xs={12} style={{backgroundColor:'red'}}>
<Typography variant='title' align="left" style={{color:'black'}} gutterBottom>Address : </Typography>
<Typography variant="heading" align="left" style={{color:'black'}}>Shopping center staff houses engineeringuniverity lahore,Lahore,Punjab,Pakistan</Typography>
<Typography variant='title' align='left' style={{color:'black'}} gutterBottom>Phone : </Typography>
<Typography variant='heading' align='left' style={{color:'black'}} gutterBottom>+92-3086415241 </Typography>
<Typography variant='title' align='left' style={{color:'black'}} gutterBottom>Email : </Typography>
<Typography variant='heading' align='left' style={{color:'black'}} gutterBottom>numanuet311@gmail.com : </Typography>


</Grid>
 <Grid item md={6} xs={12} style={{backgroundColor:'yellow'}}>

<PaperSheet />
</Grid> 

</Grid>

<button onClick={()=>this.sendEmail()}>send</button>
 <button onClick={()=>this.scrollToTop()}>top</button> 
<footer style={{backgroundColor:'blue',color:'white',padding:12}}>
<Typography variant="headinng" align="center"  >
@Copyright 2019 RisingPearls</Typography></footer>
</div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);
