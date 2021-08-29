import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import React, {useEffect, Component} from 'react';
import React, { Component } from 'react'

// const Songs = () => {
//     const { name } = useParams();

//     const [state, setState] = useState([])
//     useEffect(() => {
//         fetch('http://127.0.0.1:3000/home?name=latest').then(
//             res => setState(res.data)
//         )
//     })

class Songs extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            error: null,
            lists: []
        };
    
    }   

    componentDidMount() {
        const apiUrl = 'http://127.0.0.1:3000/songs?name=latest';
        
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => this.setState({ lists: res }))
            .catch(() => this.setState({ error: true }));

            
    }

    render() {
        // const { error, lists } = this.state;
        // console.log(this.props.match);
        // const { name } = this.props.match.name;
        
        // useEffect(() => {
        //     const url = 'http://localhost/music/api/home';

        //     fetch(url,{
        //         headers: new Headers({
        //             'Access-Control-Allow-Origin': 'true',
        //             'Access-Control-Allow-Headers': 'X-Requested-With'
        //           }),
        //     }).then(resp=>console.log(resp))
        //     console.log(url);
        // },[])
        // const { name } = useParams();
        return (
            <div>
                <div className="main-container" id="appRoute">
                    <p>Param name: {name}</p>
                    <div className="row align-items-end">
                        <span className="col-6 font-weight-bold">5,012 Results</span>
                        <div className="col-6 ml-auto">
                            <form action="#" className="form-inline justify-content-end">
                                <label className="mr-2" htmlFor="filter2">Sorted By:</label>
                                <select className="custom-select mr-sm-2" id="filter2">
                                    <option selected>Popular</option>
                                    <option value={1}>A-Z</option>
                                    <option value={2}>Z-A</option>
                                </select>
                            </form>
                        </div>
                        <div className="col-12"><hr /></div>
                    </div>
                    <div className="row section">
                        <div className="col-xl-3 col-lg-4 col-sm-6 pb-4">
                            <div className="custom-card">
                                <div className="custom-card--img">
                                    <div className="custom-card--info">
                                        <ul className="custom-card--labels d-flex">
                                            <li><span className="badge badge-pill badge-warning"><i className="la la-star" /></span></li>
                                        </ul>
                                        <div className="dropdown dropdown-icon">
                                            <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ion-md-more" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link favorite">
                                                        <i className="la la-heart-o" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-plus" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-download" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-share-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="external" data-audio="{&quot;name&quot;: &quot;I Love You Mummy&quot;, &quot;artist&quot;: &quot;Arebica Luna&quot;, &quot;album&quot;: &quot;Mummy&quot;, &quot;url&quot;: &quot;../assets/audio/ringtone-1.mp3&quot;, &quot;cover_art_url&quot;: &quot;../assets/images/cover/small/1.jpg&quot;}">
                                        <img src="../assets/images/cover/large/1.jpg" alt="I Love You Mummy" className="card-img--radius-lg" />
                                    </a>
                                </div>
                                <Link to={"/songdetails/i-love-you-mummy"} className="custom-card--link mt-2">
                                    <h6>I Love You Mummy</h6>
                                    <p>Arebica Luna</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 pb-4">
                            <div className="custom-card">
                                <div className="custom-card--img">
                                    <div className="custom-card--info">
                                        <div className="dropdown dropdown-icon">
                                            <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ion-md-more" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link favorite">
                                                        <i className="la la-heart-o" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-plus" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-download" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-share-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="external" data-audio="{&quot;name&quot;: &quot;Shack your butty&quot;, &quot;artist&quot;: &quot;Gerrina Linda&quot;, &quot;album&quot;: &quot;Hot Shot&quot;, &quot;url&quot;: &quot;../assets/audio/ringtone-2.mp3&quot;, &quot;cover_art_url&quot;: &quot;../assets/images/cover/small/2.jpg&quot;}">
                                        <img src="../assets/images/cover/large/2.jpg" alt="Shack your butty" className="card-img--radius-lg" />
                                    </a>
                                </div>
                                <a href="song-details.html" className="custom-card--link mt-2">
                                    <h6>Shack your butty</h6>
                                    <p>Gerrina Linda</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 pb-4">
                            <div className="custom-card">
                                <div className="custom-card--img">
                                    <div className="custom-card--info">
                                        <ul className="custom-card--labels d-flex">
                                            <li><span className="badge badge-pill badge-danger"><i className="la la-heart" /></span></li>
                                        </ul>
                                        <div className="dropdown dropdown-icon">
                                            <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ion-md-more" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link favorite">
                                                        <i className="la la-heart-o" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-plus" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-download" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-share-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="external" data-audio="{&quot;name&quot;: &quot;Do it your way(Female)&quot;, &quot;artist&quot;: &quot;Zunira Willy & Nutty Nina&quot;, &quot;album&quot;: &quot;Own Way&quot;, &quot;url&quot;: &quot;../assets/audio/ringtone-3.mp3&quot;, &quot;cover_art_url&quot;: &quot;../assets/images/cover/small/3.jpg&quot;}">
                                        <img src="../assets/images/cover/large/3.jpg" alt="Do it your way(Female)" className="card-img--radius-lg" />
                                    </a>
                                </div>
                                <a href="song-details.html" className="custom-card--link mt-2">
                                    <h6>Do it your way(Female)</h6>
                                    <p>Zunira Willy &amp; Nutty Nina</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 pb-4">
                            <div className="custom-card">
                                <div className="custom-card--img">
                                    <div className="custom-card--info">
                                        <div className="dropdown dropdown-icon">
                                            <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ion-md-more" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link favorite">
                                                        <i className="la la-heart-o" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-plus" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-download" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-share-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="external" data-audio="{&quot;name&quot;: &quot;Say yes&quot;, &quot;artist&quot;: &quot;Johnny Marro&quot;, &quot;album&quot;: &quot;Say yes&quot;, &quot;url&quot;: &quot;../assets/audio/ringtone-4.mp3&quot;, &quot;cover_art_url&quot;: &quot;../assets/images/cover/small/4.jpg&quot;}">
                                        <img src="../assets/images/cover/large/4.jpg" alt="Say yes" className="card-img--radius-lg" />
                                    </a>
                                </div>
                                <a href="song-details.html" className="custom-card--link mt-2">
                                    <h6>Say yes</h6>
                                    <p>Johnny Marro</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 pb-4">
                            <div className="custom-card">
                                <div className="custom-card--img">
                                    <div className="custom-card--info">
                                        <ul className="custom-card--labels d-flex">
                                            <li><span className="badge badge-pill badge-warning"><i className="la la-star" /></span></li>
                                            <li><span className="badge badge-pill badge-danger"><i className="la la-heart" /></span></li>
                                        </ul>
                                        <div className="dropdown dropdown-icon">
                                            <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ion-md-more" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link favorite">
                                                        <i className="la la-heart-o" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-plus" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-download" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-share-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="external" data-audio="{&quot;name&quot;: &quot;Where is your letter&quot;, &quot;artist&quot;: &quot;Jina Moore & Lenisa Gory&quot;, &quot;album&quot;: &quot;Letter&quot;, &quot;url&quot;: &quot;../assets/audio/ringtone-5.mp3&quot;, &quot;cover_art_url&quot;: &quot;../assets/images/cover/small/5.jpg&quot;}">
                                        <img src="../assets/images/cover/large/5.jpg" alt="Where is your letter" className="card-img--radius-lg" />
                                    </a>
                                </div>
                                <a href="song-details.html" className="custom-card--link mt-2">
                                    <h6>Where is your letter</h6>
                                    <p>Jina Moore &amp; Lenisa Gory</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 pb-4">
                            <div className="custom-card">
                                <div className="custom-card--img">
                                    <div className="custom-card--info">
                                        <ul className="custom-card--labels d-flex">
                                            <li><span className="badge badge-pill badge-warning"><i className="la la-star" /></span></li>
                                        </ul>
                                        <div className="dropdown dropdown-icon">
                                            <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ion-md-more" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link favorite">
                                                        <i className="la la-heart-o" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-plus" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-download" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-share-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="external" data-audio="{&quot;name&quot;: &quot;Hey not me&quot;, &quot;artist&quot;: &quot;Rasomi Pelina&quot;, &quot;album&quot;: &quot;Find Soul&quot;, &quot;url&quot;: &quot;../assets/audio/ringtone-6.mp3&quot;, &quot;cover_art_url&quot;: &quot;../assets/images/cover/small/6.jpg&quot;}">
                                        <img src="../assets/images/cover/large/6.jpg" alt="Hey not me" className="card-img--radius-lg" />
                                    </a>
                                </div>
                                <a href="song-details.html" className="custom-card--link mt-2">
                                    <h6>Hey not me</h6>
                                    <p>Rasomi Pelina</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 pb-4">
                            <div className="custom-card">
                                <div className="custom-card--img">
                                    <div className="custom-card--info">
                                        <ul className="custom-card--labels d-flex">
                                            <li><span className="badge badge-pill badge-warning"><i className="la la-star" /></span></li>
                                        </ul>
                                        <div className="dropdown dropdown-icon">
                                            <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ion-md-more" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link favorite">
                                                        <i className="la la-heart-o" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-plus" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-download" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-share-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="external" data-audio="{&quot;name&quot;: &quot;I Love You Mummy&quot;, &quot;artist&quot;: &quot;Arebica Luna&quot;, &quot;album&quot;: &quot;Mummy&quot;, &quot;url&quot;: &quot;../assets/audio/ringtone-1.mp3&quot;, &quot;cover_art_url&quot;: &quot;../assets/images/cover/small/1.jpg&quot;}">
                                        <img src="../assets/images/cover/large/1.jpg" alt="I Love You Mummy" className="card-img--radius-lg" />
                                    </a>
                                </div>
                                <a href="song-details.html" className="custom-card--link mt-2">
                                    <h6>I Love You Mummy</h6>
                                    <p>Arebica Luna</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 pb-4">
                            <div className="custom-card">
                                <div className="custom-card--img">
                                    <div className="custom-card--info">
                                        <div className="dropdown dropdown-icon">
                                            <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ion-md-more" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link favorite">
                                                        <i className="la la-heart-o" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-plus" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-download" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-share-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="external" data-audio="{&quot;name&quot;: &quot;Shack your butty&quot;, &quot;artist&quot;: &quot;Gerrina Linda&quot;, &quot;album&quot;: &quot;Hot Shot&quot;, &quot;url&quot;: &quot;../assets/audio/ringtone-2.mp3&quot;, &quot;cover_art_url&quot;: &quot;../assets/images/cover/small/2.jpg&quot;}">
                                        <img src="../assets/images/cover/large/2.jpg" alt="Shack your butty" className="card-img--radius-lg" />
                                    </a>
                                </div>
                                <a href="song-details.html" className="custom-card--link mt-2">
                                    <h6>Shack your butty</h6>
                                    <p>Gerrina Linda</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 pb-4">
                            <div className="custom-card">
                                <div className="custom-card--img">
                                    <div className="custom-card--info">
                                        <ul className="custom-card--labels d-flex">
                                            <li><span className="badge badge-pill badge-danger"><i className="la la-heart" /></span></li>
                                        </ul>
                                        <div className="dropdown dropdown-icon">
                                            <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ion-md-more" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link favorite">
                                                        <i className="la la-heart-o" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-plus" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-download" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-share-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="external" data-audio="{&quot;name&quot;: &quot;Do it your way(Female)&quot;, &quot;artist&quot;: &quot;Zunira Willy & Nutty Nina&quot;, &quot;album&quot;: &quot;Own Way&quot;, &quot;url&quot;: &quot;../assets/audio/ringtone-3.mp3&quot;, &quot;cover_art_url&quot;: &quot;../assets/images/cover/small/3.jpg&quot;}">
                                        <img src="../assets/images/cover/large/3.jpg" alt="Do it your way(Female)" className="card-img--radius-lg" />
                                    </a>
                                </div>
                                <a href="song-details.html" className="custom-card--link mt-2">
                                    <h6>Do it your way(Female)</h6>
                                    <p>Zunira Willy &amp; Nutty Nina</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 pb-4">
                            <div className="custom-card">
                                <div className="custom-card--img">
                                    <div className="custom-card--info">
                                        <div className="dropdown dropdown-icon">
                                            <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ion-md-more" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link favorite">
                                                        <i className="la la-heart-o" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-plus" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-download" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-share-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="external" data-audio="{&quot;name&quot;: &quot;Say yes&quot;, &quot;artist&quot;: &quot;Johnny Marro&quot;, &quot;album&quot;: &quot;Say yes&quot;, &quot;url&quot;: &quot;../assets/audio/ringtone-4.mp3&quot;, &quot;cover_art_url&quot;: &quot;../assets/images/cover/small/4.jpg&quot;}">
                                        <img src="../assets/images/cover/large/4.jpg" alt="Say yes" className="card-img--radius-lg" />
                                    </a>
                                </div>
                                <a href="song-details.html" className="custom-card--link mt-2">
                                    <h6>Say yes</h6>
                                    <p>Johnny Marro</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 pb-4">
                            <div className="custom-card">
                                <div className="custom-card--img">
                                    <div className="custom-card--info">
                                        <ul className="custom-card--labels d-flex">
                                            <li><span className="badge badge-pill badge-warning"><i className="la la-star" /></span></li>
                                            <li><span className="badge badge-pill badge-danger"><i className="la la-heart" /></span></li>
                                        </ul>
                                        <div className="dropdown dropdown-icon">
                                            <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ion-md-more" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link favorite">
                                                        <i className="la la-heart-o" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-plus" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-download" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-share-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="external" data-audio="{&quot;name&quot;: &quot;Where is your letter&quot;, &quot;artist&quot;: &quot;Jina Moore & Lenisa Gory&quot;, &quot;album&quot;: &quot;Letter&quot;, &quot;url&quot;: &quot;../assets/audio/ringtone-5.mp3&quot;, &quot;cover_art_url&quot;: &quot;../assets/images/cover/small/5.jpg&quot;}">
                                        <img src="../assets/images/cover/large/5.jpg" alt="Where is your letter" className="card-img--radius-lg" />
                                    </a>
                                </div>
                                <a href="song-details.html" className="custom-card--link mt-2">
                                    <h6>Where is your letter</h6>
                                    <p>Jina Moore &amp; Lenisa Gory</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 pb-4">
                            <div className="custom-card">
                                <div className="custom-card--img">
                                    <div className="custom-card--info">
                                        <ul className="custom-card--labels d-flex">
                                            <li><span className="badge badge-pill badge-warning"><i className="la la-star" /></span></li>
                                        </ul>
                                        <div className="dropdown dropdown-icon">
                                            <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="ion-md-more" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-right">
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link favorite">
                                                        <i className="la la-heart-o" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-plus" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-download" />
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="javascript:void(0);" className="dropdown-link">
                                                        <i className="la la-share-alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="external" data-audio="{&quot;name&quot;: &quot;Hey not me&quot;, &quot;artist&quot;: &quot;Rasomi Pelina&quot;, &quot;album&quot;: &quot;Find Soul&quot;, &quot;url&quot;: &quot;../assets/audio/ringtone-6.mp3&quot;, &quot;cover_art_url&quot;: &quot;../assets/images/cover/small/6.jpg&quot;}">
                                        <img src="../assets/images/cover/large/6.jpg" alt="Hey not me" className="card-img--radius-lg" />
                                    </a>
                                </div>
                                <a href="song-details.html" className="custom-card--link mt-2">
                                    <h6>Hey not me</h6>
                                    <p>Rasomi Pelina</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="backdrop header-backdrop" />
                <div className="backdrop sidebar-backdrop" />
                {/* Scripts */}
            </div>
        )

    }
}
export default Songs