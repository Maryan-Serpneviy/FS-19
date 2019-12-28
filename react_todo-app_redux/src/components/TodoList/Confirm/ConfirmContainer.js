import { connect } from 'react-redux'
import Store from '../../../Store'
import Confirm from './Confirm'

const mapStateToProps = state => ({
    action: state.action,
    currentId: state.currentId
})

const mapDispatchToProps = dispatch => ({
    removeTodo: id => dispatch(Store.remove(id)),
    clearCompleted: () => dispatch(Store.clearCompleted()),
    confirmAction: (confirm, id, name) => dispatch(Store.confirmAction(confirm, id, name))
})

const ConfirmContainer = connect(mapStateToProps, mapDispatchToProps)(Confirm)

export default ConfirmContainer
