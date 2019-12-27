import { connect } from 'react-redux'
import Store from '../../../Store'
import ToggleAll from './ToggleAll'

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        checkAll: () => dispatch(Store.checkAll())
    }
}

const ToggleAllContainer = connect(mapStateToProps, mapDispatchToProps)(ToggleAll)

export default ToggleAllContainer
