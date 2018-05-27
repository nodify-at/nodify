import * as React            from 'react';
import {IoIosEmailOutline}   from 'react-icons/lib/io';
import {Col, Container, Row} from 'reactstrap';
import {componentConstant}   from '../../utils/componentConstants';
import {SectionTitle}        from '../section-title/SectionTitle';

import './AboutUs.scss';
import {Contact}             from './Contact';
import {Legacy}              from './Legacy';
import {LocationMap}         from './LocationMap';

export class AboutUs extends React.Component {

    render(): React.ReactNode {
        return (
            <div id="about-us">
                <SectionTitle backgroundImage={componentConstant.sectionImages.aboutUs}/>
                <h5><IoIosEmailOutline size={30} color="orange"/> About Us</h5>
                <Container className="content">
                    <Row>
                        <Col md="6" xs="12">
                            <Contact/>
                        </Col>
                        <Col md="6" xs={12}>
                            <Legacy/>
                        </Col>
                    </Row>
                </Container>
                <LocationMap/>
            </div>
        );
    }
}
