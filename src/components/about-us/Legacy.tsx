import * as React            from 'react';
import {Col, Container, Row} from 'reactstrap';

import './Legacy.scss';

export class Legacy extends React.Component {

    render() {
        return (
            <Container id="legacy">
                <h6>
                    Information obligation according to §5 E-Commerce Act, §14 Corporate Code, §63 Trade Regulations and
                    Disclosure Obligation according to §25 Media Act.
                </h6>

                <Row>
                    <Col md="12" className="company-name">
                        <strong> nodify e.U.  </strong>
                    </Col>
                    <Col md="12"> Hasan Özdemir, BSc. </Col>
                    <Col md="12"> Graffgasse 10 Stiege 2 Tür 2204 </Col>
                    <Col md="12"> A - 1100, Wien </Col>
                    <hr />
                    <Col md="12"> <strong>Phone:</strong> +43 (0) 676 467 84 17 </Col>
                    <Col md="12"> <strong>E-Mail:</strong> post@nodify.at </Col>
                    <hr />
                    <Col md="12"> <strong>VAT:</strong> ATU71231357 </Col>
                    <Col md="12"> <strong>Company register number:</strong> FN454797w </Col>
                    <hr />
                    <Col md="12"> <strong>Object of the company:</strong> Software Development and Services </Col>
                    <Col md="12"> Member of <strong> WKO Wien </strong> </Col>
                    <Col md="12">  www.ris.bka.gv.at </Col>
                    <Col md="12">  <strong>Supervisory Authority / Trade Authority:</strong> District Commission Vienna </Col>
                    <Col md="12"> <small>Source: Created with the imprint generator of firmenwebseiten.at in cooperation with meinehaustiere.at</small> </Col>
                </Row>
            </Container>
        );
    }
}
