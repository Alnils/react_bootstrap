import React, { Component } from 'react'
import StandardButton from '../components/Standardbutton'

export default class Home extends Component {
    render() {
        return (
            <section id="home" className="home-section">
                <div className="home-content">
                    <h3>Welcome to Storeaid</h3>
                    <h1>Space Simplified, Storage Perfected</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</p>
                    
                    {/* <button className="standardbutton">Discover More</button> */}
                    <StandardButton text="Discover More"/>
                </div>
                <img src="../imgs/1-home/home_man_img.svg" alt="Home section illustration" className="home-image"></img>
            </section>
        )
    }
}
