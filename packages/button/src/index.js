// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';

import './index.scss';

/**
 * @example ../README.md
 */
export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
    type: PropTypes.oneOf(['primary']),
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
  };

  onClick = (e) => {
    if (!this.props.isDisabled && this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const { type } = this.props;

    return (
      <button
        className={getClassnames('drs-button', this.props.className, {
          [`drs-button--type-${type}`]: !!type,
          'drs-button--disabled': this.props.isDisabled,
        })}
        onClick={(e) => { this.onClick(e); }}
        disabled={this.props.isDisabled}
      >
        {this.props.children}
      </button>
    );
  }
}
