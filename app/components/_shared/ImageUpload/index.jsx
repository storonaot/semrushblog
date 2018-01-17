import Dropzone from 'react-dropzone'
import Title from '_shared/Title'
import classNames from 'classnames'
import Preview from './Preview'
import styles from './styles'

class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePreviewUrl: this.props.image,
      file: null
    }
    this.onImageDrop = this.onImageDrop.bind(this)
    this.deleteImage = this.deleteImage.bind(this)
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    })
    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
    const reader = new FileReader()
    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result
      }, () => { this.props.handleImageUpload(reader.result) })
    }
    reader.readAsDataURL(file)
  }

  deleteImage() {
    this.setState({ file: null, imagePreviewUrl: null }, this.props.imageDelete())
  }

  render() {
    const dropzoneClasslist = classNames({
      [styles.dropzone]: true,
      [styles.isSocial]: this.props.type === 'social'
    })
    if (this.props.image || this.props.autoUpload) {
      return (
        <Preview
          image={this.props.image}
          deleteImage={this.deleteImage}
          type={this.props.type}
          autoUpload={this.props.autoUpload}
          title={this.props.title}
          hasLogo={this.props.hasLogo}
        />
      )
    }
    return (
      <Dropzone
        multiple={false}
        accept="image/*"
        onDrop={this.onImageDrop}
        className={dropzoneClasslist}
        activeClassName={styles.isActive}
        rejectClassName={styles.isReject}
        acceptClassName={styles.isActive}
      >
        <div className={styles.uploadIcon} />
        <Title h={2} className={styles.title}>Featured image</Title>
        <p className={styles.label}>select an image file to upload or drag it here</p>
        <p className={styles.hint}>
          Please see the requirements for our Featured image. If you are
          unsure what image you should select,
          do not upload anything. Our editor will upload an appropriate image
          when reviewing your post.
        </p>
      </Dropzone>
    )
  }
}

export default ImageUpload

ImageUpload.defaultProps = {
  image: null,
  type: 'publication',
  autoUpload: false,
  imageDelete: () => {},
  title: null,
  hasLogo: false
}

ImageUpload.propTypes = {
  image: PropTypes.string,
  type: PropTypes.oneOf(['publication', 'social']),
  autoUpload: PropTypes.bool,
  imageDelete: PropTypes.func,
  handleImageUpload: PropTypes.func.isRequired,
  title: PropTypes.string,
  hasLogo: PropTypes.bool
}
