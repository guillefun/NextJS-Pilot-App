import Link from 'next/link'
import styles from '../../../Commons.module.css'

export default async function PostPage({ params }) {
  let { id } = params
  return (
    <div className={styles.centerContainer}>
      <Link className={styles.linkButton} href={`/posts/${id}/comments`}>
        <h2 className={styles.h1}>See comments</h2>
      </Link>
    </div>
  )
}
