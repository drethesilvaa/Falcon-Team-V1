import { ApolloServer, gql } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Define your type definitions (schema)
const typeDefs = gql`
  type Testimonial {
    id: ID!
    content: String!
    author: String!
    rating: Int!
    createdAt: String!
    approved: Boolean!
  }

  type Query {
    testimonials: [Testimonial!]!
  }

  type Mutation {
    approveTestimonial(id: ID!): Testimonial!
    rejectTestimonial(id: ID!): Testimonial!
    submitTestimonial(
      content: String!
      author: String!
      rating: Int!
    ): Testimonial!
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    testimonials: async () => {
      return prisma.testimonial.findMany({
        where: {
          approved: true,
        },
      });
    },
  },
  Mutation: {
    approveTestimonial: async (_: any, { id }: any) => {
      return prisma.testimonial.update({
        where: { id },
        data: { approved: true },
      });
    },
    rejectTestimonial: async (_: any, { id }: any) => {
      return prisma.testimonial.update({
        where: { id },
        data: { approved: false },
      });
    },
    submitTestimonial: async (_: any, { content, author, rating }: any) => {
      return prisma.testimonial.create({
        data: {
          content,
          author,
          rating,
          approved: false, // Testimonials need admin approval
        },
      });
    },
  },
};

// Initialize ApolloServer
const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}

// Disable bodyParser so ApolloServer can handle the body
export const config = {
  api: {
    bodyParser: false,
  },
};
