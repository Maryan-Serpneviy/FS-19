import { connect } from 'react-redux'
import Store from './Store'
import Article from './Article'

const mapStateToPtops = (state, ownProps) => ({
    articleRequested: state.requested,
    articleTitle: state.title,
    buttonLabel: ownProps.buttonLabel
})

const mapDispatchToProps = dispatch => ({
    loadData: () => dispatch(Store.load())
})

export default connect(mapStateToPtops, mapDispatchToProps)(Article)
