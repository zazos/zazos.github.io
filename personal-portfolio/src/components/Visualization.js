import React from 'react';
import TrackVisibility from 'react-on-screen';
import dataVis from '../assets/img/data_vis.jpeg';

export const Visualization = () => {
    return (
        <section className='visualization-section' id='Visualization'>
            <h1 className='visualization-title'>
                Visualization<span style={{ color: '#FF004F' }}></span>
            </h1>
            <div className='section-divider'></div>
            <div className='content-wrapper'>
                <div className='visualization-text'>
                    <p>
                        The selected infographic provides a comprehensive and current overview of the international aid landscape in support of Ukraine,
                        amidst ongoing geopolitical tensions.
                    </p>
                    <br />
                    <p>
                        I chose this graphic because it encapsulates not only the quantitative data about the aid provided
                        by different countries and entities but also presents a clear visual hierarchy that immediately draws attention to the scale of contributions.
                        The distinction between financial, humanitarian, and military aid is particularly informative, allowing for a nuanced understanding of the
                        multifaceted support extended to Ukraine.
                    </p>
                    <br />
                    <p>
                        This infographic stands out for its ability to convey complex information in an accessible manner,
                        reflecting the global efforts to support a nation in a time of crisis. The data, sourced from the IfW Kiel Ukraine Support Tracker,
                        covers a significant period, providing a detailed account of aid from January 24, 2022, to January 15, 2024.
                    </p>
                    <p>
                        For more information, you can visit the <a className='linked-in' href="https://ifw-kiel.de/topics/war-against-ukraine/ukraine-support-tracker/" target="_blank" rel="noopener noreferrer">IfW Kiel Ukraine Support Tracker</a>.
                    </p>
                </div>
                <div className='right-section'>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={dataVis} alt="Header Img" className="photo-frame" />
                            </div>
                        }
                    </TrackVisibility>
                </div>
            </div>
        </section>
    );
};
