import { connect } from 'react-redux'
import Store from '../../../Store'
import ToggleAll from './ToggleAll'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    checkAll: () => dispatch(Store.checkAll())
})

const ToggleAllContainer = connect(mapStateToProps, mapDispatchToProps)(ToggleAll)

export default ToggleAllContainer
