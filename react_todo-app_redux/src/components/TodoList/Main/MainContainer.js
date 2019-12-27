import { connect } from 'react-redux'
import Store from '../../../Store'
import Main from './Main'

function mapStateToProps(state) {
    return {
        todos: state.todos,
        currentId: state.currentId,
        canEdit: state.canEdit,
        editInput: state.editInput,
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        check: id => dispatch(Store.check(id)),
        handleEditInput: editInput => dispatch(Store.handleEditInput(editInput)),
        setEditStatus: status => dispatch(Store.setEditStatus(status)),
        editTodo: (id, isCompleted, todoText) => dispatch(Store.edit(id, isCompleted, todoText))
    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer
