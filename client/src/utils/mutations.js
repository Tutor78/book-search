import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser(
        $email: String,
        $password: String!
    ) {
        login(
            email: $email,
            password: $password
        ) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutatioin addUser(
        $username: String!,
        $email: String!,
        $password: String!
    ) {
        addUser(
            username: $username,
            email: $email,
            password: $password
        ) {
            token
            user {
                _id
                username
            }
        }
    }
`;


export const SAVE_BOOK = gql`
    mutation saveBook($input: bookInput!) {
        saveBook(input: $input) {
            username
            savedBooks {
                bookId
                title
                authors
                description
                image
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            username
            savedBooks {
                bookId
                title
                authors
                description
                image
            }
        }
    }
`;