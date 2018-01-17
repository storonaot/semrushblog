import Container from '_shared/Container'
import TextArea from '_shared/TextArea'
import TextField from '_shared/TextField'
import Title from '_shared/Title'
import Switcher from '_shared/Switcher'
import Label from '_shared/Label'
import CheckBox from '_shared/CheckBox'
import ImageUpload from '_shared/ImageUpload'
import styles from './styles'

const textareaStyles = { height: 80 }
const switcherData = [
  { id: 1, value: 'auto', title: 'Create automatically' },
  { id: 2, value: 'manually', title: 'Upload manually' }
]

const PostMeta = ({ handleChange, values, image, postTitle, handleImageUpload, imageDelete }) => (
  <div className={styles.meta}>
    <Container size="strait">
      <TextArea
        label="Teaser"
        value={values.teaser}
        name="teaser"
        placeholder="Teaser"
        handleChange={handleChange}
      />
      <Title h={2}>SEO information</Title>
      <div className={styles.seoHint}>
        Here you can specify information that will help search engines
        discover your post and display it in search results. It is also
        used when sharing a post on social media. If you are unsure, leave
        the fields empty.
      </div>
      <Label htmlFor="">Image to be displayed on social media</Label>
      <Switcher
        data={switcherData}
        activeValue={values.createType}
        handleChange={(val) => { handleChange(val, 'createType') }}
      />
      {values.createType === 'auto' && ([
        <CheckBox
          key={1}
          name="addTitle"
          label="Add title"
          handleChange={handleChange}
          checked={values.addTitle}
        />,
        <CheckBox
          key={2}
          name="addLogo"
          label="Add logo"
          handleChange={handleChange}
          checked={values.addLogo}
          style={{ marginBottom: 25 }}
        />
      ])}
      <div style={{ width: 230, marginBottom: 40 }}>
        <ImageUpload
          image={image}
          type="social"
          autoUpload={values.createType === 'auto'}
          title={values.addTitle ? postTitle : null}
          hasLogo={values.addLogo}
          handleImageUpload={handleImageUpload}
          imageDelete={imageDelete}
        />
      </div>
      <TextField
        label="Meta title"
        value={values.metaTitle}
        name="metaTitle"
        placeholder="Meta title"
        handleChange={handleChange}
      />
      <TextArea
        label="Meta description"
        value={values.description}
        name="description"
        style={textareaStyles}
        placeholder="With SEMrush Organic Research data, you will find the best SEO
          keywords and get a higher ranking."
        handleChange={handleChange}
      />
      <TextArea
        label="Meta keywords"
        value={values.keywords}
        name="keywords"
        style={textareaStyles}
        placeholder="SEO, SEMrush, organic research"
        handleChange={handleChange}
      />
    </Container>
  </div>
)

export default PostMeta

PostMeta.defaultProps = {
  image: null
}

PostMeta.propTypes = {
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.shape({}).isRequired,
  image: PropTypes.string,
  postTitle: PropTypes.string.isRequired,
  handleImageUpload: PropTypes.func.isRequired,
  imageDelete: PropTypes.func.isRequired
}
