import { connect } from 'react-redux'
import { path } from 'ramda'
import <%=name%> from './<%=name%>.component'

export const state = (state) => {
  return {}
}

export const dispatch = {}

export default connect(state, dispatch)(<%=name%>)
