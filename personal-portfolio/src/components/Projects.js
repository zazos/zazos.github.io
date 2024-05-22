import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import vr_project from "../assets/img/vr_project.webp";
import news_classification from "../assets/img/news_classification.jpeg";
import movie_recommender from "../assets/img/movie_recommender.jpeg";
import greek_elections from "../assets/img/greek_elections.png";
import e_invoicing from "../assets/img/e_invoicing.jpeg";

export const Projects = () => {
    function ProjectCard({ title, imageSrc, githubLink, technologies, description }) {
        return (
            <div className='project'>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <img className='images' src={imageSrc} alt={title} />
                </a>
                <div className='project-info'>
                    <div className='project-title'>
                        <h2>{title}</h2>
                        <div className='liness'></div>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    </div>
                    <h3><span style={{ color: '#FF004F' }}>{technologies}</span></h3>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

    return (
        <div id='Projects'>
            <h1 className='title'>
                My Projects <span style={{ color: '#FF004F' }}></span>{' '}
            </h1>
            <div className='projects-wrapper'>
                <ProjectCard
                    title="VR Escape Room"
                    imageSrc={vr_project}
                    githubLink="https://github.com/zazos/QuantumEscape"
                    technologies="Unity, C#, Blender, Audacity"
                    description="Mind-Bending Puzzles and Challenges: Immerses players in a virtual quantum world, where mind-bending 
                    puzzles await to be solved in order to escape. Cutting-edge technology, Quantumscape offers players an
                    unparalleled gaming experience."
                />

                <ProjectCard
                    title="Multiclass Text Classification for News Articles"
                    imageSrc={news_classification}
                    githubLink="https://github.com/zazos/News-Article---Text-Classification"
                    technologies="Python, TensorFlow, Keras, Pandas, Numpy, Scikit-learn"
                    description="SVM, Random Forests, BoW, SVD: Initially used these classic classification methods 
                    and features for text classification. Then, developed an LSTM neural network using Data Generators and GPU 
                    acceleration to achieve higher accuracy, precision, and recall, surpassing the benchmark."
                />

                <ProjectCard
                    title="Movie Recommendation System"
                    imageSrc={movie_recommender}
                    githubLink="https://github.com/zazos/Movie-Recommendation-System"
                    technologies="Python, BigData"
                    description="The project involves developing a movie recommendation system using the MovieLens dataset, 
                    incorporating various algorithms such as collaborative filtering, content-based, and hybrid methods. 
                    It also employs four similarity metrics—Jaccard, Dice, Cosine, and Pearson—to calculate user or item similarities, 
                    mirroring the complexity of systems used by platforms like Netflix and Hulu."
                />

                <ProjectCard
                    title="Deep Learning for NLP - Greek Elections"
                    imageSrc={greek_elections}
                    githubLink="https://github.com/zazos/Sentiment-Analysis---Greek-Elections"
                    technologies="Python, PyTorch, Pandas, Numpy, Scikit-learn, Word Embeddings, Neural Networks"
                    description="The project aims to build a sentiment analysis model for tweets in Greek about the Greek Elections, 
                    classifying them as negative, neutral, or positive using ML and NLP techniques, including General Neural Networks, 
                    RNNs, and BERT Transformers, optimized with the Optuna framework."
                />

                <ProjectCard
                    title="e-Invoicing Full Stack Development"
                    imageSrc={e_invoicing}
                    githubLink="https://github.com/zazos"
                    technologies="Ruby on Rails, Ruby, CSS, JavaScript, HTML, Bootstrap CSS, Nokogiri, XML, Bitbucket, Git"
                    description="Developed eInvoicing and ePayments features for a startup using Ruby on Rails, 
                    focusing on user-friendly interfaces for XML document generation and ABN validation, enhancing user experience and accuracy. 
                    Achievements include implementing PEPPOL standards, ABN validation, and thorough debugging for compliance and system integrity."
                />
            </div>
        </div>
    );
};
