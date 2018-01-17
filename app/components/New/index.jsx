import { PostHeader, Divider, PostMeta, Editor, PostFooter, Modal } from '_shared'
import post from '../emptyPost.json'

class New extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teaser: '',
      metaTitle: '',
      description: '',
      keywords: '',
      modalOpened: false,
      createType: 'auto',
      addTitle: false,
      addLogo: false
    }
  }
  render() {
    return (
      <div>
        <PostHeader
          post={post}
          image={null}
          goBack={() => {}}
          handleImageUpload={() => {}}
          imageDelete={() => {}}
        />
        <Editor html="" updateHtml={() => {}} />
        <Divider />
        <PostMeta
          handleChange={() => {}}
          values={this.state}
          postTitle="New post"
          handleImageUpload={() => {}}
          imageDelete={() => {}}
        />
        <Divider />
        <PostFooter handleSave={() => {}} handleDelete={() => {}} />
        {this.state.modalOpened && (
          <Modal
            handelClose={() => { this.setState({ modalOpened: false }) }}
          >Changes saved</Modal>
        )}
      </div>
    )
  }
}

export default New
