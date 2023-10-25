
import ListOfComments from "../../../../components/ListOfComments/ListOfComments"

export async function generateStaticParams() {
  return [{foo: 'bar'}, {bar: 'foo'}];
}

export default function CommentsPage({params}) {
  let { id } = params
  return (
    <>{
      <ListOfComments id={id}/>
    }</>
  )
}
