function songdetails(){
    return (
        <div className="main-container" id="appRoute">
            <div className="row section text-center text-md-left">
                <div className="col-xl-3 col-lg-4 col-sm-5">
                    <img src="../assets/images/cover/large/2.jpg" alt="" className="card-img--radius-lg"/>
                </div>
                <div className="col-xl-9 col-lg-8 col-sm-7">
                    <div className="row pt-4">
                        <div className="col-xl-8 col-lg-6">
                            <h5>Shack your butty</h5>
                            <p>Gerrina Linda</p>
                            <div className="text-warning stars">
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star-half-empty"></i>
                            </div>
                            <span className="badge badge-pill badge-warning mt-3">Premium</span>
                            <div className="mt-4">
                                <a href="javascript:void(0);" className="btn btn-pill btn-air btn-bold btn-danger external" data-audio='{"name": "Shack your butty", "artist": "Gerrina Linda", "album": "Hot Shot", "url": "../assets/audio/ringtone-2.mp3", "cover_art_url": "../assets/images/cover/small/2.jpg"}'>Play</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="pt-3 pt-lg-0 text-lg-right">
                                <button className="btn btn-pill btn-air btn-danger btn-icon-only"><i className="la la-heart-o"></i></button>
                                <button className="btn btn-pill btn-air btn-warning btn-icon-only"><i className="la la-plus"></i></button>
                                <button className="btn btn-pill btn-air btn-success btn-icon-only"><i className="la la-download"></i></button>
                                <button className="btn btn-pill btn-air btn-brand btn-icon-only"><i className="la la-share-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <ul className="nav nav-tabs line-tabs line-tabs-primary text-uppercase mb-4" id="songDetails" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="lyrics-tab" data-toggle="tab" href="#lyrics" role="tab" aria-controls="lyrics" aria-selected="false">Lyrics</a>
                    </li>
                </ul>
                <div className="tab-content" id="songDetailsContent">
                    <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item pl-0 border-0">Compose by: <span className="font-weight-bold">Gerrina Linda</span></li>
                            <li className="list-group-item pl-0 border-0">Lyrics by: <span className="font-weight-bold">Gerrina Linda</span></li>
                            <li className="list-group-item pl-0 border-0">Music Director: <span className="font-weight-bold">Gerrina Linda</span></li>
                            <li className="list-group-item pl-0 border-0">Downloads: <span className="font-weight-bold">10,234,014</span></li>
                        </ul>
                    </div>
                    <div className="tab-pane fade show" id="lyrics" role="tabpanel" aria-labelledby="lyrics-tab">
                        <p>This one's for you Mrs Van De Kamp!</p>
                        
                    </div>
                </div>
            </div>
            <div className="section">

                <div className="heading">
                    <div className="d-flex flex-wrap align-items-end">
                        <div className="flex-grow-1">
                            <h4>Album Songs</h4>
                        </div>
                        <a href="songs.html" className="btn btn-sm btn-pill btn-air btn-primary">View Album</a>
                    </div>
                    <hr/>
                </div>

                <div className="carousel-item-5 arrow-pos-3">
                    <div className="custom-card">
                        <div className="custom-card--img">
                            <div className="custom-card--info">
                                <div className="dropdown dropdown-icon">
                                    <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ion-md-more"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link favorite">
                                                <i className="la la-heart-o"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-plus"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-download"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-share-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="javascript:void(0);" className="external" data-audio='{"name": "I Love You Mummy", "artist": "Arebica Luna", "album": "Mummy", "url": "../assets/audio/ringtone-1.mp3", "cover_art_url": "../assets/images/cover/small/1.jpg"}'>
                                <img src="../assets/images/cover/large/1.jpg" alt="I Love You Mummy" className="card-img--radius-lg"/>
                            </a>
                        </div>

                        <a href="song-details.html" className="custom-card--link mt-2">
                            <h6>I Love You Mummy</h6>
                            <p>Arebica Luna</p>
                        </a>
                    </div>
                    <div className="custom-card">
                        <div className="custom-card--img">
                            <div className="custom-card--info">
                                <div className="dropdown dropdown-icon">
                                    <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ion-md-more"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link favorite">
                                                <i className="la la-heart-o"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-plus"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-download"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-share-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="javascript:void(0);" className="external" data-audio='{"name": "Shack your butty", "artist": "Gerrina Linda", "album": "Hot Shot", "url": "../assets/audio/ringtone-2.mp3", "cover_art_url": "../assets/images/cover/small/2.jpg"}'>
                                <img src="../assets/images/cover/large/2.jpg" alt="Shack your butty" className="card-img--radius-lg"/>
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
                                <div className="dropdown dropdown-icon">
                                    <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ion-md-more"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link favorite">
                                                <i className="la la-heart-o"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-plus"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-download"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-share-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="javascript:void(0);" className="external" data-audio='{"name": "Do it your way(Female)", "artist": "Zunira Willy & Nutty Nina", "album": "Own Way", "url": "../assets/audio/ringtone-3.mp3", "cover_art_url": "../assets/images/cover/small/3.jpg"}'>
                                <img src="../assets/images/cover/large/3.jpg" alt="Do it your way(Female)" className="card-img--radius-lg"/>
                            </a>
                        </div>

                        <a href="song-details.html" className="custom-card--link mt-2">
                            <h6>Do it your way(Female)</h6>
                            <p>Zunira Willy & Nutty Nina</p>
                        </a>
                    </div>
                    <div className="custom-card">
                        <div className="custom-card--img">
                            <div className="custom-card--info">
                                <div className="dropdown dropdown-icon">
                                    <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ion-md-more"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link favorite">
                                                <i className="la la-heart-o"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-plus"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-download"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-share-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="javascript:void(0);" className="external" data-audio='{"name": "Say yes", "artist": "Johnny Marro", "album": "Say yes", "url": "../assets/audio/ringtone-4.mp3", "cover_art_url": "../assets/images/cover/small/4.jpg"}'>
                                <img src="../assets/images/cover/large/4.jpg" alt="Say yes" className="card-img--radius-lg"/>
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
                                <div className="dropdown dropdown-icon">
                                    <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ion-md-more"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link favorite">
                                                <i className="la la-heart-o"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-plus"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-download"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-share-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="javascript:void(0);" className="external" data-audio='{"name": "Where is your letter", "artist": "Jina Moore & Lenisa Gory", "album": "Letter", "url": "../assets/audio/ringtone-5.mp3", "cover_art_url": "../assets/images/cover/small/5.jpg"}'>
                                <img src="../assets/images/cover/large/5.jpg" alt="Where is your letter" className="card-img--radius-lg"/>
                            </a>
                        </div>

                        <a href="song-details.html" className="custom-card--link mt-2">
                            <h6>Where is your letter</h6>
                            <p>Jina Moore & Lenisa Gory</p>
                        </a>
                    </div>
                    <div className="custom-card">
                        <div className="custom-card--img">
                            <div className="custom-card--info">
                                <div className="dropdown dropdown-icon">
                                    <a href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ion-md-more"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link favorite">
                                                <i className="la la-heart-o"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-plus"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-download"></i>
                                            </a>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="javascript:void(0);" className="dropdown-link">
                                                <i className="la la-share-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="javascript:void(0);" className="external" data-audio='{"name": "Hey not me", "artist": "Rasomi Pelina", "album": "Find Soul", "url": "../assets/audio/ringtone-6.mp3", "cover_art_url": "../assets/images/cover/small/6.jpg"}'>
                                <img src="../assets/images/cover/large/6.jpg" alt="Hey not me" className="card-img--radius-lg"/>
                            </a>
                        </div>

                        <a href="song-details.html" className="custom-card--link mt-2">
                            <h6>Hey not me</h6>
                            <p>Rasomi Pelina</p>
                        </a>
                    </div>
                </div>

            </div>
            <div className="section">
                <div className="mb-4">
                    <div className="d-flex mb-3">
                        <span>Rate:</span>
                        <div className="text-warning stars pl-2">
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                        </div>
                    </div>
                    <textarea name="comment" id="comment" cols="30" rows="5" className="form-control"></textarea>
                    <div className="text-right mt-2">
                        <button className="btn btn-info">Comment</button>
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <div className="avatar avatar-sm avatar-circle">
                        <img src="../assets/images/users/thumb.jpg" alt=""/>
                    </div>
                    <div className="pl-3 flex-grow-1 flex-basis-0">
                        <span className="d-block font-weight-bold mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing</span>
                        <div className="text-warning stars mb-2 font-md">
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star-half-empty"></i>
                        </div>
                        <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi debitis eaque iusto labore, officiis perspiciatis quisquam! Cumque delectus excepturi ipsum maiores numquam officia omnis porro quae quam sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate est et eveniet excepturi exercitationem, fugiat incidunt nesciunt odio placeat reprehenderit sed soluta tempore velit voluptatum. Adipisci delectus nesciunt tempore!</p>
                        <a href="#" className="btn p-0"><i className="la la-reply"></i> Reply</a>
                    </div>
                </div>
                <div className="ml-5 mb-4">
                    <div className="d-flex mb-4">
                        <div className="avatar avatar-sm avatar-circle">
                            <img src="../assets/images/users/thumb.jpg" alt=""/>
                        </div>
                        <div className="pl-3 flex-grow-1 flex-basis-0">
                            <span className="d-block font-weight-bold mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing</span>
                            <div className="text-warning stars mb-2 font-md">
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star"></i>
                                <i className="la la-star-half-empty"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi debitis eaque iusto labore, officiis perspiciatis quisquam! Cumque delectus excepturi ipsum maiores numquam officia omnis porro quae quam sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate est et eveniet excepturi exercitationem, fugiat incidunt nesciunt odio placeat reprehenderit sed soluta tempore velit voluptatum. Adipisci delectus nesciunt tempore!</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="avatar avatar-sm avatar-circle">
                        <img src="../assets/images/users/thumb.jpg" alt=""/>
                    </div>
                    <div className="pl-3 flex-grow-1 flex-basis-0">
                        <span className="d-block font-weight-bold mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing</span>
                        <div className="text-warning stars mb-2 font-md">
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star"></i>
                            <i className="la la-star-half-empty"></i>
                        </div>
                        <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi debitis eaque iusto labore, officiis perspiciatis quisquam! Cumque delectus excepturi ipsum maiores numquam officia omnis porro quae quam sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate est et eveniet excepturi exercitationem, fugiat incidunt nesciunt odio placeat reprehenderit sed soluta tempore velit voluptatum. Adipisci delectus nesciunt tempore!</p>
                        <a href="#" className="btn p-0"><i className="la la-reply"></i> Reply</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default songdetails