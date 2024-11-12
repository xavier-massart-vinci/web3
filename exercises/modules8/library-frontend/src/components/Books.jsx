import { useQuery } from "@apollo/client";
import { ALL_BOOKS } from "../graphql";


const Books = (props) => {
  if (!props.show) {
    return null
  }
  const result = useQuery(ALL_BOOKS,
    {skip: !props.show}
  );


  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {result.data.allBooks.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Books
