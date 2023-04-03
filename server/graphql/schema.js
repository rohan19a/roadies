const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLSchema } = require('graphql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Define the GraphQL types
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const AuthTokenType = new GraphQLObjectType({
  name: 'Auth',
  fields: () => ({
    token: { type: GraphQLNonNull(GraphQLString) },
  }),
});

// Define the GraphQL queries and mutations
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    // Define the login query
    login: {
      type: AuthTokenType,
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(_, { email, password }) {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('Invalid login credentials');
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error('Invalid login credentials');
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

        return { token };
      },
    },
  },
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    // Define the signup mutation
    signup: {
      type: AuthTokenType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(_, { name, email, password }) {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error('User already exists');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
          name,
          email,
          password: hashedPassword,
        });

        // Save user to database
        const savedUser = await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ userId: savedUser.id }, process.env.JWT_SECRET);

        return { token };
      },
    },
  },
});

// Define the GraphQL schema
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = schema;
