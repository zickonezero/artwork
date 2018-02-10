import { connect } from "react-redux"

import ArtworksList from "../components/ArtworksList"
import * as actionCreators from '../redux/actions/artworksActions';

const mapStateToProps = state => {
  console.log(state)
  return {
    items: state.artworks.items,
    error: state.artworks.error
  }
}

const mapDispatchToProps = dispatch => ({
  getItemsOnLoad: () => dispatch(actionCreators.fetchItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksList)
