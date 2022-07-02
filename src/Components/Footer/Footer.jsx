import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import './footer.scss';
export default function Footer() {
    return (
        <section id="footer">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <div className="title">
                        <h5>Information</h5>
                    </div>
                    <div className="desc">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div className="socila-media">
                        <InstagramIcon />
                        <TwitterIcon />
                        <LinkedInIcon />
                        <FacebookIcon />
                    </div>
                </div>
                <div className="footer-center">
                    <div className="title">
                        <h5>Navigation</h5>
                    </div>
                    <ul>
                        <li>< ChevronRightIcon />Homepage</li>
                        <li>< ChevronRightIcon />About Us</li>
                        <li>< ChevronRightIcon />Services</li>
                        <li>< ChevronRightIcon />Project</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <div className="title">
                        <h5>Contact Us</h5>
                    </div>
                    <p><LocationOnIcon />Lumbung Hidup East Java</p>
                    <p><EmailIcon />abbosarabboyev9@gmail.com</p>
                    <input type="text" type="email" placeholder="Email Adress"/>
                    <button type="submit">SUBSCRIBE</button>
                </div>
            </div>
            <div className="foot">
                <p>Allright Reserved - qwerty Interior</p>
            </div>
        </section>
    )
}