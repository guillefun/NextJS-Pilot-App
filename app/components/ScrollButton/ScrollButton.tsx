'use client'

import { IconButton } from "@mui/material";
import SwipeDownTwoToneIcon from '@mui/icons-material/SwipeDownTwoTone';
import { useEffect, useState } from "react";
import styles from './ScrollButton.module.css';

export default function ScrollButton () {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return ( 
      <div className={styles.scrollButton} style={scrollY > 100
        ? { border: '2px solid white', borderRadius: '50%', boxShadow: 'rgb(255 255 255) 1px 1px 1px', position: "fixed", right: 'calc(((100% - 900px) / 6))', bottom: '5%' } : {display: 'none'}} onClick={() => scrollToTop()}>
        <IconButton aria-label="delete" size="large">
            <SwipeDownTwoToneIcon style={{color: 'white', fontSize: '48px'}}/>
        </IconButton>
      </div>  
  );
    /*return (
        <span style={{position: 'absolute', right: 0, bottom: 0}}> boton de ir parriba</span>
    )*/
}