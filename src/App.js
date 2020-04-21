import React, {Component} from 'react';
import Player from 'aliplayer-react';
import './App.css';

const config = {
    source: "//player.alicdn.com/video/aliyunmedia.mp4",
    width: "100%",
    height: "100%",
    autoplay: true,
    isLive: true,
    rePlay: false,
    playsinline: true,
    preload: true,
    controlBarVisibility: "hover",
    useH5Prism: true,
    x5_type: 'h5',
    skinLayout: [
        {
            "name": "bigPlayButton",
            "align": "blabs",
            "x": 30,
            "y": 80
        },
        {
            "name": "errorDisplay",
            "align": "tlabs",
            "x": 0,
            "y": 0
        },
        {
            "name": "infoDisplay"
        },
        {
            "name": "controlBar",
            "align": "blabs",
            "x": 0,
            "y": 0,
            "children": []
        }
    ],
    components: [
        {
            name: "RateComponent",
            type: Player.components.RateComponent,
        }
    ]
};

 export default class App extends Component{
     constructor(props, context) {
         super(props, context);
         this.state = {
             instance: null,
         }
     }

     componentDidMount() {

     }

     render() {
      return (
          <div className='App'>
              <Player
                  config={config}
                  onGetInstance={instance => this.setState({ instance })}
                  />
          </div>
      )
    }
 }

