import Container from '_shared/Container'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Toolbar from './Toolbar'
import styles from './styles'

const editingArea = {
  border: 0,
  padding: '35px 0 45px',
  fontSize: 'inherit',
  height: 580
}

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editorHtml: this.props.html }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(html) {
    this.setState({ editorHtml: html }, () => { this.props.updateHtml(html) })
  }

  render() {
    return (
      <div>
        <Toolbar />
        <Container size="strait">
          <ReactQuill
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            modules={Editor.modules}
            value={this.state.editorHtml}
          >
            <div className={styles.editingArea} style={editingArea} />
          </ReactQuill>
        </Container>
      </div>
    )
  }
}

Editor.modules = {
  toolbar: {
    container: '#toolbar'
  }
}

Editor.defaultProps = {
  placeholder: '',
  html: null
}

Editor.propTypes = {
  placeholder: PropTypes.string,
  html: PropTypes.string,
  updateHtml: PropTypes.func.isRequired
}

export default Editor
