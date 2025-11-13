import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            <section id="aboutus" className="aboutus-section">

                <div className="aboutus-content-left">

                    <div className="greybox_placeholder_aboutus">
                    </div>

                    <div className="statsbox">
                        <div className="stat1">
                            <h2>12+</h2>
                            <p>Years of experience</p>
                        </div>
                        <div className="stat2">
                            <h2>150K+</h2>
                            <p>Satisfied Clients</p>
                        </div>
                        <div className="stat3">
                            <h2>35+</h2>
                            <p>Warehouses</p>
                        </div>
                    </div>
                </div>

                <div className="aboutus-content-right">
                    <div className="aboutus-text-intro">
                        <h3>About Us</h3>
                        <h2>Providing a Safe Space for Your Treasured Items</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>
                    </div>

                    <div className="aboutus-textboxes">
                        <div className="textbox">
                            <h2>Vision</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
                        </div>
                        <div className="textbox_yellow">
                            <h2>Mission</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
                        </div>
                    </div>

                    <div className="aboutus-bottom">
                        <button className="standardbutton">Discover More</button>
                        <img src="imgs/2-aboutus/phone_icon.svg" alt="Phone icon" className="phone_icon"></img>
                            <p>More information</p>
                            <p>+46 8 123 122 44</p>
                    </div>
                </div>
            </section>
        )
    }

}
