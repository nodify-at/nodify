import * as React                                              from 'react';
import {Collapse, Navbar, NavbarBrand, NavbarToggler, NavLink} from 'reactstrap';
import './Navigation.scss';
import {mapDispatchToProps, mapStateToProps}                   from '../../decoratots/mappers';
import {navigationAction}                                      from '../../store/actions/navigationAction';

const scrollToElement = require('scroll-to-element');
const logo = require('../../assets/img/logo.png');

export interface NavigationProps {
    menuItems?: Menu[];
    active?: string;

    navigationAction?: any;
}

export interface Menu {
    name: string;
    identifier?: string;
    icon?: React.ReactNode;
}

@mapDispatchToProps({ navigationAction })
@mapStateToProps( state => ({ active: state.navigation ? state.navigation.name : 'home' }))
export class Navigation extends React.Component<NavigationProps> {

    static defaultProps = {
        menuItems: []
    };

    state = {
        isOpen: false
    };

    private onMenuSelect = (menu: Menu) => {
        event.preventDefault();
        const element = document.getElementById(menu.identifier);
        scrollToElement(element, {
            offset: -56,
            duration: 1500
        });
        this.props.navigationAction(menu.identifier);
    };

    private toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        return (
            <Navbar fixed="top" className={`navigation ${this.props.active === 'home' ? 'on-top' : ''}`} expand="md" light>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <NavbarBrand href="/">
                        <img src={logo}/>
                    </NavbarBrand>
                    {this.props.menuItems.map(item => <NavLink href="#"
                                                               className={ this.props.active === item.identifier ? 'active' : '' }
                                                               onClick={() => this.onMenuSelect(item)}> {item.icon} {item.name} </NavLink>)}
                </Collapse>
            </Navbar>
        );
    }
}
