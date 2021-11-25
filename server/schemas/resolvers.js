const {
    login,
    createUser,
    getSingleUser,
    getCurrentUser,
    saveBook,
    deleteBook,
} = require('../controllers/user-controller');

const resolvers = {
    Query: {
        user: async (parent, args) => {
            return getSingleUser(args);
        },
        me: async (parent, args, { user }) => {
            return getCurrentUser(user);
        }
    },
    Mutation: {
        login: async (parent, args) => {
            return login(args);
        },
        addUser: async (parent, args) => {
            return createUser(args);
        },
        saveBook: async (parent, args, { user }) => {
            return saveBook(args.book, user);
        },
        removeBook: async (parent, args, { user }) => {
            return deleteBook(args, user);
        }
    }
}

module.exports = resolvers;