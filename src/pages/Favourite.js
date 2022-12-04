import react, { Component } from 'react'

class Favourite extends Component {

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

            </div>
        )
    }
}

export default Favourite