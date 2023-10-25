'use client'

import { useState } from 'react'
import styles from './LikeButton.module.css'

export function LikeButton (id: any) {
  const [liked, setLiked] = useState(false)

  return (
    <button className={styles.button} onClick={() => setLiked(!liked)}>
      {liked ? '❤️' : '🤍'}
    </button>
  )
}
