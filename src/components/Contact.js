import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Paper, TextField, Typography } from '@mui/material';

function Contact({title,dark,id}) {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant='h3'>{title}</Typography>
        <Paper className={classes.paper}>
          <Typography variant="h5">CONTACT ME</Typography>
          <form className={classes.form} autoComplete='off' >
            <TextField label='Your name'/>
            <TextField label='Your e-mail'/>
            <TextField
                label="Write your message"
                multiline
                rows={4}
                fullWidth
            />
          </form>
          <Button variant='contained'>Submit</Button>
        </Paper>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) =>({
  section: {
      minHeight: "100vh",
      justifyContent:'flex-start',
      
  },
  sectiondark:{
      background:"#333",
      color: "#fff",
  },
  sectioncontent:{
    maxWidth: "80vw",
    margin: "0 auto",
    flexDirection: 'column',
    display: 'flex',
    justifyContent:'center',
  },
  paper:{
    marginTop: 6,
    fontSize:'1.2rem',
    maxWidth:'550px',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'space-between',
    padding: 6,
    "& button":{
      background:'tomato',
      fontWeight: 800,
      fontSize:'1.1rem',
      marginTop: 4
    }
  },
  form:{
    background:'#F2F1F1',
    display: 'flex',
    flexDirection:'column',
    "& input":{
      padding:15,
      margin:2,
    }
  }
}));

export default Contact
