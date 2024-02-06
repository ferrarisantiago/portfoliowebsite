import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Technologies from './Technologies';

function Skills({title,dark,id}) {
    const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant='h3'>{title}</Typography>
        <Technologies/>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) =>({
    section: {
        minHeight: "70vh",
    },
    sectiondark:{
        background:"#333",
        color: "#fff",
    },
    sectioncontent:{
      maxWidth: "80vw",
      margin: "0 auto",
      "& h3":{
        margin:10
      }
    }
  }));

export default Skills
