import react, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            lists: []
        };
    }

    componentDidMount() {
        const apiUrl = '/api/v1/front/home';
        fetch(apiUrl)
        .then(res => res.json())
        .then(res => this.setState({ lists: res }))
        .catch(() => this.setState({ error: true }));
    }

    render() {

        const settings = {
            dots: true,
            infinite: false,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 5
        };

        const settings2 = {
            dots: true,
            infinite: false,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        const { error, lists } = this.state;
        console.log(lists);
        if (error) {
            return (
                <div>Error: {error.message}</div>
            )
        } else {

            return (
                <div>
                    <div className="main-container" id="appRoute">


                        <div className="section">
                            <div className="heading">
                                <div className="d-flex flex-wrap align-items-end">
                                    <div className="flex-grow-1">
                                        <h4>New Releases</h4>
                                        <p>Listen recently release music</p>
                                    </div>
                                    <Link to={"/songs/tag/latest-release"} className="btn btn-sm btn-pill btn-air btn-primary">View All</Link>
                                </div>
                                <hr />
                            </div>
                            {/* <div className="carousel-item-5 arrow-pos-3"> */}
                            <Slider {...settings}>
                                {lists.latest_release && lists.latest_release.map(latest_release => (
                                    <div>
                                        <div className="card" key={latest_release.id}>
                                        <a href="javascript:void(0);" class="external" data-audio={"{"+'"name"'+':'+ '"'+latest_release.name+'"' +','+ '"artist"'+':'+ '"Arebica Luna"'+','+ '"album"'+':'+ '"Mummy"' +','+ '"url"'+':'+ '"'+latest_release.song_file+'"' +','+ '"cover_art_url"'+':'+ '"'+latest_release.thumbnail_128+'"' + "}"}>
                                            <img class="card-img-top" src={latest_release.thumbnail_320} alt="Card image cap"></img>
                                        </a>
                                        </div>
                                        <Link to={"/song/"+latest_release.song_slug+""} class="custom-card--link mt-2" tabindex="0"><h6 class="mb-0">{latest_release.name}</h6></Link>

                                    </div>
                                ))}
                            </Slider>

                            {/* </div> */}
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
                                    <Link to={"/songs/tag/featured-artists"} className="btn btn-sm btn-pill btn-air btn-primary">View All</Link>
                                </div>
                                <hr />
                            </div>
                            <Slider {...settings}>
                                {lists.featured_artists && lists.featured_artists.map(featured_artists => (
                                    <div>
                                        <div className="card" key={featured_artists.id}>
                                            <img class="card-img-top" src="http://localhost/music/assets/Artist/Ruhanartist5.jpg" alt="Card image cap"></img>

                                        </div>
                                        <a href="artist-details.html" class="custom-card--link mt-2" tabindex="0"><h6 class="mb-0">{featured_artists.name}</h6></a>

                                    </div>
                                ))}
                            </Slider>
                        </div>
                        {/* End | Section */}
                        {/* Begin | Section [[ Find at scss/base/core.scss ]] */}

                        {lists.playlists && lists.playlists.map(playlists_data => (

                            <div className="section" key={playlists_data.id}>
                                <div className="heading">
                                    <div className="d-flex flex-wrap align-items-end">
                                        <div className="flex-grow-1">
                                            <h4>{playlists_data.name}</h4>
                                            <p>You best to listen</p>
                                        </div>
                                        <Link to={"/songs/tag/"+playlists_data.slug} className="btn btn-sm btn-pill btn-air btn-primary">View All</Link>
                                    </div>
                                    <hr />
                                </div>
                                <Slider {...settings2}>
                                    {playlists_data.value.map((data, i) => (
                                        <div>
                                            <div className="card" key={i}>
                                            <a href="javascript:void(0);" class="external" data-audio={"{"+'"name"'+':'+ '"'+data.name+'"' +','+ '"artist"'+':'+ '"Arebica Luna"'+','+ '"album"'+':'+ '"Mummy"' +','+ '"url"'+':'+ '"'+data.song_file+'"' +','+ '"cover_art_url"'+':'+ '"'+data.thumbnail_128+'"' + "}"}>
                                                <img class="card-img-top" src={data.thumbnail_320} alt="Card image cap"></img>
                                            </a>
                                            </div>
                                            <Link to={"/song/"+data.song_slug+""} class="custom-card--link mt-2" tabindex="0"><h6 class="mb-0">{data.name}</h6></Link>
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                        ))}

                        {/* End | Section */}

                    </div>





                    {/* Back Drop */}
                    <div className="backdrop header-backdrop" />
                    <div className="backdrop sidebar-backdrop" />
                    {/* Scripts */}
                </div>
            )
        }
    }

}

export default Home