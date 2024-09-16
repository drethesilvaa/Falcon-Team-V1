// pages/api/get-testimonials.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `http://${req.headers.host}/api/graphql`;

  const graphqlResponse = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          testimonials {
            id
            content
            author
            rating
            createdAt
          }
        }
      `,
    }),
  });

  const { data } = await graphqlResponse.json();

  // Return the testimonials from your API
  if (data?.testimonials) {
    res.status(200).json(data.testimonials);
  } else {
    res.status(500).json({ message: "Failed to fetch testimonials" });
  }
}
