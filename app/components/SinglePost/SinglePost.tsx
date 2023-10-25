import Link from 'next/link'
import styles from './SinglePost.module.css'
import ListOfComments from '../ListOfComments/ListOfComments'
import { Grow } from '@mui/material'

const fetchSinglePost = (id: any) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 60  
      }
    }).then((res) => res.json())
  }
  
  export default async function SinglePost ({ id } : { id: string }) {
    const post = await fetchSinglePost(id)
    return (
      <Grow
      in={true}
      style={{ transformOrigin: '0 0 0' }}
      {...(true ? { timeout: 1000 } : {})}
    >
            <div>
        <article className={styles.post}>
          <div className={styles.postTitle}>
            <h2 className={styles.h1}>{ post.title }</h2>
          </div>
          <div className={styles.postDescription}>
            <p className={styles.p}>{ post.body }</p>
            <p className={styles.p}>{ post.body }</p>
            <p className={styles.p}>{ post.body }</p>
          </div>
        </article>
      </div>
    </Grow>

    )
  }