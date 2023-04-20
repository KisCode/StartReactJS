import React from 'react';

export default class Welcome extends React.Component {

    render(props) {
        return <h1>Hello,{this.props.name }， create at {new Date().toLocaleTimeString()}</h1>
    }
}
  