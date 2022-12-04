import firebase from '../../firebase';
import react, { Component } from 'react';
import { Modal, Button } from "react-bootstrap";

class Header extends Component {
    constructor() {
        super()
        this.state = {
            token: localStorage.getItem('_token'),
            show: false,
            otpDiv:'none',
            contactNo: "",
            btnText: "Send OTP",
            btnName: "sendOtp",
            otp: "",
            apiResponse: [],
            apiStatus: '',
            apiMessage: '',
            apiCode: ''
        }
        var _this = this;
    }

    componentDidMount (){
        if(this.state.token == null){
            this.setState({showProfileDetail:"none"});
        } else {
            this.setState({showProfileDetail:"block"});
        }
    }
    
    handleModal() {
        alert('ee')
        this.setState({ show: !this.state.show })
    }
    handleLogout() {
        localStorage.clear();
        window.location.reload(false);
    }
    configureCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                this.onSignInSubmit();
                console.log('captcha verified')
            },
            defaultCountry:'IN'
        });
    }
    
    onSignInSubmit = (e) =>{
        this.configureCaptcha();
        let phoneNumber = "+91"+this.state.contactNo;
        var _this = this;
        let appVerifier = window.recaptchaVerifier;
        firebase
          .auth()
          .signInWithPhoneNumber(phoneNumber, appVerifier)
          .then(function (confirmationResult) {
            window.confirmationResult = confirmationResult;
            console.log(confirmationResult);
            console.log("OTP is sent");
            _this.setState({ otpDiv: "block",btnText:"Verify",btnName:"verifyOtp" });
          })
          .catch(function (error) {
            _this.setState({btnText:"Send OTP"});
            console.log(error);
          });
    }

    onSubmitOTP = (e) =>{
        const code = this.state.otp;
        window.confirmationResult.confirm(code).then(async (result) => {
            // User signed in successfully.
            const user = result.user;
            const token = await user.getIdToken();
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Firebasetoken: token })
            };

            const apiUrl = '/api/v1/front/login';
            await fetch(apiUrl,requestOptions)
            .then(res => res.json())
            .then(res => this.setState({apiResponse:res}))
            .catch(() => this.setState({ error: true }));

            const apiResponse = this.state.apiResponse;
            if(apiResponse.status == 1){
                this.setState({ apiStatus: apiResponse.status, apiCode: apiResponse.code, apiMessage: apiResponse.message, token: apiResponse.access_token  })
                localStorage.setItem('_token', apiResponse.access_token)
                this.setState({ showProfileDetail:"block" });
                this.setState({show:false});
            } else {
                this.setState({ apiStatus: apiResponse.status, apiCode: apiResponse.code, apiMessage: apiResponse.message })
            }
        }).catch((error) => {
            this.setState({ btnText:"Verify" });
            alert('wrong')
        });
    }

    handleClick = (e) =>{
        this.setState({btnText:"Loading..."});
        if(e.target.getAttribute('dataName') == 'sendOtp'){
            this.onSignInSubmit();
        } else if(e.target.getAttribute('dataName') == 'verifyOtp') {
            this.onSubmitOTP();
        }
    }
    render() {
        const token = this.state.token;
        return (
            <div>
                <div id="sign-in-button"></div>
                <Modal show={this.state.show}>

                    <Modal.Body>

                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label>Contact No</label>
                            <input type="text" className="form-control" placeholder="Enter Contact No" onChange={(e) => this.setState({ contactNo: e.target.value })} />
                        </div>
                        <div className="form-group" style={{display:this.state.otpDiv}}>
                            <label>OTP</label>
                            <input type="text" className="form-control" placeholder="Enter OTP" onChange={(e) => this.setState({ otp: e.target.value })} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" dataName={this.state.btnName} onClick={this.handleClick}>{this.state.btnText}</button>
                        {/* <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p> */}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { this.handleModal() }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <header id="header" className="bg-primary">
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn toggle-menu mr-3" id="openSidebar">
                            <span />
                            <span />
                            <span />
                        </button>
                        <form action="#" id="searchForm">
                            <button type="button" className="btn ion-ios-search" />
                            <input type="text" placeholder="Search..." id="searchInput" className="form-control" />
                            {/* Begin | Search Card [[ Find at scss/framework/base/search/search.scss ]] */}
                            <div className="search-card" data-scrollable="true">
                                {/* Begin | Search Result List */}
                                <div className="mb-3">
                                    {/* Begin | Search Result List Header */}
                                    <div className="d-flex">
                                        <span className="text-uppercase mr-auto font-weight-bold text-dark">Artists</span>
                                        <a href="artists.html">View All</a>
                                    </div>
                                    {/* End | Search Result List Header */}
                                    <hr />
                                    {/* Begin | Result List */}
                                    <div className="row">
                                        <div className="col-xl-2 col-md-4 col-6">
                                            <div className="custom-card mb-3">
                                                <a href="artist-details.html" className="text-dark">
                                                    <img src="../assets/images/cover/medium/1.jpg" alt="" className="card-img--radius-md" />
                                                    <p className="text-truncate mt-2">Arebica Luna</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-md-4 col-6">
                                            <div className="custom-card mb-3">
                                                <a href="artist-details.html" className="text-dark">
                                                    <img src="../assets/images/cover/medium/2.jpg" alt="" className="card-img--radius-md" />
                                                    <p className="text-truncate mt-2">Gerrina Linda</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-md-4 col-6">
                                            <div className="custom-card mb-3">
                                                <a href="artist-details.html" className="text-dark">
                                                    <img src="../assets/images/cover/medium/3.jpg" alt="" className="card-img--radius-md" />
                                                    <p className="text-truncate mt-2">Zunira Willy</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-md-4 col-6">
                                            <div className="custom-card mb-3">
                                                <a href="artist-details.html" className="text-dark">
                                                    <img src="../assets/images/cover/medium/4.jpg" alt="" className="card-img--radius-md" />
                                                    <p className="text-truncate mt-2">Johnny Marro</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-md-4 col-6">
                                            <div className="custom-card mb-3">
                                                <a href="artist-details.html" className="text-dark">
                                                    <img src="../assets/images/cover/medium/5.jpg" alt="" className="card-img--radius-md" />
                                                    <p className="text-truncate mt-2">Jina Moore</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-md-4 col-6">
                                            <div className="custom-card mb-3">
                                                <a href="artist-details.html" className="text-dark">
                                                    <img src="../assets/images/cover/medium/6.jpg" alt="" className="card-img--radius-md" />
                                                    <p className="text-truncate mt-2">Rasomi Pelina</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End | Result List */}
                                </div>
                                {/* End | Search Result List */}
                                {/* Begin | Search Result List */}
                                <div className="mb-3">
                                    {/* Begin | Search Result List Header */}
                                    <div className="d-flex">
                                        <span className="text-uppercase mr-auto font-weight-bold text-dark">Track</span>
                                        <a href="songs.html">View All</a>
                                    </div>
                                    {/* End | Search Result List Header */}
                                    <hr />
                                    {/* Begin | Result List */}
                                    <div className="row">
                                        <div className="col-xl-4 col-md-6 col-12">
                                            <div className="custom-card mb-3">
                                                <a href="song-details.html" className="text-dark custom-card--inline">
                                                    <div className="custom-card--inline-img">
                                                        <img src="../assets/images/cover/small/1.jpg" alt="" className="card-img--radius-sm" />
                                                    </div>
                                                    <div className="custom-card--inline-desc">
                                                        <p className="text-truncate mb-0">I Love You Mummy</p>
                                                        <p className="text-truncate text-muted font-sm">Arebica Luna</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-12">
                                            <div className="custom-card mb-3">
                                                <a href="song-details.html" className="text-dark custom-card--inline">
                                                    <div className="custom-card--inline-img">
                                                        <img src="../assets/images/cover/small/2.jpg" alt="" className="card-img--radius-sm" />
                                                    </div>
                                                    <div className="custom-card--inline-desc">
                                                        <p className="text-truncate mb-0">Shack your butty</p>
                                                        <p className="text-truncate text-muted font-sm">Gerrina Linda</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-12">
                                            <div className="custom-card mb-3">
                                                <a href="song-details.html" className="text-dark custom-card--inline">
                                                    <div className="custom-card--inline-img">
                                                        <img src="../assets/images/cover/small/3.jpg" alt="" className="card-img--radius-sm" />
                                                    </div>
                                                    <div className="custom-card--inline-desc">
                                                        <p className="text-truncate mb-0">Do it your way(Female)</p>
                                                        <p className="text-truncate text-muted font-sm">Zunira Willy &amp; Nutty Nina</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End | Result List */}
                                </div>
                                {/* End | Search Result List */}
                                {/* Begin | Search Result List */}
                                <div>
                                    {/* Begin | Search Result List Header */}
                                    <div className="d-flex">
                                        <span className="text-uppercase mr-auto font-weight-bold text-dark">Albums</span>
                                        <a href="songs.html">View All</a>
                                    </div>
                                    {/* End | Search Result List Header */}
                                    <hr />
                                    {/* Begin | Result List */}
                                    <div className="row">
                                        <div className="col-xl-4 col-md-6 col-12">
                                            <div className="custom-card mb-3">
                                                <a href="song-details.html" className="text-dark custom-card--inline">
                                                    <div className="custom-card--inline-img">
                                                        <img src="../assets/images/cover/small/4.jpg" alt="" className="card-img--radius-sm" />
                                                    </div>
                                                    <div className="custom-card--inline-desc">
                                                        <p className="text-truncate mb-0">Say yes</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-12">
                                            <div className="custom-card mb-3">
                                                <a href="song-details.html" className="text-dark custom-card--inline">
                                                    <div className="custom-card--inline-img">
                                                        <img src="../assets/images/cover/small/5.jpg" alt="" className="card-img--radius-sm" />
                                                    </div>
                                                    <div className="custom-card--inline-desc">
                                                        <p className="text-truncate mb-0">Where is your letter</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-12">
                                            <div className="custom-card mb-3">
                                                <a href="song-details.html" className="text-dark custom-card--inline">
                                                    <div className="custom-card--inline-img">
                                                        <img src="../assets/images/cover/small/6.jpg" alt="" className="card-img--radius-sm" />
                                                    </div>
                                                    <div className="custom-card--inline-desc">
                                                        <p className="text-truncate mb-0">Hey not me</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End | Result List */}
                                </div>
                                {/* End | Search Result List */}
                            </div>
                            {/* End | Search Card */}
                        </form>
                        {/* Begin | Header Options */}
                        <ul className="header-options d-flex align-items-center">
                            { token == null ? (
                                <li className="pl-2" onClick={() => { this.handleModal() }}>Login</li>
                            ) : ('')}
                            <li className="dropdown fade-in" style={{display:this.state.showProfileDetail}}>
                                <a href="javascript:void(0);" className="d-flex align-items-center py-2" role="button" id="userMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="avatar avatar-sm avatar-circle"><img src="../assets/images/users/thumb.jpg" alt="user" /></div>

                                    <span className="pl-2">Halo Admin</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userMenu">
                                    <a className="dropdown-item" href="profile.html"><i className="ion-md-contact" /> <span>Profile</span></a>
                                    <a className="dropdown-item" href="plan.html"><i className="ion-md-radio-button-off" /> <span>Your Plan</span></a>
                                    <a className="dropdown-item" href="settings.html"><i className="ion-md-settings" /> <span>Settings</span></a>
                                    <div className="dropdown-divider" />
                                    <div className="px-4 py-2">
                                        <a href="" className="btn btn-sm btn-air btn-pill btn-danger" onClick={() => { this.handleLogout() }}>Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* End | Header Options */}
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;