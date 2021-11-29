import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Heder from '../Heder/Heder';
import MyArticle from '../MyArticle/MyArticle';
import MyWork from '../MyWork/MyWork';
const Headers = () => {
    return (
        <div>
            <Heder></Heder>
            <MyWork></MyWork>
            <AboutMe></AboutMe>
            <MyArticle></MyArticle>
            <Contact></Contact>
        </div>
    );
};

export default Headers;