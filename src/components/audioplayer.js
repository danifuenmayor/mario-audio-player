import React, { useState } from 'react';
import SingleAudio from './SingleAudio';

const AudioPlayer = props => {
    const [playingId, setPlayingId] = useState();

    const playNext = () => {
        if(playingId >= props.audios.length)
            return;
        setPlayingId(playingId => playingId + 1)
    }
    const playPrevious = () => {
        if(playingId <= 1)
            return;
        setPlayingId(playingId => playingId -1)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="text-info mt-3">Mario music player</h1>
                        <hr/>
                        <ol className="list-group my-3">
                            {props.audios.length > 0 &&
                                props.audios.map((elem, i) => {
                                    return <SingleAudio key={elem.id} playingId={playingId} song={elem} />
                                })
                            }
                       <div>
                            <i onClick={playPrevious}className="fas fa-step-backward text-info pr-5 btn btn"></i>
                            <i onClick={() => setPlayingId(props.audios[0].id) } className="fas fa-play text-info p-5 btn btn"></i> 
                            <i onClick={playNext} className="fas fa-step-forward text-info p-5 btn btn"></i>
                           </div>
                        </ol>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AudioPlayer;