import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/personal_photo_profile.jpeg';

export const About = () => {
    const languages = [
        'C',
        'Ruby',
        'Ruby on Rails',
        'HTML/CSS',
        'React',
        'Github/Git',
        'SQL',
        'Python',
        'C#',
        'Unity'
    ];

    const learning = [
        'Machine Learning',
        'Tensor Flow',
        'PyTorch',
        'Keras',
        'NLP'
    ];

    return (
        <section className='about-section' id='About'>
            <h1 className='about-title'>
                About<span style={{ color: '#FF004F' }}></span>
            </h1>
            <div className='section-divider'></div>
            <div className='content-wrapper'>
                <div className='about-text'>
                    <p>
                        To start with, i am a hobbyist at heart, finding joy in the small wonders of life.
                        From the art of miniature painting and the expanses of TTRPGs, where i craft fantasty stories for me and my close friends,
                        to the world of coding, where i can bring my ideas to life. My other passions lie in the discipline of crossfit training and the tunes of the guitar.
                        Therefore, if i had to describe myself in a few words, i would say that i am a creative, a fitness enthusiast, and a music lover.
                    </p>
                    <br />
                    <p>
                        Starting my career in software development was a practical choice, leveraging my academic background as a bridge to my real passion.
                        Driven to deepen my expertise in Machine Learning and AI, I returned to academia for a Master's in Computer Science.
                        This journey from necessity to ambition highlights that our beginnings are just starting points; it's how we move forward that truly shapes us.
                    </p>
                    <br />
                    <div className='tools'>
                        <h1>
                            <FontAwesomeIcon icon={faFaceSmileWink} style={{ color: '#ff005a' }} />{' '}
                            Languages/Frameworks
                        </h1>
                        {languages.map((language, index) => (
                            <span key={index}>{language}</span>
                        ))}
                        <br />
                        <h1>
                            <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: '#ff005a' }} /> {' '}
                            Learning
                        </h1>
                        {learning.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </div>
                </div>
                <div className='right-section'>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} alt="Header Img" className="photo-frame" />
                            </div>
                        }
                    </TrackVisibility>
                </div>
            </div>
        </section>
    );
};
