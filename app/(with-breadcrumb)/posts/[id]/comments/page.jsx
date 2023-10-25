
import ListOfComments from "../../../../components/ListOfComments/ListOfComments"

export default async function CommentsPage({params}) {
  let { id } = params
  return (
    <>{
      <ListOfComments id={id}/>
    }</>
  )
}
