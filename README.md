# Connect Actions [![NPM version][npm-image]][npm-url]

[Connect](https://github.com/reactjs/react-redux) Redux actions by domain.  Supports [React](https://facebook.github.io/react/) & [React Native](https://facebook.github.io/react-native/).

## Installation

```sh
npm i --save connect-actions
```

## Usage

```javascript
import connectActions from 'connect-actions';
import React, {Component} from 'react';
import * as NavigationActions from '../actions/navigation';
import * as UIActions from '../actions/ui';
import * as UserActions from '../actions/app';

@connectActions({NavigationActions, UIActions, UserActions})
class App extends Component {

  static propTypes = {
    NavigationActions: PropTypes.object.isRequired,
    UIActions: PropTypes.object.isRequired,
    UserActions: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.UserActions.fetchCurrentUser();
  }

  render() {
    const {NavigationActions: {goHome}, UIActions: {showMenu}} = this.props;

    return (
      <div>
        <button onClick={goHome}>Go Home</button>
        <button onClick={showMenu}>Show Menu</button>
      </div>
    );
  }
}
```

## License

MIT

[npm-image]: https://badge.fury.io/js/connect-actions.svg
[npm-url]: https://npmjs.org/package/connect-actions
