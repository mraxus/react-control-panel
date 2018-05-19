import React, { Component, Fragment } from 'react';
import AntButton from 'antd/lib/button';
import 'antd/dist/antd.css';

import ControlPanel, { Button, Slider } from './ControlPanel';
import Element from './Element';
import Folder from './Folder';

export default class App extends Component {
  state = {
    controls: {
      animation: [Slider, 60],
      johannesMap: [Button],
      marcusSlider: [Slider, 1]
    },
    fold: false,
  };

  renderBack() {
    return (
      <div
        className="App"
        style={{
          border: 'black 1px solid',
          background: 'linear-gradient(to bottom right, red, yellow)',
          height: '108px',
          width: '200px',
        }}
      />
    );
  }

  foldMe() {
    this.setState({ fold: true });
  }
  handleFinish() {
    console.log('done here!');
  }

  handleControlChange(label, value) {
    const { controls } = this.state;
    const newControlState = {
      ...controls,
      [label]: [controls[label][0], value],
    };
    this.setState({
      controls: newControlState,
    });
  }

  render() {
    const { controls, fold } = this.state;
    return (
      <div style={{ margin: '32px', width: '200px' }}>
        <ControlPanel
          controls={controls}
          onChange={this.handleControlChange.bind(this)}
        />
        <Folder
          duration={10000}
          isFolded={fold}
          onCompleteFolding={this.handleFinish}
          back={this.renderBack()}
        >
          <Element />
        </Folder>
        <AntButton onClick={() => this.foldMe()}>Fold me please</AntButton>
      </div>
    );
  }
}
