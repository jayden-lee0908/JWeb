import React from 'react'
import { Button } from './Button'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
      </div> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              Jayden' Web <i class="fa-solid fa-cube" />
            </Link>
          </div>
          <small className="website-rights">Jayden Lee © 2024</small>
          <div className='social-icons'>
            <Link className="social-icon-link instagram"
            to="/"
            target='_blank'
            aria-label='Instagram'>
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link className="social-icon-link github"
              to="/"
              target='_blank'
              aria-label='Github'>
              <i class="fa-brands fa-github"></i>
            </Link>
            <Link className="social-icon-link linkedin"
              to="/"
              target='_blank'
              aria-label='Linkedin'>
              <i class="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
