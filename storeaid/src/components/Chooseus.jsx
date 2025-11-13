import React, { Component } from 'react'

export default class Chooseus extends Component {
  render() {
    return (
      <section className="chooseus-section">
    <div className="chooseus-intro">
        <h3>Why Choose Us</h3>
        <h2>Choose Us for Exceptional Storage Solutions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
    </div>

    <div className="chooseus-features">
        <div className="feature-card">
            <img src="../imgs/6-chooseus/1-lock_icon.svg" alt="Lock icon" className="feature-icon"></img>
            <h2>Security and Safety</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

        <div className="feature-card">
            <img src="../imgs/6-chooseus/2-money_icon.svg" alt="Money icon" className="feature-icon"></img>
            <h2>Flexible and Affordable</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

        <div className="feature-card">
            <img src="../imgs/6-chooseus/3-broom_icon.svg" alt="Broom icon" className="feature-icon"></img>
            <h2>Clean and Well-Maintained Facilities</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>

        <div className="feature-card">
            <img src="../imgs/6-chooseus/4-clock_icon.svg" alt="Clock icon" className="feature-icon"></img>
            <h2>24/7 and Convenient Access</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
    </div>
    
    <div className="greybox_placeholder_chooseus">
    </div>
</section>
    )
  }
}
