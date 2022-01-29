import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                title
                image
                link
                description
                authors
                bookId
            }
        }
    }
`