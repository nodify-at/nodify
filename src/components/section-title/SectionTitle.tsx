import * as React from "react";
import "./SectionTitle.scss";

export interface SectionTitleProps {
    backgroundImage: string;
    title?: string;
}

export class SectionTitle extends React.Component<SectionTitleProps> {

    render() {
        return (
            <div className="section-title">
                <h5> { this.props.title } </h5>
                <div className="background" style={{backgroundImage: `url(${this.props.backgroundImage})`}}/>
            </div>
        )
    }
}
