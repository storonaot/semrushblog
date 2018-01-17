import ReactTooltip from 'react-tooltip'
import Controls from './Controls'
import Posts from './Posts'
import posts from '../posts.json'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }

    this.resetSearch = this.resetSearch.bind(this)
    this.changeSearch = this.changeSearch.bind(this)
  }

  resetSearch() {
    this.setState({ searchValue: '' })
  }

  changeSearch(value) {
    this.setState({ searchValue: value })
  }

  filteredPosts() {
    const searchString = this.state.searchValue.toLowerCase()
    return posts.filter(post => post.publication.title.toLowerCase().match(searchString))
  }

  render() {
    return (
      <div>
        <Controls
          resetSearch={this.resetSearch}
          changeSearch={this.changeSearch}
          searchValue={this.state.searchValue}
        />
        <Posts
          posts={this.filteredPosts()}
        />
        <ReactTooltip />
      </div>
    )
  }
}

export default Index
