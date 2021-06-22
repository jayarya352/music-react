
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>

            {/* Begin | Main Container [[ Find at scss/base/core.scss ]] */}
            <div className="main-container" id="appRoute">


                <div className="section">
                    <div className="heading">
                        <div className="d-flex flex-wrap align-items-end">
                            <div className="flex-grow-1">
                                <h4>New Releases</h4>
                                <p>Listen recently release music</p>
                            </div>
                            <Link to={"/songs/new-release"} className="btn btn-sm btn-pill btn-air btn-primary">View All</Link>
                        </div>
                        <hr />
                    </div>
                    <div className="carousel-item-5 arrow-pos-3">
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
                {/* End | Section */}
                {/* Begin | Section [[ Find at scss/base/core.scss ]] */}
                <div className="section">
                    <div className="heading">
                        <div className="d-flex flex-wrap align-items-end">
                            <div className="flex-grow-1">
                                <h4>Featured Artists</h4>
                                <p>Select you best to listen</p>
                            </div>
                            <Link to={"/artists/featured-artists"} className="btn btn-sm btn-pill btn-air btn-primary">View All</Link>
                        </div>
                        <hr />
                    </div>
                    <div className="carousel-item-6 arrow-pos-2">
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="artist-details.html">
                                    <img src="../assets/images/cover/large/1.jpg" alt="Arebica Luna" className="card-img--radius-lg" />
                                </a>
                            </div>
                            <a href="artist-details.html" className="custom-card--link mt-2">
                                <h6 className="mb-0">Arebica Luna</h6>
                            </a>
                        </div>
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="artist-details.html">
                                    <img src="../assets/images/cover/large/2.jpg" alt="Gerrina Linda" className="card-img--radius-lg" />
                                </a>
                            </div>
                            <a href="artist-details.html" className="custom-card--link mt-2">
                                <h6 className="mb-0">Gerrina Linda</h6>
                            </a>
                        </div>
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="artist-details.html">
                                    <img src="../assets/images/cover/large/3.jpg" alt="Zunira Willy" className="card-img--radius-lg" />
                                </a>
                            </div>
                            <a href="artist-details.html" className="custom-card--link mt-2">
                                <h6 className="mb-0">Zunira Willy</h6>
                            </a>
                        </div>
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="artist-details.html">
                                    <img src="../assets/images/cover/large/4.jpg" alt="Johnny Marro" className="card-img--radius-lg" />
                                </a>
                            </div>
                            <a href="artist-details.html" className="custom-card--link mt-2">
                                <h6 className="mb-0">Johnny Marro</h6>
                            </a>
                        </div>
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="artist-details.html">
                                    <img src="../assets/images/cover/large/5.jpg" alt="Jina Moore" className="card-img--radius-lg" />
                                </a>
                            </div>
                            <a href="artist-details.html" className="custom-card--link mt-2">
                                <h6 className="mb-0">Jina Moore</h6>
                            </a>
                        </div>
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="artist-details.html">
                                    <img src="../assets/images/cover/large/6.jpg" alt="Rasomi Pelina" className="card-img--radius-lg" />
                                </a>
                            </div>
                            <a href="artist-details.html" className="custom-card--link mt-2">
                                <h6 className="mb-0">Rasomi Pelina</h6>
                            </a>
                        </div>
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="artist-details.html">
                                    <img src="../assets/images/cover/large/9.jpg" alt="Lenisa Gory" className="card-img--radius-lg" />
                                </a>
                            </div>
                            <a href="artist-details.html" className="custom-card--link mt-2">
                                <h6 className="mb-0">Lenisa Gory</h6>
                            </a>
                        </div>
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="artist-details.html">
                                    <img src="../assets/images/cover/large/10.jpg" alt="Nutty Nina" className="card-img--radius-lg" />
                                </a>
                            </div>
                            <a href="artist-details.html" className="custom-card--link mt-2">
                                <h6 className="mb-0">Nutty Nina</h6>
                            </a>
                        </div>
                    </div>
                </div>
                {/* End | Section */}
                {/* Begin | Section [[ Find at scss/base/core.scss ]] */}
                <div className="section">
                    <div className="heading">
                        <div className="d-flex flex-wrap align-items-end">
                            <div className="flex-grow-1">
                                <h4>Your Playlist</h4>
                                <p>You best to listen</p>
                            </div>
                            <a href="playlist.html" className="btn btn-sm btn-pill btn-air btn-primary">View All</a>
                        </div>
                        <hr />
                    </div>
                    <div className="carousel-item-4 arrow-pos-1">
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="javascript:void(0);">
                                    <img src="../assets/images/background/horizontal/1.jpg" alt="DJ Remix" className="card-img--radius-lg" />
                                    <span className="bg-blur">DJ Remix</span>
                                </a>
                            </div>
                        </div>
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="javascript:void(0);">
                                    <img src="../assets/images/background/horizontal/2.jpg" alt="Rock Band" className="card-img--radius-lg" />
                                    <span className="bg-blur">Rock Band</span>
                                </a>
                            </div>
                        </div>
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="javascript:void(0);">
                                    <img src="../assets/images/background/horizontal/3.jpg" alt="Solo Special" className="card-img--radius-lg" />
                                    <span className="bg-blur">Solo Special</span>
                                </a>
                            </div>
                        </div>
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="javascript:void(0);">
                                    <img src="../assets/images/background/horizontal/4.jpg" alt="Romantic" className="card-img--radius-lg" />
                                    <span className="bg-blur">Romantic</span>
                                </a>
                            </div>
                        </div>
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="javascript:void(0);">
                                    <img src="../assets/images/background/horizontal/5.jpg" alt="GYM" className="card-img--radius-lg" />
                                    <span className="bg-blur">GYM</span>
                                </a>
                            </div>
                        </div>
                        <div className="custom-card">
                            <div className="custom-card--img">
                                <a href="javascript:void(0);">
                                    <img src="../assets/images/background/horizontal/6.jpg" alt="Retro Special" className="card-img--radius-lg" />
                                    <span className="bg-blur">Retro Special</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End | Section */}

            </div>





            {/* Back Drop */}
            <div className="backdrop header-backdrop" />
            <div className="backdrop sidebar-backdrop" />
            {/* Scripts */}
        </div>
    )
}

export default Home