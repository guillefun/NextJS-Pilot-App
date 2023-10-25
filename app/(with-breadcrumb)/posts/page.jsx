import ListOfPosts from '../../components/ListOfPosts/ListOfPosts'
import { Grow } from '@mui/material'

export default async function PostsPage() {
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 400 }}>
      <section>
        <ListOfPosts />
      </section>
    </Grow>
  )
}
