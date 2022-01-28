import { gql } from 'apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                _id
                description
                bookId
                image
                link
                title
                authors
            }
        }
    }
`