'use strict';

import PropTypes from 'prop-types';
var createReactClass = require('create-react-class');

var IndexRoute = createReactClass({
  displayName: 'IndexRoute',
  propTypes: {
    name: PropTypes.string.isRequired,
    component: PropTypes.any,
    routeProps: PropTypes.object,
  },
  render() {
    return this.props.children;
  }
});

module.exports = IndexRoute;
