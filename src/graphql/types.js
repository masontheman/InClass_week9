// Import built in graph ql types 
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const UserType = new GraphQLObjectType (
    {
        name: "user",
        description: 'user type',
        fields: () => ({
            id: {type: GraphQLID},
            username: {type: GraphQLString},
            email: {type: GraphQLString},

        })
    }
)

module.exports = {
    UserType
} 