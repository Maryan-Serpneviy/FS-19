import { connect } from 'react-redux'
import Store from '../../../Store'
import Footer from './Footer'

const mapStateToProps = state => ({
    todos: state.todos,
    filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    changeFilter: filter => dispatch(Store.changeFilter(filter))
})

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer
