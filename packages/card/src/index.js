// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassnames from 'classnames';
import Button from '@demo-react-styleguide/button';
import Text from '@demo-react-styleguide/text';

import './index.scss';

/**
 * @example ../README.md
 */
export default class Card extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="drs-card">
        <img src="https://images.unsplash.com/photo-1537819191377-d3305ffddce4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0dd9faed573dc42e21f2e6106fabdea8&auto=format&fit=crop&w=800&q=60" alt="" className="drs-card__photo"/>
        <div className="drs-card__contents">
          <Text type="title">Trip to Milky Way</Text>
          <Text type="description">This is a night trek were you get to gaze upon the milky way in all its glory!</Text>
        </div>
        <div className="drs-card__actions">
          <Button type="primary">Buy</Button>
          <Button>Cancel</Button>
        </div>
      </div>
    )
  }
}
