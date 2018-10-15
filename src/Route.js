'use strict';

import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
var createReactClass = require('create-react-class');

var Route = createReactClass({
  displayName: 'Route',
  propTypes: {
    name: PropTypes.string.isRequired,
    component: PropTypes.any,
    routeProps: PropTypes.object,
  },
  render() {
    return this.props.children;
  }
});

var styles = StyleSheet.create({
  hidden: {
    height: 0,
  }
});

module.exports = Route;
