import { Container, Typography, Card, CardContent, CardActionArea, CardMedia } from "@mui/material";
import { Row, Col } from 'react-bootstrap';
import FeedbackData from "./FeedbackData";


const Feedback = () => {

    return (
        <>
            <Container style={{ paddingBottom: '8rem' }}>
                <Row>
                    <Col xs lg="5">
                        <h1 style={{color: '#f45828', paddingBottom: '5rem'}}>
                            Some Possitive Feedback That Encourage Us
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {
                        FeedbackData.map(
                            (feedback, data) => (
                                <Col key={data} lg={4} md={6} sm={6}>
                                    <Card className='mb-3 mt-3' sx={{ maxWidth: 345, border: 'none' }}>
                                        <CardActionArea>
                                            <Row>
                                                <Col xs lg="4">
                                                    <CardMedia
                                                        component="img"
                                                        image={feedback.image}
                                                    />
                                                </Col>
                                                <Col xs lg="8" style={{ color: '#f45828' }}>
                                                    <Typography gutterBottom variant='h5' component="div">
                                                        {feedback.name}
                                                    </Typography>
                                                    <Typography gutterBottom variant='h6' component="div">
                                                        {feedback.jobTitle}
                                                    </Typography>
                                                </Col>
                                            </Row>
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div">
                                                    {feedback.text}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Col>
                            )
                        )
                    }
                </Row>
            </Container>
        </>
    );

};

export default Feedback;