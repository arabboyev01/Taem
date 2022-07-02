import './about.scss';
export default function Member() {
    const bios = [
        {
            name: 'a. nomonov',
            img: require('../img/img1.png'),
            job: 'UI/ux designer'
        }
    ];
    return (
        <section id="mem">
            <div className="title">
                <h2>We Work With Team</h2>
            </div>
            {bios.map(bio =>
                <div className="team-card">
                    <div className="card">
                        <div className="card-img">
                            <img src={bio.img} alt="" />
                        </div>
                        <div className="jobs">
                            <p>{bio.job}</p>
                        </div>
                        <div className="name">
                            <h5>{bio.name}</h5>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}