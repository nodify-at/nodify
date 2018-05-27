import * as BubbleTree     from 'bubbletree';
import * as React          from 'react';
import {IoIosFlaskOutline} from 'react-icons/lib/io';
import Slider              from 'react-slick';
import {componentConstant} from '../../utils/componentConstants';
import {SectionTitle}      from '../section-title/SectionTitle';

import './TechnologyList.scss';

const data = require('../../assets/tree.items.json');

export class TechnologyList extends React.Component {

    private technologiesRef: HTMLDivElement;

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        new BubbleTree({
            container: this.technologiesRef,
            data     : data
        });
    }

    private get slider() {
        const settings = {
            dots          : true,
            infinite      : true,
            speed         : 500,
            slidesToShow  : 6,
            slidesToScroll: 1,
            autoplay      : true
        };

        return (
            <Slider {...settings}>
                <div><img src="/assets/img/carousel/nodejs.jpg" alt="Node.js"/></div>
                <div><img src="/assets/img/carousel/angular2.jpg" alt="Angular 2"/></div>
                <div><img src="/assets/img/carousel/mongodb.jpg" alt="Mongo DB"/></div>
                <div><img src="/assets/img/carousel/elastic.jpg" alt="Elastic Search"/></div>
                <div><img src="/assets/img/carousel/spring-framework.jpg" alt="Spring Framework"/></div>
                <div><img src="/assets/img/carousel/hibernate.jpg" alt="Hibernate"/></div>
                <div><img src="/assets/img/carousel/swift.jpg" alt="Swift"/></div>
                <div><img src="/assets/img/carousel/kotlin.jpg" alt="Kotlin"/></div>
            </Slider>);
    }

    render() {
        return (
            <div id="technologies">
                <SectionTitle backgroundImage={componentConstant.sectionImages.technologies}/>
                <h5><IoIosFlaskOutline size={30} color="blue"/> Technologies</h5>
                <div className="tree" ref={ref => this.technologiesRef = ref}/>
                {this.slider}
            </div>
        );
    }
}
