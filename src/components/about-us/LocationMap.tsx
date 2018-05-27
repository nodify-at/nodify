import * as React from 'react';
import './LocationMap.scss';

declare let google;

export class LocationMap extends React.Component {

    private containerRef: HTMLDivElement;

    componentDidMount() {
        const office = {lat: 48.1693454, lng: 16.3607548};
        const map = new google.maps.Map(this.containerRef, {
            zoom: 16,
            center: office
        });
        new google.maps.Marker({
            position: office,
            map: map
        });
    }

    render() {
        return (
            <div id="location-map" ref={ref => this.containerRef = ref}/>
        );
    }
}
