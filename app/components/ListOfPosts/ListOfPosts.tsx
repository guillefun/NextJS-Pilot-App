import Link from 'next/link'
import { LikeButton } from '../LikeButton/LikeButton'
import styles from './ListOfPosts.module.scss'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  }).then((res) => res.json())
}

const fetchPostsIncrementalStaticRegen = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

export default async function ListOfPosts() {
  const posts = await fetchPostsIncrementalStaticRegen()

  return posts.slice(0, 25).map((post: any) => (
    <article
      key={post.id}
      className={`${styles.postPreview}  ${styles.zoomInOutBox}`}
    >
      <Link href="/posts/[id]" passHref as={`/posts/${post.id}`}>
        <div className={styles.postTitle}>
          <h2 className={styles.h2}>{post.title}</h2>
        </div>
        <div className={styles.postDescription}>
          <p className={styles.p}>{post.body}</p>
        </div>
      </Link>
      <div className={styles.postLike}>
        <LikeButton id={post.id} />
      </div>
    </article>
  ))
}
