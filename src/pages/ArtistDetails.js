function artistdetails() {
    return (
        <div class="main-container" id="appRoute">
            <div class="row section text-center text-md-left">
                <div class="col-xl-3 col-lg-4 col-sm-5">
                    <img src="../assets/images/cover/large/10.jpg" alt="" class="card-img--radius-lg"/>
                </div>
                <div class="col-xl-9 col-lg-8 col-sm-7">
                    <div class="row pt-4">
                        <div class="col-xl-8 col-lg-6">
                            <h5>Nutty Nina</h5>
                            <p>DOB: 12/03/1986</p>
                            <div class="text-warning stars">
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star-half-empty"></i>
                            </div>
                            <div class="mt-4">
                                <a href="javascript:void(0);" class="btn btn-pill btn-air btn-bold btn-danger">Play All</a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6">
                            <div class="pt-3 pt-lg-0 text-lg-right">
                                <button class="btn btn-pill btn-air btn-danger btn-icon-only"><i class="la la-heart-o"></i></button>
                                <button class="btn btn-pill btn-air btn-brand btn-icon-only"><i class="la la-share-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <ul class="nav nav-tabs line-tabs line-tabs-primary text-uppercase mb-4" id="artistDetails" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="song-tab" data-toggle="tab" href="#song" role="tab" aria-controls="song" aria-selected="true">Top Songs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="album-tab" data-toggle="tab" href="#album" role="tab" aria-controls="album" aria-selected="false">Top Albums</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="bio-tab" data-toggle="tab" href="#bio" role="tab" aria-controls="bio" aria-selected="false">Biography</a>
                    </li>
                </ul>

                <div class="tab-content" id="artistDetailsContent">
                    <div class="tab-pane fade show active" id="song" role="tabpanel" aria-labelledby="song-tab">
                        <div class="row align-items-end">
                            <span class="col-6 font-weight-bold">125 Track</span>
                            <div class="col-6 ml-auto">
                                <form action="#" class="form-inline justify-content-end">
                                    <label class="mr-2" for="filter1">Sorted By:</label>
                                    <select class="custom-select mr-sm-2" id="filter1">
                                        <option selected>Popular</option>
                                        <option value="1">A-Z</option>
                                        <option value="2">Z-A</option>
                                    </select>
                                </form>
                            </div>
                            <div class="col-12"><hr/></div>
                        </div>
              
                        <div class="custom-list">
                            
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/1.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">I Love You Mummy</p>
                                        <p class="text-truncate text-muted font-sm">Arebica Luna</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li><span class="badge badge-pill badge-warning"><i class="la la-star"></i></span></li>
                                    <li>05:03</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                           
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/2.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">Shack your butty</p>
                                        <p class="text-truncate text-muted font-sm">Gerrina Linda</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li>04:12</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
    
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/3.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">Do it your way(Female)</p>
                                        <p class="text-truncate text-muted font-sm">Zunira Willy & Nutty Nina</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li><span class="badge badge-pill badge-danger"><i class="la la-heart"></i></span></li>
                                    <li><span class="badge badge-pill badge-warning"><i class="la la-star"></i></span></li>
                                    <li>03:10</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                           
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/4.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">Say yes</p>
                                        <p class="text-truncate text-muted font-sm">Johnny Marro</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li>06:16</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                           
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/5.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">Where is your letter</p>
                                        <p class="text-truncate text-muted font-sm">Jina Moore & Lenisa Gory</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li><span class="badge badge-pill badge-danger"><i class="la la-heart"></i></span></li>
                                    <li>05:35</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                           
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/6.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">Hey not me</p>
                                        <p class="text-truncate text-muted font-sm">Rasomi Pelina</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li>04:54</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/7.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">Deep inside</p>
                                        <p class="text-truncate text-muted font-sm">Pimila Holliwy</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li>05:47</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade show" id="album" role="tabpanel" aria-labelledby="album-tab">
                        <div class="row align-items-end">
                            <span class="col-6 font-weight-bold">12 Album</span>
                            <div class="col-6 ml-auto">
                                <form action="#" class="form-inline justify-content-end">
                                    <label class="mr-2" for="filter2">Sorted By:</label>
                                    <select class="custom-select mr-sm-2" id="filter2">
                                        <option selected>Popular</option>
                                        <option value="1">A-Z</option>
                                        <option value="2">Z-A</option>
                                    </select>
                                </form>
                            </div>
                            <div class="col-12"><hr/></div>
                        </div>
                        <div class="custom-list">
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/1.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">I Love You Mummy</p>
                                        <p class="text-truncate text-muted font-sm">Arebica Luna</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li><span class="badge badge-pill badge-warning"><i class="la la-star"></i></span></li>
                                    <li>05:03</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/2.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">Shack your butty</p>
                                        <p class="text-truncate text-muted font-sm">Gerrina Linda</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li>04:12</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/3.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">Do it your way(Female)</p>
                                        <p class="text-truncate text-muted font-sm">Zunira Willy & Nutty Nina</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li><span class="badge badge-pill badge-danger"><i class="la la-heart"></i></span></li>
                                    <li><span class="badge badge-pill badge-warning"><i class="la la-star"></i></span></li>
                                    <li>03:10</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/4.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">Say yes</p>
                                        <p class="text-truncate text-muted font-sm">Johnny Marro</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li>06:16</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/5.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">Where is your letter</p>
                                        <p class="text-truncate text-muted font-sm">Jina Moore & Lenisa Gory</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li><span class="badge badge-pill badge-danger"><i class="la la-heart"></i></span></li>
                                    <li>05:35</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/6.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">Hey not me</p>
                                        <p class="text-truncate text-muted font-sm">Rasomi Pelina</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li>04:54</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="custom-list--item">
                                <div class="text-dark custom-card--inline">
                                    <div class="custom-card--inline-img">
                                        <img src="../assets/images/cover/small/7.jpg" alt="" class="card-img--radius-sm"/>
                                    </div>

                                    <div class="custom-card--inline-desc">
                                        <p class="text-truncate mb-0">Deep inside</p>
                                        <p class="text-truncate text-muted font-sm">Pimila Holliwy</p>
                                    </div>
                                </div>
                                <ul class="custom-card--labels d-flex ml-auto">
                                    <li>05:47</li>
                                    <li class="dropleft">
                                        <a href="javascript:void(0);" class="btn btn-icon-only p-0 w-auto h-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="la la-ellipsis-h"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link favorite">
                                                    <i class="la la-heart-o"></i>
                                                    <span>Favorite</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-plus"></i>
                                                    <span>Add to Playlist</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-download"></i>
                                                    <span>Download</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="javascript:void(0);" class="dropdown-link">
                                                    <i class="la la-share-alt"></i>
                                                    <span>Share</span>
                                                </a>
                                            </li>
                                            <li class="dropdown-item">
                                                <a href="song-details.html" class="dropdown-link">
                                                    <i class="la la-info-circle"></i>
                                                    <span>Song Info</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade show" id="bio" role="tabpanel" aria-labelledby="bio-tab">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ex magnam magni odit praesentium, recusandae reiciendis sequi tempora? Ad commodi consequatur deleniti dolorum fugiat iste minima rerum sed similique voluptate.</p>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="mb-4">
                    <div class="d-flex mb-3">
                        <span>Rate:</span>
                        <div class="text-warning stars pl-2">
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                        </div>
                    </div>
                    <textarea name="comment" id="comment" cols="30" rows="5" class="form-control"></textarea>
                    <div class="text-right mt-2">
                        <button class="btn btn-info">Comment</button>
                    </div>
                </div>
                <div class="d-flex mb-4">
                    <div class="avatar avatar-sm avatar-circle">
                        <img src="../assets/images/users/thumb.jpg" alt=""/>
                    </div>
                    <div class="pl-3 flex-grow-1 flex-basis-0">
                        <span class="d-block font-weight-bold mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing</span>
                        <div class="text-warning stars mb-2 font-md">
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star-half-empty"></i>
                        </div>
                        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi debitis eaque iusto labore, officiis perspiciatis quisquam! Cumque delectus excepturi ipsum maiores numquam officia omnis porro quae quam sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate est et eveniet excepturi exercitationem, fugiat incidunt nesciunt odio placeat reprehenderit sed soluta tempore velit voluptatum. Adipisci delectus nesciunt tempore!</p>
                        <a href="#" class="btn p-0"><i class="la la-reply"></i> Reply</a>
                    </div>
                </div>
                <div class="ml-5 mb-4">
                    <div class="d-flex mb-4">
                        <div class="avatar avatar-sm avatar-circle">
                            <img src="../assets/images/users/thumb.jpg" alt=""/>
                        </div>
                        <div class="pl-3 flex-grow-1 flex-basis-0">
                            <span class="d-block font-weight-bold mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing</span>
                            <div class="text-warning stars mb-2 font-md">
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star"></i>
                                <i class="la la-star-half-empty"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi debitis eaque iusto labore, officiis perspiciatis quisquam! Cumque delectus excepturi ipsum maiores numquam officia omnis porro quae quam sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate est et eveniet excepturi exercitationem, fugiat incidunt nesciunt odio placeat reprehenderit sed soluta tempore velit voluptatum. Adipisci delectus nesciunt tempore!</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="avatar avatar-sm avatar-circle">
                        <img src="../assets/images/users/thumb.jpg" alt=""/>
                    </div>
                    <div class="pl-3 flex-grow-1 flex-basis-0">
                        <span class="d-block font-weight-bold mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing</span>
                        <div class="text-warning stars mb-2 font-md">
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star-half-empty"></i>
                        </div>
                        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi debitis eaque iusto labore, officiis perspiciatis quisquam! Cumque delectus excepturi ipsum maiores numquam officia omnis porro quae quam sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate est et eveniet excepturi exercitationem, fugiat incidunt nesciunt odio placeat reprehenderit sed soluta tempore velit voluptatum. Adipisci delectus nesciunt tempore!</p>
                        <a href="#" class="btn p-0"><i class="la la-reply"></i> Reply</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default artistdetails