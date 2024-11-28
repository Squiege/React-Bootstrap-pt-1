import welcomeImage from './assets/welcome-img.jpg';

import { Button, Card } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import styles from './Homepage.module.css'; 

const Function = () => {
    return (
        <div>
            <NavigationBar />
            <div className={styles.homepage}>
                <Card className='border border-success shadow-sm rounded'>
                    <Card.Header as='h4'>Button Header</Card.Header>
                    <Card.Title>Button Title</Card.Title>
                    <Card.Body>
                        <Card.Text>
                            An example of a Card, Borders, and Shadows!
                        </Card.Text>
                        <Button variant="primary" className='shadow-lg'>
                            Shop Now!
                        </Button>
                    </Card.Body>
                </Card>
                <img
                    src={welcomeImage} 
                    alt="Welcome"
                    className={styles['responsive-img']} 
                />
            </div>
        </div>
    );
};

export default Function;

