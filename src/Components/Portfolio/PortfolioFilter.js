import { Container, Card, CardActions, CardContent, Typography, CardActionArea } from "@mui/material";
import { Col, Row,Image } from "react-bootstrap";
import PortfolioData from './PortfolioData';



const PortfolioFilter = () => {

    return (
        <>
            <Container style={{paddingBottom: '8rem'}}>
                <Row style={{paddingBottom: '5rem'}}>
                    <Col xs lg="9">
                        <Col sm lg="6">
                            <h1 style={{ color: '#f45828' }}>
                                What Service You will Get from Me!
                            </h1>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    {
                        PortfolioData.map((portfolio, serviceList) => (
                            <Col key={serviceList} lg={3} md={6} sm={12}>
                                <Card className='mb-3' style={{ border: 'none' }} variant="outlined">
                                    <CardActionArea>
                                        <Image
                                            src={portfolio.image}
                                        />
                                        <CardContent className='p-3' style={{ color: '#f45828' }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {portfolio.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {portfolio.text}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    </CardActions>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );

};

export default PortfolioFilter;