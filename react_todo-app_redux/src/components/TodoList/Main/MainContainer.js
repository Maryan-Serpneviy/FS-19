import { connect } from 'react-redux'
import * as actions from '../../../store/actions/todos'
import Main from './Main'

const mapStateToProps = state => ({
    todos: state.todos,
    filter: state.filter,
    currentId: state.currentId,
    canEdit: state.canEdit,
    editInput: state.editInput
})

const mapDispatchToProps = dispatch => ({
    check: id => dispatch(actions.check(id)),
    checkAll: () => dispatch(actions.checkAll()),
    handleEditInput: editInput => dispatch(actions.handleEditInput(editInput)),
    setEditStatus: status => dispatch(actions.setEditStatus(status)),
    editTodo: (id, isCompleted, todoText) => dispatch(actions.edit(id, isCompleted, todoText))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
