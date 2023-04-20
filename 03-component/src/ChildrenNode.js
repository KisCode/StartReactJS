import React from "react";

export default class ChildrenNode extends React.Component{
    render(){
        return (
            <div>
                <p>2222adsda</p>
                {this.props.children()}
            </div>
        )
    }
}