import { Fragment } from "react";
import ContactTab from "../Home/ContactTab";
import MessageTab from "../Home/MessageTab";
import TalkPage from "../Home/TalkPage";
import Feedback from "../Home/Feedback";
import AboutBanner from './AboutBanner';
import AboutText from "./AboutText";


const About = () => {

    return (
        <Fragment>
            <AboutBanner />
            <AboutText />
            <TalkPage />
            <ContactTab />
            <Feedback />
            <MessageTab />
        </Fragment>
    );

};

export default About;