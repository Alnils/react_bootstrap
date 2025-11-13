import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>

                <small>© <span id="year"></span> StorAid, All rights reserved.</small>

                <div className="footer-links">
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                
                <script>
                    document.getElementById('year').textContent = new Date().getFullYear();
                </script>

            </footer>


        )
    }
}
