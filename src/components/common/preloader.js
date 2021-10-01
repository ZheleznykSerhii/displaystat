import React from 'react'
import preloader from '../../photos/loading-25.gif'
import styles from './common.module.css'

let Preloader = (props) => {
  return (
    <div>
      <img className={styles.gif} src={preloader} />
    </div>
  )
}

export default Preloader
