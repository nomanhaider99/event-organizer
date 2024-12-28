export const typeDefs = `#graphql
  type Event {
    id: String!
    name: String!
    description: String
    organizer: String!
    location: String
    date: String!
    duration: Int
    capacity: Int
    contactEmail: String
    contactPhone: String
    createdAt: String!
  }

  enum UserRole {
    ORGANIZER
    VISITOR
    ADMIN
  }

  type User {
    id: ID!             
    name: String!
    email: String        
    phoneNumber: String  
    userRole: UserRole   
    address: String
    password: String
    createdAt: String
  }

  type Query {
    getEvents: [Event] 
    getUser(name: String): User
    getUsers: [User]
  }

  type Mutation {
    createUser(name: String, email: String, phoneNumber: String, userRole: UserRole, address: String): User
  }
`;
