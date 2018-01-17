import Counter from './Counter'
import styles from './styles'

const Counters = ({ counters }) => (
  <div className={styles.counters}>
    <Counter type="show" value={counters.show} />
    <Counter type="rate" value={counters.rate} />
    <Counter type="share" value={counters.share} />
  </div>
)

export default Counters

Counters.propTypes = {
  counters: PropTypes.shape({}).isRequired
}
