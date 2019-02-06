import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BackIcon from '@material-ui/icons/ArrowBack'
import {connect} from 'react-redux'
import {compose} from 'recompose'
import {update_Nav} from '../Redux/Action/Action'
import Slide from "@material-ui/core/Slide";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const styles = {
    borders :{
    borderBottom : "thin solid #c3c6c6",
    width: 200,
    borderRight: "thin solid #c3c6c6",
    position:"absolute",
    zIndex:1

},
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};




class Nav extends Component {

    constructor()
    {
      super()
      this.state={
    
      }
    
    }
    menu()
    {
        const {update_Nav,nav} =this.props;
        nav ?this.props.update_Nav(false):this.props.update_Nav(true)
        
    }


    

render(){
    console.log("props++",this.props)
    
    
    const {classes,nav}=this.props;
    return(
        
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
      {!nav ? <IconButton onClick={()=>this.menu()} className={classes.menuButton} color="inherit" aria-label="Menu">
     <MenuIcon />
        </IconButton>
        :
        <IconButton onClick={()=>this.menu()} className={classes.menuButton} color="inherit" aria-label="Menu">
     <BackIcon />
        </IconButton>
        }
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Bilal Public School
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>


    <Slide direction="right" in={nav} >
    <List component="nav" className={classes.borders}>
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
    

    </Slide>
  </div>




  
    )
  
  }
}
  Nav.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps=(state)=>{
    return {nav : state.reducer.nav}
}
const mapDispatchToProps=(dispatch)=>{
    return {update_Nav:(data)=>dispatch(update_Nav(data))}

}


  export default compose(withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(Nav)