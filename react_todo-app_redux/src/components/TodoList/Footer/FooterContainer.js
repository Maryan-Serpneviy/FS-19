import { connect } from 'react-redux'
import Store from '../../../Store'
import Footer from './Footer'

function mapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeFilter: filter => dispatch(Store.changeFilter(filter))
    }
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer
