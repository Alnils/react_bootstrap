import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <section id="services" className="services-section">

                <div className="services-intro">
                    <h3>Our Services</h3>
                    <h2>Specialized Storage for Every Special Item</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                </div>

                <div className="services-content">

                    <div className="services-cards-left">
                        <div className="textbox_yellow">
                            <h2>Diverse Unit Sizes</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className="textbox">
                            <h2>Moving Assistance</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>

                    <div className="greybox_placeholder_services">
                    </div>

                    <div className="services-cards-right">
                        <div className="textbox">
                            <h2>Vehicle Storage</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className="textbox">
                            <h2>Top-Notch Security</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
