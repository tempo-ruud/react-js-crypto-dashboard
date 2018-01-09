import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default ComposedComponent => {
  return class WithDefaultLayout extends Component {
    render() {
      return (
        <div>
          <ComposedComponent {...this.props} />
        </div>
      )
    }
  }
}
