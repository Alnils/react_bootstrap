import React, { Component } from 'react'

export default class Testimonials extends Component {
    render() {
        return (
            <section className="testimonials-section">

                <div className="testimonials-intro">
                    <h3>Testimonials</h3>
                    <h2>See What Our Client Have to Say</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                </div>

                <div className="testimonials-cards">
                    <div className="testimonial-card">
                        {/* <!-- 4/5 star rating --> */}
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>

                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.</p>
                        <img src="./src/imgs/5-testimonials/user-picture_placeholder.svg" alt="Client 1 Image" className="client-image"></img>
                        <h4>Aiden Harvey</h4>
                        <p>Customer</p>
                        <img src="./src/imgs/5-testimonials/quote_icon.svg" alt="Quote Icon" className="quote-icon"></img>
                    </div>

                    <div className="testimonial-card">
                        {/* <!-- 5/5 star rating --> */}
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>

                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.</p>
                        <img src="./src/imgs/5-testimonials/user-picture_placeholder.svg" alt="Client 2 Image" className="client-image"></img>
                        <h4>Carrisa Jocelyn</h4>
                        <p>Customer</p>
                        <img src="./src/imgs/5-testimonials/quote_icon.svg" alt="Quote Icon" className="quote-icon"></img>
                    </div>

                    <div className="testimonial-card">
                        {/* <!-- 5/5 star rating --> */}
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>
                        <img src="./src/imgs/5-testimonials/star-rating_icon.svg" alt="Star rating" className="star-rating"></img>

                        <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.</p>
                        <img src="./src/imgs/5-testimonials/user-picture_placeholder.svg" alt="Client 3 Image" className="client-image"></img>
                        <h4>Celvin Gabriel</h4>
                        <p>Customer</p>
                        <img src="./src/imgs/5-testimonials/quote_icon.svg" alt="Quote Icon" className="quote-icon"></img>
                    </div>
                </div>
            </section>
        )
    }
}
