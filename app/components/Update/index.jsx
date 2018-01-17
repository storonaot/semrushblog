import { PostHeader, Divider, PostMeta, Editor, PostFooter, Modal } from '_shared'
import getLocalStorageObj from './localStorageObj'
import posts from '../posts.json'

const getPost = (id) => {
  if (localStorage.getItem(id)) return JSON.parse(localStorage.getItem(id))
  return posts.find(p => String(p.id) === id)
}

const uploadImage = (image) => {
  if (image && !image.match('base64')) return require(`../../images/${image}`)
  return image
}

class Update extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: getPost(this.props.routeParams.id),
      teaser: '',
      metaTitle: '',
      description: '',
      keywords: '',
      content: '',
      createType: getPost(this.props.routeParams.id).seo.createType,
      addTitle: null,
      addLogo: null,
      preview: null,
      image: uploadImage(getPost(this.props.routeParams.id).publication.image),
      modalOpened: false
    }

    this.updateStateValue = this.updateStateValue.bind(this)
    this.handleImageUpload = this.handleImageUpload.bind(this)
    this.imageDelete = this.imageDelete.bind(this)
    this.saveDataToLocalStorage = this.saveDataToLocalStorage.bind(this)
  }

  getPreview() {
    if (this.state.createType === 'auto') {
      return this.state.image || null
    }
    const { post, preview } = this.state
    if (preview === null) return uploadImage(post.seo.preview)
    else if (preview === '') return uploadImage(null)
    return uploadImage(preview)
  }

  updateStateValue(value, name) {
    this.setState({ [name]: value })
  }

  postMetaValues() {
    const { meta, seo, publication } = this.state.post
    const {
      teaser, metaTitle, description, keywords,
      addTitle, addLogo, createType, content, image, preview
    } = this.state

    return {
      teaser: teaser || seo.teaser,
      metaTitle: metaTitle || meta.title,
      description: description || meta.description,
      keywords: keywords || meta.keywords.join(','),
      addTitle: addTitle === null ? seo.addTitle : addTitle,
      addLogo: addLogo === null ? seo.addLogo : addLogo,
      content: content || publication.content,
      createType: createType || seo.createType,
      image,
      preview
    }
  }

  handleImageUpload(value, name) {
    this.setState({ [name]: value })
  }

  imageDelete(name) {
    this.setState({ [name]: '' }, () => {
      console.log('name', name)
      if (name === 'image') this.setState({ preview: '' })
    })
  }

  localStorageObj() {
    return getLocalStorageObj(this.state.post, this.postMetaValues())
  }

  saveDataToLocalStorage() {
    this.setState({ modalOpened: true })
    const objToStr = JSON.stringify(this.localStorageObj())
    localStorage.setItem(this.props.routeParams.id, objToStr)
  }

  render() {
    return (
      <div>
        <PostHeader
          post={this.state.post}
          image={this.state.image}
          imageDelete={() => { this.imageDelete('image') }}
          handleImageUpload={(value) => { this.handleImageUpload(value, 'image') }}
          goBack={() => { this.props.router.push('/') }}
        />
        <Editor
          html={this.state.post.publication.content}
          updateHtml={(value) => { this.updateStateValue(value, 'content') }}
        />
        <Divider />
        <PostMeta
          handleChange={this.updateStateValue}
          values={this.postMetaValues()}
          postTitle={this.state.post.publication.title}
          handleImageUpload={(value) => { this.handleImageUpload(value, 'preview') }}
          image={this.getPreview()}
          imageDelete={() => { this.imageDelete('preview') }}
        />
        <Divider />
        <PostFooter handleSave={this.saveDataToLocalStorage} handleDelete={() => {}} />
        {this.state.modalOpened && (
          <Modal
            handelClose={() => { this.setState({ modalOpened: false }) }}
          >Changes saved</Modal>
        )}
      </div>
    )
  }
}

export default Update

Update.propTypes = {
  routeParams: PropTypes.shape({
    id: PropTypes.string
  }).isRequired,
  router: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}
