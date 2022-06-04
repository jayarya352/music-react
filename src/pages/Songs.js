import { Link } from 'react-router-dom';
import React, { Component } from 'react'

class Songs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            lists: {}
        };

    }

    async componentDidMount() {
        const name = this.props.match.params.name;
        const apiUrl = '/api/v1/front/songs/tag/'+ name + '';

        fetch(apiUrl)
            .then(res => res.json())
            .then(res => this.setState({ lists: res }))
            .catch(() => this.setState({ error: true }));
    }

    render() {
        const { error, lists } = this.state;
        return (
            <div>
                <div className="main-container" id="appRoute">

                    <div className="row align-items-end">
                        <span className="col-6 font-weight-bold">{lists.data && lists.data.length} Results</span>
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
                        {lists.data && lists.data.map(data => (

                            <div className="col-xl-3 col-lg-4 col-sm-6 pb-4" key={data.id}>
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
                                        
                                        <a href="javascript:void(0);" className="external" data-audio={"{"+'"name"'+':'+ '"'+data.name+'"' +','+ '"artist"'+':'+ '"Arebica Luna"'+','+ '"album"'+':'+ '"Mummy"' +','+ '"url"'+':'+ '"'+window.location.origin+'/'+data.song_file+'"' +','+ '"cover_art_url"'+':'+ '""' + "}"}>
                                            <img src={data.thumbnail_320} alt="I Love You Mummy" className="card-img--radius-lg" />
                                        </a>
                                    </div>
                                    <Link to={"/song/"+data.song_slug+""} className="custom-card--link mt-2">
                                        <h6>{data.name}</h6>
                                        <p>Arebica Luna</p>
                                    </Link>
                                </div>
                            </div>
                        ))}

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