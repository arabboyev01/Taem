import Navbar from '../Navbar/Navbar'
import Who from '../Header/Who';
import Member from './Members';
import './about.scss';
export default function About() {
    return (
        <section id="about">
            <section>
                <div className="head">
                    <Navbar />
                    <div className="title">
                        <h2>About Us</h2>
                    </div>
                    <div className="desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
            </section>
            <Who />
            <Member />
        </section>
    )
}