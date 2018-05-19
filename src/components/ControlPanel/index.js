import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Col } from 'antd';
import AntButton from 'antd/lib/button';

export Button from './Button';
export Slider from './Slider';

export default class ControlPanel extends Component {
  static propTypes = {
    controls: PropTypes.objectOf(PropTypes.array),
    onChange: PropTypes.object,
  };

  static defaultProps = {
    onChange: () => {},
  };

  state = {
    visible: true,
  };

  toggleCP() {
    this.setState({ visible: !this.state.visible });
  }

  renderTools() {
    const { controls, onChange } = this.props;

    return (
      <div
        style={{
          padding: '4px',
          border: '1px dashed lightgray',
          backgroundColor: '#e9eee9',
        }}
      >
        <Col
          style={{
            textAlign: 'right',
          }}
        >
          <AntButton size="small" onClick={() => this.toggleCP()}>
            x
          </AntButton>
        </Col>
        {Object.keys(controls).map((label, i) => {
          const [Comp, ...args] = controls[label];
          return <Comp args={args} key={i} label={label} onChange={onChange} />;
        })}
      </div>
    );
  }

  render() {
    const { state: { visible } } = this;

    return (
      <div
        style={{
          position: 'fixed',
          right: '0',
          top: '0',
        }}
      >
        {visible ? (
          this.renderTools()
        ) : (
          <Button size="small" onClick={() => this.toggleCP()}>
            CP
          </Button>
        )}
      </div>
    );
  }
}
