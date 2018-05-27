import * as React             from 'react';
import './ProjectList.scss';
import {IoIosGridViewOutline} from 'react-icons/lib/io';

import {Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row} from 'reactstrap';
import {componentConstant}                                                                           from '../../utils/componentConstants';
import {SectionTitle}                                                                                from '../section-title/SectionTitle';

const content = require('../../assets/content.json');

export class ProjectList extends React.Component {

    render() {
        return (
            <div id="projects">
                <SectionTitle backgroundImage={componentConstant.sectionImages.projects}/>
                <h5> <IoIosGridViewOutline size={30} color="orange" /> Projects</h5>
                <Container>
                    <Row>
                        {content.map(item => this.card(item))}
                    </Row>
                </Container>
            </div>
        );
    }

    private card(item) {
        return (
            <Col className="spacer" sm="12" md="4">
                <Card className="h-100">
                    <CardImg top width="100%" src={item.images[0]} alt="OEBB"/>
                    <CardBody>
                        <CardTitle>{item.title}</CardTitle>
                        <CardSubtitle>{item.subtitle}</CardSubtitle>
                        <CardText>
                            <p dangerouslySetInnerHTML={{__html: item.shortDescription}}/>
                        </CardText>
                    </CardBody>
                    <CardFooter className="text-muted">
                        {item.updated}
                    </CardFooter>
                </Card>
            </Col>
        );

    }
}
