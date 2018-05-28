import * as React           from 'react';
import Waypoint             from 'react-waypoint';
import {mapDispatchToProps} from 'redux-mappers';
import {navigationAction}   from '../../store/actions/navigationAction';

export interface ScrollSpyProps {
    name: string;
    navigationAction?: any;
};

@mapDispatchToProps({ navigationAction })
export class ScrollSpy extends React.Component<ScrollSpyProps> {

    onEnter = event => {
        this.props.navigationAction(this.props.name);
        console.log(event);
    };

    render() {
        return (
            <div>
            <Waypoint onEnter={this.onEnter} scrollableAncestor={window} topOffset="0" bottomOffset="80">
            </Waypoint>
                {this.props.children}
            </div>
        );
    }
}
