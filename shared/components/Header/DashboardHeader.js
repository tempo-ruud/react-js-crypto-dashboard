import React, { Component } from 'react';
import Router from 'next/router';

export default class DashboardHeader extends Component {
  render() {
    return (
      <div className='header'>
        <p>DashboardHeader</p>
        <style jsx>{`
          .header {
            background: red;
          }
        `}</style>
      </div>
    )
  }
}
