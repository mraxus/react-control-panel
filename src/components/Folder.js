import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';

export default class Folder extends PureComponent {
  static propTypes = {
    isFolded: PropTypes.bool,
    back: PropTypes.element,
    duration: PropTypes.number,
    onCompleteFolding: PropTypes.func,
  };
  static defaultProps = {
    duration: 1000,
  };

  node = null;
  finalFoldNode = null;

  componentDidUpdate(prevProps) {
    const { onCompleteFolding } = this.props;

    if (!prevProps.isFolded && this.props.isFolded && this.finalFoldNode) {
      this.finalFoldNode.addEventListener('animationend', onCompleteFolding);
    }
  }

  componentWillUnmount() {
    const { onCompleteFolding } = this.props;

    if (this.finalFoldNode) {
      this.finalFoldNode.removeEventListener('animationend', onCompleteFolding);
    }
  }

  renderOriginal() {
    const { children, isFolded } = this.props;

    return (
      <div
        ref={node => (this.node = node)}
        style={{ opacity: isFolded ? 0 : 1 }}
      >
        {children}
      </div>
    );
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}
