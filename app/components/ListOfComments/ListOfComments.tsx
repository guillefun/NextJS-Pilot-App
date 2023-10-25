import { useMemo } from 'react'
import styles from './ListOfComments.module.css'
import Image from 'next/image'
import stylesCommon from '../../Commons.module.css'
import { Grow } from '@mui/material'

const fetchComments = async (id: any) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

export default async function ListOfComments({ id }: { id: string }) {
  const comments = await fetchComments(id)

  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 400 }}>
      <div className={styles.comments}>
        <h2 className={stylesCommon.h1}>Comments</h2>
        {comments.map((comment: any) => (
          <div className={styles.commentList} key={comment.id}>
            <article className={styles.comment}>
              <Image
                className={styles.profileAvatar}
                width="70"
                height="70"
                src={`https://robohash.org/${comment.email}?gravatar=yes`}
                alt="Image Avatar"
              />
              <div className={styles.commentContent}>
                <p className={stylesCommon.p}>{comment.email}</p>
                <p className={stylesCommon.p}>{comment.body}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </Grow>
  )
}
