import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Slider as AntSlider } from 'antd';

export default function Slider({ args: [value], label, onChange }) {
  return (
    <Fragment>
      {label}
      <AntSlider
        value={value}
        onChange={v => {
          onChange(label, v);
        }}
      />
    </Fragment>
  );
}

Slider.propTypes = {
  args: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
