import SinglePost from '@/app/components/SinglePost/SinglePost'
import { Grow } from '@mui/material'

export default async function PostPage({
  params,
  children,
}: {
  params: any
  children: any
}) {
  const { id } = params
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 400 }}>
      <section>
        <SinglePost id={id} />
        {children}
      </section>
    </Grow>
  )
}
