import React from 'react';
import {AboutMeWrapper,AboutMeText,AboutMePic} from './aboutMeElements';
import aboutMePic from "../../images/hero-img.png.webp";
import styles from "./aboutMe.module.css";
const AboutMe =()=> {
    return ( 
        <AboutMeWrapper>
           <AboutMeText>
            <span className={styles.textColor}>this is</span>
            <h1 className={styles.mainTitle}>Mohamad Mehdi Hajati</h1>
            <p className={styles.textColor}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eligendi vitae quis est culpa, id assumenda esse deserunt unde aliquam atque iste cupiditate harum animi dignissimos magnam incidunt non ducimus?</p>
            <button className={styles.mainButton}>Read More</button>
            </AboutMeText> 
            <AboutMePic><img src={aboutMePic} alt="about me pic" /></AboutMePic>
        </AboutMeWrapper>
     );
}

export default AboutMe;