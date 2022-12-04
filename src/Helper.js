import firebase from './firebase';
import react, { Component } from 'react';
import { Modal, Button, Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Helper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('_token'),
            show: this.props.visibility,
            playlistShow: this.props.playlistVisibility,
            otpDiv: 'none',
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

    componentDidMount() {
        if (this.state.token == null) {
            this.setState({ showProfileDetail: "none" });
        } else {
            this.setState({ showProfileDetail: "block" });
        }
    }

    componentWillReceiveProps(){
        this.setState({ show: this.props.visibility });
        
    }
    handleModal() {
        this.setState({ show: !this.state.show })
        
    }
    handlePlaylistModal() {
        this.setState({ playlistShow: !this.state.show })
        
    }
    cancelPlaylistModal(){
        this.setState({ playlistShow:false })
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
            defaultCountry: 'IN'
        });
    }

    onSignInSubmit = (e) => {
        this.configureCaptcha();
        let phoneNumber = "+91" + this.state.contactNo;
        var _this = this;
        let appVerifier = window.recaptchaVerifier;
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                window.confirmationResult = confirmationResult;
                console.log(confirmationResult);
                console.log("OTP is sent");
                _this.setState({ otpDiv: "block", btnText: "Verify", btnName: "verifyOtp" });
            })
            .catch(function (error) {
                _this.setState({ btnText: "Send OTP" });
                console.log(error);
            });
    }

    onSubmitOTP = (e) => {
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
            await fetch(apiUrl, requestOptions)
                .then(res => res.json())
                .then(res => this.setState({ apiResponse: res }))
                .catch(() => this.setState({ error: true }));

            const apiResponse = this.state.apiResponse;
            if (apiResponse.status == 1) {
                this.setState({ apiStatus: apiResponse.status, apiCode: apiResponse.code, apiMessage: apiResponse.message, token: apiResponse.access_token })
                localStorage.setItem('_token', apiResponse.access_token)
                this.setState({ showProfileDetail: "block" });
                this.setState({ show: false });
                window.location.reload(false);
            } else {
                this.setState({ apiStatus: apiResponse.status, apiCode: apiResponse.code, apiMessage: apiResponse.message })
                alert('something wents wrong!')
                this.setState({ btnText: "Verify" });
            }
        }).catch((error) => {
            this.setState({ btnText: "Verify" });
            alert('wrong')
        });
    }

    handleClick = (e) => {
        this.setState({ btnText: "Loading..." });
        if (e.target.getAttribute('dataName') == 'sendOtp') {
            this.onSignInSubmit();
        } else if (e.target.getAttribute('dataName') == 'verifyOtp') {
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
                        <div className="form-group" style={{ display: this.state.otpDiv }}>
                            <label>OTP</label>
                            <input type="text" className="form-control" placeholder="Enter OTP" onChange={(e) => this.setState({ otp: e.target.value })} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" dataName={this.state.btnName} onClick={this.handleClick}>{this.state.btnText}</button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { this.handleModal() }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={this.state.playlistShow} aria-labelledby="contained-modal-title-vcenter" centered>
                    {/* <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Create new playlist</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="New Kumaoni"
                            autoFocus
                        />
                        </Form.Group>
                        
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.cancelPlaylistModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={this.handlePlaylistModal}>
                        Add To Playlist
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Helper;