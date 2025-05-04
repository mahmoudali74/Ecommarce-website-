import React from "react";

function About(){
    let message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \n magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor";
return(<div style={{backgroundColor:"#6a11cb", marginTop:'-20px',marginBottom:'-20px'}}>
<section className="section-white">
    <div className="container" >
        <div className="row">
            <div className="col-md-12 text-center text-light">
                <h2 className="section-title">Our Team</h2>
                <p className="section-subtitle">{message}</p>
            </div>
            <div className="col-sm-4 col-md-4 text-light" >
                <div className="team-item">
                    <img width={'350px'}  src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" className="team-img" alt="pic"/>
                    <h3>Marina Smith</h3>
                    <div className="team-info">
                        <p>Head of seo</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \n magna aliqua. Ut enim ad minim veniam</p>
                        
                    </div>
                </div>
            </div>
            
            <div className="col-sm-6 col-md-4 text-light">
                <div className="team-item">
                    <img  width={'350px'} src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className="team-img" alt="pic"/>
                    <h3>Alexandera Smith</h3>
                    <div className="team-info">
                        <p>Head of seo</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \n magna aliqua. Ut enim ad minim veniam</p>
                         
                    </div>
                </div>
            </div>
            
            <div className="col-sm-6 col-md-4 text-light">
                <div className="team-item">
                    <img  width={'350px'} src="https://media.istockphoto.com/id/1019406474/photo/young-contemporary-intelligent-executive-business-man-isolated-on-grey-background-copy-space.jpg?s=612x612&w=0&k=20&c=2sDHvJYuSRTNypqx8rbAFyxUwdvPjUpdsi2kRO-fNxc=" className="team-img" alt="pic"/>
                    <h3>Jhon Hawkins</h3>
                    <div className="team-info">
                        <p>Head of seo</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \n magna aliqua. Ut enim ad minim veniam</p>
                         
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
)
}
export default About;
