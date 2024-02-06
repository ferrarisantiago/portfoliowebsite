import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import dataMyWork from '../dataMyWork';

function MyWork({title,dark,id}) {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
        <Typography variant='h3'>{title}</Typography>
        <Grid container className= {classes.grid}>
          {
            dataMyWork.map(({title,image,link},index)=>(
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia image= {image} titulo='CartName' className={classes.carName} />
                  <CardContent>
                    <Link href={link} color= 'primary' target='blank' rel='noopener noreferrer'>
                      {title}
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) =>({
  section: {
      minHeight: "100vh",
  },
  sectiondark:{
      background:"#333",
      color: "#fff",
  },
  sectioncontent:{
    maxWidth: "80vw",
    margin: "0 auto",
    padding: 3,
  },
  grid:{
    marginTop: 10,
  },
  card:{
    maxWidth: 330,
    minHeight: 250,
    margin: 3,
  },
  carName:{
    height: 0,
    paddingTop: "56.25%",
  }
}));

export default MyWork
