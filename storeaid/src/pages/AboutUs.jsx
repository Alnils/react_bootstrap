import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            <section id="aboutus" class="aboutus-section">

                <div class="aboutus-content-left">

                    <div class="greybox_placeholder_aboutus">
                    </div>

                    <div class="statsbox">
                        <div class="stat1">
                            <h2>12+</h2>
                            <p>Years of experience</p>
                        </div>
                        <div class="stat2">
                            <h2>150K+</h2>
                            <p>Satisfied Clients</p>
                        </div>
                        <div class="stat3">
                            <h2>35+</h2>
                            <p>Warehouses</p>
                        </div>
                    </div>
                </div>

                <div class="aboutus-content-right">
                    <div class="aboutus-text-intro">
                        <h3>About Us</h3>
                        <h2>Providing a Safe Space for Your Treasured Items</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>
                    </div>

                    <div class="aboutus-textboxes">
                        <div class="textbox">
                            <h2>Vision</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
                        </div>
                        <div class="textbox_yellow">
                            <h2>Mission</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
                        </div>
                    </div>

                    <div class="aboutus-bottom">
                        <button class="standardbutton">Discover More</button>
                        <img src="imgs/2-aboutus/phone_icon.svg" alt="Phone icon" class="phone_icon"></img>
                            <p>More information</p>
                            <p>+46 8 123 122 44</p>
                    </div>
                </div>
            </section>
        )
    }

}
