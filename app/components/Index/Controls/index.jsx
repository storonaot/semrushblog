import { Container, Title, Button, Search } from '_shared'
import styles from './styles'

const Controls = ({ resetSearch, changeSearch, searchValue }) => (
  <div className={styles.controls}>
    <Container>
      <div className={styles.top}>
        <Title h={1}>My posts</Title>
        <Button>New post</Button>
      </div>
      <Search
        value={searchValue}
        handleReset={resetSearch}
        handleChange={changeSearch}
      />
    </Container>
  </div>
)

export default Controls

Controls.defaultProps = {
  searchValue: ''
}

Controls.propTypes = {
  searchValue: PropTypes.string,
  resetSearch: PropTypes.func.isRequired,
  changeSearch: PropTypes.func.isRequired
}
