import React, { Component } from 'react'

export default class Pricing extends Component {
    render() {
        return (
            <section className="pricing-section">
                <div className="pricing-intro">
                    <h3>Pricing Plan</h3>
                    <h2>Find the Perfect Plan for Your Storage Needs</h2>
                </div>

                <div className="pricing-cards">

                    <div className="pricing-card-small">
                        <h2>Small Unit</h2>
                        <p className="price">$50/month</p>
                        <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                        <hr></hr>
                        <ul className="features-list" img="./src/imgs/7-pricing/checkmark-black_icon.svg">
                            <li>Nam nec ipsum in dolor</li>
                            <li>Fusce nec ligula ut arcu</li>
                            <li>Aliquam pulvinar arcu in</li>
                            <li>Duis gravida enim porta</li>
                            <li>Etiam eget libero non ligula</li>
                        </ul>
                        <button className="standardbutton">Rent Now</button>
                    </div>

                    <div className="pricing-card-medium">
                        <h2>Medium Unit</h2>
                        <p className="price">$100/month</p>
                        <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                        <hr></hr>
                        <ul className="features-list" img="./src/imgs/7-pricing/checkmark-white_icon.svg">
                            <li>Nam nec ipsum in dolor</li>
                            <li>Fusce nec ligula ut arcu</li>
                            <li>Aliquam pulvinar arcu in</li>
                            <li>Duis gravida enim porta</li>
                            <li>Etiam eget libero non ligula</li>
                        </ul>
                        <button className="standardbutton">Rent Now</button>
                    </div>

                    <div className="pricing-card-large">
                        <h2>Large Unit</h2>
                        <p className="price">$150/month</p>
                        <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                        <hr></hr>
                        <ul className="features-list" img="./src/imgs/7-pricing/checkmark-black_icon.svg">
                            <li>Nam nec ipsum in dolor</li>
                            <li>Fusce nec ligula ut arcu</li>
                            <li>Aliquam pulvinar arcu in</li>
                            <li>Duis gravida enim porta</li>
                            <li>Etiam eget libero non ligula</li>
                        </ul>
                        <button className="standardbutton">Rent Now</button>
                    </div>

                    <div className="pricing-card-executive">
                        <h2>Executive Unit</h2>
                        <p className="price">$200/month</p>
                        <p>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                        <hr></hr>
                        <ul className="features-list" img="./src/imgs/7-pricing/checkmark-black_icon.svg">
                            <li>Nam nec ipsum in dolor</li>
                            <li>Fusce nec ligula ut arcu</li>
                            <li>Aliquam pulvinar arcu in</li>
                            <li>Duis gravida enim porta</li>
                            <li>Etiam eget libero non ligula</li>
                        </ul>
                        <button className="standardbutton">Rent Now</button>
                    </div>
                </div>
            </section >
        )
    }
}
