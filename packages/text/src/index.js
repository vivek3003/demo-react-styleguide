// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';

import './index.scss';

/**
 * @example ../README.md
 */
export default class Text extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    type: PropTypes.oneOf(['title', 'description']),
  };

  onClick = (e) => {
    if (!this.props.isDisabled && this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const { type } = this.props;

    switch (type) {
      case 'title': {
        return (
          <h3
            className={getClassnames('drs-text', 'drs-text--title', this.props.className)}
          >
            {this.props.children}
          </h3>
        );
      }

      case 'description': {
        return (
          <p
            className={getClassnames('drs-text', 'drs-text--description', this.props.className)}
          >
            {this.props.children}
          </p>
        );
      }

      default: {
        return (
          <p className="drs-text">
            {this.props.text}
          </p>
        );
      }
    }
  }
}
