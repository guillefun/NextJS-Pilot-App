
import ListOfComments from "../../../../components/ListOfComments/ListOfComments"

export default function CommentsPage({params}) {
  let { id } = params
  return (
    <ListOfComments id={id}/>
  )
}
