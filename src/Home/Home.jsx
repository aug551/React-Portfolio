import { Button, Carousel } from 'react-bootstrap';
import { ReactComponent as AboutLogo } from '../img/about.svg'
import { ReactComponent as ProjectLogo } from '../img/project.svg'
import { ReactComponent as ContactLogo } from '../img/contact.svg'
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <AboutLogo className='carousel-img' />
                    <Carousel.Caption>
                        <h5>About Me</h5>
                        <p>Read some information about my qualifications and credentials.</p>
                        <Link to='/about'>
                            <Button variant='secondary'>Learn More</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ProjectLogo className='carousel-img' />
                    <Carousel.Caption>
                        <h5>My Projects</h5>
                        <p>An overview of the projects that I've worked on.</p>
                        <Link to='/projects'>
                            <Button variant='secondary'>See Projects</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ContactLogo className='carousel-img' />
                    <Carousel.Caption>
                        <h5>My Contact Information</h5>
                        <p>Call me or send me a message.</p>
                        <Link to='/contact'>
                            <Button variant='secondary'>Contact Me</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Home;