import PropTypes from 'prop-types'; // Importing PropTypes
import { Container, Row, Col, Image, Alert } from 'react-bootstrap';

import errorImage from './assets/error-image.jpg'; // Example image path

const ErrorHandler = ({ message, imgSrc = errorImage }) => {
    return (
        <Container className="mt-5 text-center">
            <Row className="justify-content-center align-items-center">
                <Col xs={12} md={6}>
                    {/* Error Message */}
                    <Alert variant="danger">
                        <h3>Something Went Wrong</h3>
                        <p>{message}</p>
                    </Alert>
                </Col>
                <Col xs={12} md={4}>
                    {/* Error Image */}
                    <Image 
                        src={imgSrc} 
                        alt="Error Illustration" 
                        fluid 
                        rounded 
                        className="shadow-sm"
                    />
                </Col>
            </Row>
        </Container>
    );
};

// Prop validation for message
ErrorHandler.propTypes = {
    message: PropTypes.string.isRequired, // Message must be a string and is required
    imgSrc: PropTypes.string, // Image source should be a string, not required
};

export default ErrorHandler;
