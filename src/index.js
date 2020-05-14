import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import AudioPlayer from './components/audioplayer'

const Home = props => {
    const [state] = useState({
        audios: [
            { "id":1, "category":"game", "name":"Mario Castle", "url":"files/mario/songs/castle.mp3" },
            { "id":2, "category":"game", "name":"Mario Star", "url":"files/mario/songs/hurry-starman.mp3"},
            { "id":3, "category":"game", "name":"Mario Overworld", "url":"files/mario/songs/overworld.mp3"}
        ]
    })
    return (
        <>
        <AudioPlayer audios={state.audios}/>
        </>
    )
}

export default Home;

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
