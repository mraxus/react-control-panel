import PropTypes from 'prop-types';
import React from 'react';
import { Button as AntControl, Row } from 'antd';

export default function Button({ args, label, onChange }) {
  return (
    <Row>
      <AntControl onClick={() => onChange(label)}>{label}</AntControl>
    </Row>
  );
}

Button.propTypes = {
  args: PropTypes.array,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
