import React, { Component } from 'react'

export default class Sublifecycle extends Component {

componentWillUnmount(){
    this.props.ubahMakanan("sate")
}

    render() {
        return (
            <div>
                <h2>componen sub lifecycle</h2>
            </div>
        )
    }
}
