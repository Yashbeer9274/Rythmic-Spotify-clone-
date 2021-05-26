import React, { useState } from 'react';
import { loginUrl } from './Sg';
import './Login.css'
import img from './images/rhythms2-removebg-preview.png'
import img1 from './images/Capture1-removebg-preview.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
// import { useDataLayerValue } from './DataLayer'
function Login() {
    let [state, setstate] = useState("");
    function grabInp(e) {
        state = e.target.value;
        setstate(state);
        localStorage.setItem("myName", state);
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 carousel_back">
                        <img src={img} className="R_logo" alt="" />

                        <center>
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://staticfe.saavn.com/web6/prod/dist/1620130464/_i/artist/JustinBieber.png" className="carousel_img" alt="..." align="center" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://staticfe.saavn.com/web6/prod/dist/1620130464/_i/artist/ShreyaGhoshal.png" className="carousel_img" alt="..." align="center" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://staticfe.saavn.com/web6/prod/dist/1620130464/_i/artist/ArijitSingh.png" className="carousel_img" alt="..." align="center" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://staticfe.saavn.com/web6/prod/dist/1620130464/_i/artist/DiljitDosanjh.png" className="carousel_img" alt="..." align="center" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://staticfe.saavn.com/web6/prod/dist/1620130464/_i/artist/Badshah.png" className="carousel_img" alt="..." align="center" />
                                    </div>
                                </div>
                            </div>
                            <h4 className="footer_text">Where the words leave off!!</h4>
                        </center>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <center>
                                <img src={img1} className="R_logo_right" alt="" />
                                <form>
                                    <input type="text"
                                        placeholder="Enter Your Nick Name" className="form-control input_username" size="20" onInput={grabInp} />

                                    <a className="btn btn-success btn-lg" href={loginUrl}>Login</a>

                                </form>
                                <a href="https://www.facebook.com/">
                                    <FacebookIcon className="social_icon" fontSize="large" color="primary" />
                                </a>
                                <a href="https://www.instagram.com/">
                                    <InstagramIcon className="social_icon" fontSize="large" color="secondary" />
                                </a>
                                <a href="https://www.twitter.com/">
                                    <TwitterIcon className="social_icon" fontSize="large" color="primary" />
                                </a>
                                <br />
                                <a href="#"><attr title="rythmic@official.com">Wanna Reach us?</attr></a>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;

