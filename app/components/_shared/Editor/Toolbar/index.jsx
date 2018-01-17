import { Container } from '_shared'
import styles from './styles'

const Toolbar = () => (
  <div className={styles.toolbarWrapper}>
    <Container size="strait">
      <div id="toolbar" className={styles.toolbar} style={{ border: 0 }}>
        <div className={styles.controls}>
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-strike" />
          <button className="ql-underline" />
          <button className="ql-header" value="1" />
          <button className="ql-header" value="2" />
          <button className="ql-list" value="ordered" />
          <button className="ql-list" value="bullet" />
          <button className="ql-link" />
          <button className="ql-image" />
          <button className="ql-video" />
          <button className="ql-blockquote" />
          <button className="ql-code" />
        </div>
      </div>
    </Container>
  </div>

)

export default Toolbar
