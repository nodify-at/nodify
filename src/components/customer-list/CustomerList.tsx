import * as React          from 'react';
import {IoIosHeartOutline} from 'react-icons/lib/io';
import Slider              from 'react-slick';
import {componentConstant} from '../../utils/componentConstants';
import {SectionTitle}      from '../section-title/SectionTitle';

import './CustomerList.scss';

const customers = require('../../assets/customers.json');

export class CustomerList extends React.Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <div id="customers">
                <SectionTitle backgroundImage={componentConstant.sectionImages.customers}/>
                <h5>
                    <IoIosHeartOutline size={30} color="red" />
                    OUR CUSTOMERS
                </h5>
                <p>
                    We have developed with our customers great software solutions. Many thanks for all of our customers.
                </p>
                <Slider { ...settings } >
                    { customers.map(customer => <img src={customer.image} alt={customer.name} />)}
                </Slider>
            </div>
        );
    }
}
