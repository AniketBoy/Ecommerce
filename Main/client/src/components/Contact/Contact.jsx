import React from 'react'
import "./Contact.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Contact = () => {
    return (
        <div className="contact">
            <div className="wrapper">
                <span>BE IN TOUCH:</span>
                <div className="email">
                    <input type='email' placeholder=" enter your email"></input>
                    <button>SUBMIT</button>
                </div>
                <div className="icon">
                    <InstagramIcon />
                    <TwitterIcon />
                    <MailOutlineIcon />
                </div>

            </div>
        </div>
    )
}

export default Contact