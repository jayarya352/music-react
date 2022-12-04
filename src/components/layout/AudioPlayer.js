import react, { Component } from 'react';
import Helper from '../../Helper';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../custom.css';
class AudioPlayer extends Component {
    constructor() {
        super()
        this.state = {
            visibility: false,
            token: localStorage.getItem('_token'),
            apiResponse: '',
            error: false,
            favouriteClass: '',
            playlistVisibility:false
        }
    }

    handleModal() {
        this.setState({ visibility: true })
    }
    handlPlaylistModal() {
        this.setState({ playlistVisibility: true })
    }
    addToFav = (e) =>{
        var favourite_section = document.getElementById('favourite_section');
        var song_id = favourite_section.getAttribute('data-id');
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.state.token
            },
            body: JSON.stringify({ song_id: song_id })
        };
        const apiUrl = '/api/v1/front/favourite';
        const api = fetch(apiUrl, requestOptions)
        .then(res => res.json())
        .then(res => {
            if(res){
                if(res && res.message == 'Unauthenticated.'){
                    toast.error('token mismatch, please login again.');
                    localStorage.clear();
                } else if(res.status && res.status == 1){
                    if(this.state.favouriteClass == 'heartIcon'){
                        document.getElementById('favourite_section').classList.remove('heart-red');
                        this.setState({favouriteClass:''});
                    } else {
                        document.getElementById('favourite_section').classList.add('heart-red');
                        this.setState({favouriteClass:'heartIcon'});
                    }
                    
                    toast.success(res.message);
                }
            }
        })
        .catch(() => this.setState({ error: true }));
    }
    render(){
    
    const visibility = this.state.visibility;
    const playlistVisibility = this.state.playlistVisibility;
    return (
        
        <div id="audioPlayer" className="player-primary">
            <ToastContainer />
            {visibility ? <Helper visibility={visibility}/> : ''}
            {playlistVisibility ? <Helper playlistVisibility={playlistVisibility}/> : ''}
            {/* Begin | Audio Player Progress */}
            <div id="progress-container">
                <input type="range" className="amplitude-song-slider" />
                <progress className="audio-progress audio-progress--played amplitude-song-played-progress" />
                <progress className="audio-progress audio-progress--buffered amplitude-buffered-progress" value={0} />
            </div>
            {/* End | Audio Player Progress */}
            {/* Begin | Audio */}
            <div className="audio">
                <div className="song-image"><img data-amplitude-song-info="" src="" alt="" /></div>
                <div className="song-info pl-3">
                    <span className="song-name d-inline-block text-truncate" data-amplitude-song-info="name" />
                    <span className="song-artists d-block text-muted" data-amplitude-song-info="artist" />
                </div>
            </div>
            {/* End | Audio */}
            {/* Begin | Audio Controls */}
            <div className="audio-controls">
                <div className="audio-controls--left d-flex mr-auto">
                    <button className="btn btn-icon-only amplitude-repeat"><i className="ion-md-sync" /></button>
                </div>
                <div className="audio-controls--main d-flex">
                    <button className="btn btn-icon-only amplitude-prev"><i className="ion-md-skip-backward" /></button>
                    <button className="btn btn-air btn-pill btn-default btn-icon-only amplitude-play-pause">
                        <i className="ion-md-play" />
                        <i className="ion-md-pause" />
                    </button>
                    <button className="btn btn-icon-only amplitude-next"><i className="ion-md-skip-forward" /></button>
                </div>
                <div className="audio-controls--right d-flex ml-auto">
                    <button className="btn btn-icon-only amplitude-shuffle amplitude-shuffle-off"><i className="ion-md-shuffle" /></button>
                </div>
            </div>
            {/* End | Audio Controls */}
            {/* Begin | Audio Info */}
            <div className="audio-info d-flex align-items-center pr-4">
                <span className="mr-4">
                    <span className="amplitude-current-minutes" />:<span className="amplitude-current-seconds" /> /
                  <span className="amplitude-duration-minutes" />:<span className="amplitude-duration-seconds" />
                </span>
                <div className="audio-volume dropdown">
                    <button className="btn btn-icon-only" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="ion-md-volume-low" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right volume-dropdown-menu">
                        <input type="range" className="amplitude-volume-slider" defaultValue={100} />
                    </div>
                </div>
                <div className="dropleft">
                    <button className="btn btn-icon-only" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="la la-ellipsis-v" />
                    </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item">
                        { this.state.token == null ? (
                            <a href="javascript:void(0);" className="dropdown-link"  onClick={() => { this.handleModal() }}>
                                <i className="la la-heart-o" /> <span>Favorite</span>
                            </a>
                        ) : (
                            <a href="javascript:void(0);" className="dropdown-link" id='favourite_section' data-id=""  onClick={() => { this.addToFav() }}>
                                <i className="la la-heart" id={this.state.favouriteClass} /> <span>Favorite</span>
                            </a>
                        ) }
                            
                        </li>

                        <li className="dropdown-item">
                        { this.state.token == null ? (
                            <a href="javascript:void(0);" className="dropdown-link">
                                <i className="la la-plus" /> <span>Add to Playlist</span>
                            </a>
                        ) : (
                            <a href="javascript:void(0);" className="dropdown-link" onClick={() => { this.handlPlaylistModal() }}>
                                <i className="la la-plus" /> <span>Add to Playlist</span>
                            </a>
                        ) }
                            
                        </li>
                        <li className="dropdown-item">
                            <a href="javascript:void(0);" className="dropdown-link">
                                <i className="la la-download" /> <span>Download</span>
                            </a>
                        </li>
                        <li className="dropdown-item">
                            <a href="javascript:void(0);" className="dropdown-link">
                                <i className="la la-share-alt" /> <span>Share</span>
                            </a>
                        </li>
                        <li className="dropdown-item">
                            <a href="song-details.html" className="dropdown-link">
                                <i className="la la-info-circle" />
                                <span>Song Info</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
            {/* End | Audio Info */}
        </div>
    )}
}

export default AudioPlayer