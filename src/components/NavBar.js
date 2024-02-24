import React, { useState } from 'react';
import {AppBar,Divider,List,ListItem,ListItemIcon,Toolbar} from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import logo from "../components/images/logo Ferrari Santiago.png";
import {Link,animateScroll as scroll} from "react-scroll";
import InfoIcon from '@mui/icons-material/Info';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PeopleIcon from '@mui/icons-material/People';
import ListIcon from '@mui/icons-material/List';
import { Drawer, IconButton } from '@material-ui/core';
import CancelIcon from '@mui/icons-material/Cancel';

const Links = [{
    id: "about",
    Text: "About me",
    icon: <InfoIcon fontSize='large'/>
  },
  {
    id: "skills",
    Text: "skill",
    icon: <LightbulbIcon fontSize='large'/>
  },
  {
    id: "MyWork",
    Text: "My work",
    icon: <HomeRepairServiceIcon fontSize='large'/>
  },
  /* {
    id: "Contact",
    Text: "Get in touch",
    icon: <PeopleIcon fontSize='large'/>
  }, */
]

function NavBar() {
  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const scrollToTop =() => {
    scroll.scrollToTop()
  }
  return (
    <>
    <AppBar position='sticky' className={classes.root}>
      <Toolbar className={classes.Toolbar}>
          <img 
            src={logo} 
            className={classes.logo} 
            alt="logo Ferrari Santiago"
            onClick={scrollToTop}
          />
          <List className={classes.menu}>
            {
              Links.map(({id,Text},index)=>(
                <Link key={index} 
                to={id} 
                spy={true} 
                activeClass='active' 
                smooth={true} 
                duration={500} 
                offset={-140}>
                {Text}
                </Link>
              ))
            }
          </List>
          <IconButton edge="end" size='large' className={classes.menubutton}>
            <ListIcon fontSize='large' onClick={() => setOpen(true)}>

            </ListIcon>
          </IconButton>
      </Toolbar>
    </AppBar>

     <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
        <IconButton onClick={()=>setOpen(false)}>
          <CancelIcon fontSize='large' className={classes.IconCancel}>
          </CancelIcon>
        </IconButton>
        <Divider>
        </Divider>
        {
              Links.map(({id,Text,icon},index)=>(
                <Link key={index}
                className={classes.sideBar}
                  to={id} 
                  spy={true} 
                  activeClass='active' 
                  smooth={true} 
                  duration={500} 
                  offset={-140}>
                  <ListItem component="h5">
                    <span> 
                      <ListItemIcon>
                        {icon}
                      </ListItemIcon>
                    </span> {Text}
                  </ListItem>
                </Link>
              ))
            }
     </Drawer>
  </>
  )
}

const useStyles = makeStyles((theme) =>({
  root:{
    "&.MuiPaper-root":{
      backgroundColor:"#fafafa" 
    },
    top:0,
    left:0,
    right:0,
    zIndex:999,
  },
  Toolbar: {
    display: "flex",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  logo: {
    height:"8.5rem",
    objectFit : "contain",
    "&:hover":{
      cursor:"pointer"
    }
  },
  menu:{
    [theme.breakpoints.down("sm")]:{
      display:"none",
    },
    "& a":{
      color: "#333",
      fontSize:"1.5rem",
      fontweight:"bold",
      marginLeft: "1.5rem",
    },
    "& a:hover":{
      cursor: "pointer",
      color:"tomato",
      borderBottom:"3px solid tomato",
    }
  },
  menubutton:{
    display:"none",
    [theme.breakpoints.down("sm")]:{
      display:"block",
      color:"tomato",
      position:"absolute",
      top:10,
      right:10,
    }
  },
  sideBar:{
    width:"40vw",
    fontSize: "1.2rem",
    color: "#333",
    fontWeight:"bold",

    "& h5:hover":{
      color:"tomato",
      cursor:"pointer",
    },
    [theme.breakpoints.down("sm")]:{
      with:"70vw",
    }
  },
  IconCancel:{
    color:"tomato",
    right:10,
    top:0,
  }
}));

export default NavBar
