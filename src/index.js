import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export default function connectActions(actionsByProp) {
  return connect(null, dispatch => (
    Object.entries(actionsByProp).reduce(
      (connectedActions, [prop, actionsForProp]) => ({
        ...connectedActions,
        [prop]: bindActionCreators(actionsForProp, dispatch)
      }),
      {}
    )
  ));
}
