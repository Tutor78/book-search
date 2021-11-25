import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            username
            bookCount
            savedBooks {
                _id
                bookId
                image
                title
                authors
                description
            }
        }
    }
`;