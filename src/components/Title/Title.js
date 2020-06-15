import React, { Fragment } from "react";
import "./Title.css"
const Title = ({ name, title }) => {
    return(
        <Fragment>
            <div className="container">
                <h1>{name} <strong> {title}</strong></h1>
            </div>
        </Fragment>
    )
}

export default Title;