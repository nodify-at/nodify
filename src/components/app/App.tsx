import * as React       from 'react';
import {
    IoIosEmailOutline,
    IoIosFlaskOutline,
    IoIosGridViewOutline,
    IoIosHeartOutline,
    IoIosHomeOutline
}                       from 'react-icons/lib/io';
import {Container}      from 'reactstrap';
import {AboutUs}        from '../about-us/AboutUs';
import {CustomerList}   from '../customer-list/CustomerList';
import {Home}           from '../home/Home';
import {
    Menu,
    Navigation
}                       from '../navigation/Navigation';
import {ProjectList}    from '../project-list/ProjectList';
import {ScrollSpy}      from '../scroll-spy/ScrollSpy';
import {TechnologyList} from '../technology-list/TechnologyList';
import CookieBanner     from 'react-cookie-banner';

import './App.scss';

const menuItems: Menu[] = [
    {name: 'HOME', identifier: 'home', icon: <IoIosHomeOutline size={20}/>},
    {name: 'PROJECTS', identifier: 'projects', icon: <IoIosGridViewOutline size={20} color='orange'/>},
    {name: 'CUSTOMERS', identifier: 'customers', icon: <IoIosHeartOutline size={20} color='red'/>},
    {name: 'TECHNOLOGIES', identifier: 'technologies', icon: <IoIosFlaskOutline size={20} color='blue'/>},
    {name: 'ABOUT US', identifier: 'about-us', icon: <IoIosEmailOutline size={20} color='black'/>}
];

export interface AppProps {
}

export default class App extends React.Component<AppProps> {
    render() {
        const link: any = <a href="/cookies.html" target="_blank">More Info</a>;
        const styles    = {
            link: {
                textDecoration: 'none',
                fontWeight    : 'bold'
            }
        };

        return (
            <Container fluid className="app">
                <Navigation menuItems={menuItems}/>
                <ScrollSpy name="home">
                    <Home/>
                </ScrollSpy>
                <ScrollSpy name="projects">
                    <ProjectList/>
                </ScrollSpy>
                <ScrollSpy name="customers">
                    <CustomerList/>
                </ScrollSpy>
                <ScrollSpy name="technologies">
                    <TechnologyList/>
                </ScrollSpy>
                <ScrollSpy name="about-us">
                    <AboutUs/>
                </ScrollSpy>

                <CookieBanner
                    message="nodify uses cookies to guarantee users the employment of its site features, offering a better purchasing experience. By continuing to browse the site you're agreeing to our use of cookies."
                    link={link}
                    styles={styles}
                    buttonMessage="OK, I accept it"
                    onAccept={() => {
                    }}
                    dismissOnScroll={false}
                    cookie="user-has-accepted-cookies"/>
            </Container>
        );
    }
}
