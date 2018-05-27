import {ChangeEvent}                         from 'react';
import * as React                            from 'react';
import { AvField } from 'availity-reactstrap-validation';
import {FormGroup, Label}             from 'reactstrap';
import {InputType}                           from 'reactstrap/lib/Input';
import {mapDispatchToProps, mapStateToProps} from '../../decoratots/mappers';
import {FormChangeAction, formChangeAction}  from '../../store/actions/formChangeAction';
import {ContactModel}                        from '../../store/types/ContactModel';

export interface InputContainerProps {
    name: string;
    label: string;
    type: InputType;
    placeholder: string;
    keyName: string;
    form?: ContactModel;
    required?: boolean;
    formChangeAction?: (ContactModel) => FormChangeAction;
}

@mapStateToProps(state => ({
    form: state.form || {}
}))
@mapDispatchToProps({ formChangeAction })
export class InputContainer extends React.Component<InputContainerProps> {

    private onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        this.props.form[this.props.keyName] = value;
        this.props.formChangeAction({ ...this.props.form });
    };

    render() {
        return (
            <FormGroup>
                <Label for={this.props.name}>{this.props.label}</Label>
                <AvField type={this.props.type} id={this.props.name} name={this.props.name} required={this.props.required} placeholder={this.props.placeholder} onChange={this.onChange}/>
            </FormGroup>
        );
    }
}
