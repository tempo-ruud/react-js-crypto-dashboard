import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ServerStyleSheet } from 'styled-components';

import Head from '../shared/components/Head/Head'

export default ComposedComponent => {
  return class WithDefaultLayout extends Component {
    render() {
      return (
        <div>
          <Head />
          <ComposedComponent {...this.props} />
        </div>
      )
    }
  }
}
