import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function Footer(){
    return(
        <div className='footer-container'>
        <section className='footer-subscription'>
        <div className='input-areas'>
          </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2> Additional Information</h2>
                    <Link to='/sing-up'>Telangapada,Near Smart Service Provider,Infront of Paikaray House</Link>
                    </div>
                    <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/sing-up'>At-Telangapada,Block-Kanas,Dist-Puri,Pin no.-752019</Link>
                    <Link to='/'>Gmail-zetafinser@gmail.com</Link>
                    <Link to='/'>Phone no.8917310896</Link>
                    
            </div>
        </div>
        {/* <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sing-up'>How it works</Link>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>How it works</Link>
                    </div>
                    <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/sing-up'>How it works</Link>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>How it works</Link>
                    <Link to='/'>How it works</Link>
                    
            </div>
        </div> */}
        
        </div>
        <section className='social-media'>
            <div className='social-media-warp'>
                {/* <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                    ZetaFinserv
                    </Link>
                    
                </div> */}
                <small className="website-right">santanu kumar paikaray@ 2021</small>
                <div className="social-icons">
                {/* <Link className="social-icon-line facebook" to="/" target='_blank'
                aria-label='Facebook'>
                <i className='fab fa-facebook-f'/>
                </Link>
                <Link className="social-icon-line instagram" to="/" target='_blank'
                aria-label='Instagram'>
                <i className='fab fa-instagram'/>
                </Link>
                <Link className="social-icon-line linkedin" to="/" target='_blank'
                aria-label='Linkedin'>
                <i className='fab fa-linkedin'/>
                </Link> */}
                <div class="container">
                <a href="https://twitter.com/FinservZeta" class="btn btn-social-icon fa fa-twitter" target="_blank">
                    
                        </a>&nbsp;
               
                
                    <a href="https://www.facebook.com/zeta.finserv/" class="btn btn-social-icon fa fa-facebook" target="_blank">
                       
                            </a>&nbsp;
                            
                    <a href="https://www.instagram.com/" class="btn btn-social-icon fa fa-instagram" target="_blank">
                     
                           </a>
                    </div>


                </div>
            </div>
        </section>
</div>
      
       
        
    )
}
export default Footer;