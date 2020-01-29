import { connect } from 'react-redux'
import { changeFilter, clearCompleted } from '../../../store/actions/todos'
import Footer from './Footer'

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos,
    filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    changeFilter: filter => dispatch(changeFilter(filter)),
    clearCompleted: () => dispatch(clearCompleted())
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
