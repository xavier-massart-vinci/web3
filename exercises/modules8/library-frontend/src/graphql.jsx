import { gql } from '@apollo/client'

const ALL_BOOKS = gql`
  query {
        allBooks {
            title
            published
            author
            id
            genres
        }
    }
`;

const ALL_AUTHORS = gql`
    query {
        allAuthors {
            name
            bookCount
            born
        }
    }
`;


const CREATE_BOOK = gql`
    mutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
        addBook(
            title: $title,
            author: $author,
            published: $published,
            genres: $genres
        ) {
            title
            published
            author
            id
            genres
        }
    }
`;

export { ALL_BOOKS, ALL_AUTHORS, CREATE_BOOK }
