import react, { Component } from 'react'

class SongDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            lists: {},
            isLoaded: false,
        };

    }

    async componentDidMount() {
        const name = this.props.match.params.name;
        const apiUrl = '/api/v1/front/songs/' + name + '';

        fetch(apiUrl)
            .then(res => res.json())
            .then(res => this.setState(
                {
                    lists: res,
                    isLoaded: true
                }
            ))
            .catch(() => this.setState({ error: true }));
    }

    render() {
        const { error, lists, isLoaded } = this.state;
        return (
            <div className="main-container" id="appRoute">
                <div className="row section text-center text-md-left">
                    <div className="col-xl-3 col-lg-4 col-sm-5">
                        <img src={lists.data && lists.data.thumbnail_320} alt="" className="card-img--radius-lg" />
                    </div>
                    <div className="col-xl-9 col-lg-8 col-sm-7">
                        <div className="row pt-4">
                            <div className="col-xl-8 col-lg-6">
                                <h5>{lists.data && lists.data.song_name}</h5>
                                {lists.data && lists.data.singers.map(data => (
                                    <p>{data.name}</p>
                                ))}
                                {/* <div className="text-warning stars">
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star"></i>
                                    <i className="la la-star-half-empty"></i>
                                </div> */}
                                {/* <span className="badge badge-pill badge-warning mt-3">Premium</span> */}
                                <div className="mt-4">
                                    {lists.data ? (
                                        <a href="javascript:void(0);" className="btn btn-pill btn-air btn-bold btn-danger external" data-audio={"{" + '"name"' + ':' + '"' + lists.data.song_name + '"' + ',' + '"artist"' + ':' + '"Arebica Luna"' + ',' + '"album"' + ':' + '"Mummy"' + ',' + '"url"' + ':' + '"' + window.location.origin + '/' + lists.data.song_file + '"' + ',' + '"cover_art_url"' + ':' + '""' + "}"}>Play</a>
                                    ) : (
                                        ''
                                    )}

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
                            <li className="list-group-item pl-0 border-0">Singers: 
                                    {lists.data && lists.data.singers.map(data => (
                                        <span className="font-weight-bold"> {data.name}</span>
                                    ))}
                                </li>
                                <li className="list-group-item pl-0 border-0">Composer By: 
                                    {lists.data && lists.data.composers.map(data => (
                                        <span className="font-weight-bold"> {data.name}</span>
                                    ))}
                                </li>
                                <li className="list-group-item pl-0 border-0">Lyrics By: 
                                    {lists.data && lists.data.lyricists.map(data => (
                                        <span className="font-weight-bold"> {data.name}</span>
                                    ))}
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane fade show" id="lyrics" role="tabpanel" aria-labelledby="lyrics-tab">
                            <p>This one's for you Mrs Van De Kamp!</p>

                        </div>
                    </div>
                </div>

                {/* <div className="section">
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
                            <img src="../assets/images/users/thumb.jpg" alt="" />
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
                                <img src="../assets/images/users/thumb.jpg" alt="" />
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
                            <img src="../assets/images/users/thumb.jpg" alt="" />
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
                </div> */}

            </div>
        )
    }
}

export default SongDetails