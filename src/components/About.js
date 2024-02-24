import { makeStyles } from "@material-ui/core/styles";
import {Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import aboutme from '../components/images/SoftDev.jpg';
import pdf from '../components/images/Resume_Ferrari_Santiago.pdf';
import Typewriter from 'typewriter-effect';
import React, { useState} from 'react';

const About = ({title,dark,id}) => {
    const classes = useStyles();
    const [showButton, setShowButton] = useState(false);

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant='h3'>{title}</Typography>
        <Card className={classes.Card}>
          <CardMedia image={aboutme}  className={classes.CardMedia} title="picture">
          </CardMedia>
          <CardContent className={classes.content}>
            <Typewriter
                options={{
                  delay: 40,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<span style="color: tomato; font-weight: bold; font-size: 2rem;">Hello, I am Santiago!</span>')
                    .pauseFor(1000)
                    
                    .callFunction(() => {
                      setShowButton(true);
                    })
                    .start();
                }}
              />
              <Typography variant='h7' color="textSecondary">
                <br></br>
                  A fantastic software developer with 6 years of experience in creating innovative technological solutions. <br></br>
                  I specialize in specific programming languages, such as C# and PHP,
                  and have experience working <br></br> with specific technologies or frameworks, like React and Angular.
              </Typography>
          </CardContent>

          {showButton && (
          <CardActions>
            <button variant="contained" className={classes.pdfbutton}>
              <a href={pdf} download>
              Download resume
              </a>
            </button>
          </CardActions>
          )}
        </Card>
      </div>
  </div>
  )
}

const useStyles = makeStyles((theme) =>({
    section: {
        minHeight: "90vh",
    },
    sectiondark:{
        background:"#333",
        color: "#fff",
    },
    sectioncontent:{
      maxWidth: "70vw",
      margin: "0 auto",
    },
    Card:{
      height: "70vh",
      display: "flex",
      marginTop: "10px",
      position: "relative",
    },
    CardMedia:{

      [theme.breakpoints.down("sm")]:{
        display: "none",
      },
      width:"200px",
      height: "auto",
      borderRadius: "10px",
      margin: 2,
    },
    typewriterStyle: {
      fontSize: '2rem',
      color: 'tomato',
      fontWeight:"700px",
    },
    pdfbutton:{

      [theme.breakpoints.down("sm")]:{
        bottom:10,
        position:"Absolute",
        right:"4rem",
      },
      backgroundColor: "tomato",
      padding:5,
      "&: hover":{
        backgroundColor: "#fff"
      },
      "& a":{
        color: "#fff",
        fontWeight: 900
      },
      "& a:hover":{
        color: "Black",
      },
    },
    content:{
      "& h7":{
        marginTop: "10px",
        fontSize:"10rem",
      },
    }
  }));

export default About
