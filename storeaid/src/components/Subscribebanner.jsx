import React, { Component } from 'react'

export default class Subscribebanner extends Component {
    render() {
        return (
            <section className="subscribebanner-section">
                <div className="subscribebanner-content">
                    <h2>Subscribe Our Newsletter</h2>
                    <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Enter your email *" className="email-input"></input>
                            <button className="standardbutton">Submit</button>
                    </div>
                </div>
            </section>
        )
    }
}
