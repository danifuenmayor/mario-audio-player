import React, { useEffect } from 'react';

const SingleAudio = props => {
    let audioRef = null;
    useEffect(() => {
        if(audioRef !== null){
        if(props.song.id === props.playingId){
            audioRef.play()
        }
        else{
            audioRef.pause()
        }
    }
    }, [props.playingId])
    
    return (
        <>
            <li className="list-group-item list-group-item-action bg-transparent text-white" onClick={() => audioRef.play()} >{props.song.id}. {props.song.name}
                <audio ref={(t) => audioRef = t} src={"https://assets.breatheco.de/apis/sound/" + props.song.url} />
            </li>
            <hr />
        </>
    )
}

export default SingleAudio;