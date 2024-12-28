import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { NextRequest } from 'next/server';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export async function POST(request: NextRequest) {
  return handler(request);
}

export async function GET(request: NextRequest) {
  return handler(request);
}
