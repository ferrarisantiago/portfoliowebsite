import React from 'react';
import { makeStyles } from '@mui/styles';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import MyWork from './components/MyWork';
import Contact from './components/Contact';

const useStyles = makeStyles((theme) =>({
  root: {

  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar></NavBar>
      <About title="About me" id="about" dark={true}></About>
      <Skills title="My coding Journey" id="skills" dark={false}></Skills>
      <MyWork title="My work" id="MyWork" dark={true}></MyWork>
      <Contact title="Get in touch" id="Contact" dark={false}></Contact>
    </div>
  );
}

export default App;
