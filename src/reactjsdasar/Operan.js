import React, { Component } from 'react'

export default class Operan extends Component {
    render() {
        const { makanan, gantiMakanan } = this.props
        return (
            <div>
                <h2>State yang jadi Props : {makanan}</h2>
                <button onClick={() => gantiMakanan("Soto")}>Ganti Makanan</button>
            </div>
        )
    }
}
