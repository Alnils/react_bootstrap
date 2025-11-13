import React, { Component } from 'react'

export default class Blogposts extends Component {
    render() {
        return (
            <section className="blogposts-section">
                <div className="blogposts-intro">
                    <h3>Latest Blog and News</h3>
                    <h2>Check Out Our Latest Blog and News Update</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                </div>

                <div className="blogposts-cards">
                    <div className="blogpost-card">
                        <div className="greybox_placeholder_blogpost"></div>
                        <div className="blogpost_date">
                            <img src="./src/imgs/9-blogposts/calender_icon.svg" alt="Calender Icon" className="calender-icon"></img>
                            <p>August 17, 2025</p>
                        </div>
                        <h2>Safe and Secure: The Importance of Choosing the Right Storage</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                        <a href="#" className="readmore-link">Read More...</a>
                    </div>

                    <div className="blogpost-card">
                        <div className="greybox_placeholder_blogpost"></div>
                        <div className="blogpost_date">
                            <img src="./src/imgs/9-blogposts/calender_icon.svg" alt="Calender Icon" className="calender-icon"></img>
                            <p>July 12, 2025</p>
                        </div>
                        <h2>Storage Trends 2024: What’s New in the World of Storage</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                        <a href="#" className="readmore-link">Read More...</a>
                    </div>

                    <div className="blogpost-card">
                        <div className="greybox_placeholder_blogpost"></div>
                        <div className="blogpost_date">
                            <img src="./src/imgs/9-blogposts/calender_icon.svg" alt="Calender Icon" className="calender-icon"></img>
                            <p>April 8, 2025</p>
                        </div>
                        <h2>Free Up Your Space, Free Up Your Life: The Power of Decluttering</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                        <a href="#" className="readmore-link">Read More...</a>
                    </div>
                </div>
            </section>
        )
    }
}
