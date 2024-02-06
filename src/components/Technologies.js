import React from 'react'
import { makeStyles } from '@mui/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Paper, Typography } from '@mui/material';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import csharp from '../components/images/cs.png';
import job from '../components/images/jobOffer.jpeg';
import AngJs from '../components/images/AngJs.webp';
import ReactIcon from '../components/images/React.png';
import university from '../components/images/university.png';
import freelancer from '../components/images/ItWork.png';
import study from '../components/images/study.png';

const Technologies = () => {
    const classes = useStyles();

    const skills = [
        {
            year: "2013",
            title: "Bachelor's Degree in Information Systems",
            icon:university
        },
        {
            year: "2013",
            title: "Working as an IT freelancer",
            icon:freelancer
        },
        {
            year: "2014",
            title: "Learning Genexus with C#",
            icon:csharp
        },
        {
            year: "2015",
            title: "Working at Valkimia for the client Brinks",
            icon:job
        },
        {
            year: "2017",
            title: "Learning JavaScript and Angular", 
            icon:AngJs
        },
        {
            year: "2023",
            title: "Diploma of Information Technology (Web Development).",
            icon:study
        },
        {
            year: "2023",
            title: "Learning React and MongoDB.",
            icon:ReactIcon
        },
    ]
  return (
    <div>
      <Timeline align="left" >
        {
            skills.map(({year,title,icon},index) =>(
               <TimelineItem key={index} timelineItem  className={classes.timelineItem}>
                    <TimelineOppositeContent className={classes.timelineOppositeContent}>
                        <Typography variant='h6' color="textSecondary">
                            {year}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <img src={icon} alt='img' className={classes.customIcon}/>
                    <TimelineConnector/>
                    </TimelineSeparator>
                    <timelineContent className={classes.timelineContent}>
                        <Paper elevation={6} className={classes.paper}>
                            <Typography className={classes.titleText}>
                                {title}
                            </Typography>
                        </Paper>
                    </timelineContent>
               </TimelineItem> 
            ))
        }
      </Timeline>
    </div>
  )
}

const useStyles = makeStyles((theme) =>({

    customIcon:{
        width: "50px",
        margin: "0 auto",
        display: 'block',
    },

    timelineOppositeContent: {
        
        flex: 0.5,
        padding: '0 16px'
    },

    timelineContent: {
        flex: 3,
        textAlign: 'left'
    },

    paper:{
        padding: "3px 15px",
        maxWidth:"400px",
    },
  }));

export default Technologies
