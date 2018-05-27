import * as React                            from 'react';
import {Button, Col, Input, Row}             from 'reactstrap';
import {mapDispatchToProps, mapStateToProps} from '../../decoratots/mappers';
import {FormSendAction, formSendAction}      from '../../store/actions/formSendAction';
import {ContactModel}                        from '../../store/types/ContactModel';
import {InputContainer}                      from '../form/InputContainer';
import { AvForm } from 'availity-reactstrap-validation';

interface ContactState {
    accepted: boolean;
}

export interface ContactProps {
    form?: ContactModel;
    formSendAction?: (ContactModel) => FormSendAction;
}

@mapDispatchToProps( { formSendAction })
@mapStateToProps(state => ({form: state.form || {}}))
export class Contact extends React.Component<ContactProps> {

    state: ContactState = {
        accepted: false
    };

    private onPrivacy = event => {
        this.setState({accepted: event.target.checked});
    };

    private onSend = event => {
        event.preventDefault();
        this.props.formSendAction(this.props.form);

    }
    private get disabled() {
        return !this.state.accepted || !this.props.form.name || !this.props.form.email || !this.props.form.message;
    }

    render(): React.ReactNode {
        return (
            <AvForm onValidSubmit={this.onSend}>
                <InputContainer name="name" label="Your name*" type="text" placeholder="Your name" keyName="name" required={true}/>
                <InputContainer name="e-mail" label="E-Mail*" type="email" placeholder="Your e-mail" keyName="email" required={true}/>
                <InputContainer name="phone" label="Phone number" type="tel" placeholder="Your phone number"
                                keyName="phone"/>
                <InputContainer name="message" label="Your message*" type="textarea" placeholder="Your message"
                                keyName="message" required={true}/>
                <Row className="privacy">
                    <Col md="8">
                        <Input addon type="checkbox" className="accept-privacy" onChange={this.onPrivacy}/>
                        <small>By submitting this form you agree to our privacy policy</small>
                    </Col>
                    <Col md="4" className="text-right policy">
                        <a href="https://www.iubenda.com/privacy-policy/28349410"
                           className="iubenda-white iubenda-embed "
                           title="Privacy Policy"
                           target="_blank">Privacy Policy</a>
                    </Col>
                </Row>
                <hr/>
                <Button className="float-right"
                        disabled={this.disabled}
                        color="primary" outline
                        size="sm">
                    Submit
                </Button>
            </AvForm>
        );
    }
}
