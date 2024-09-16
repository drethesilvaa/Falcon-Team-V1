import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { content, author, rating } = req.body;

    if (!content || !author || !rating) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const query = `
      mutation SubmitTestimonial($content: String!, $author: String!, $rating: Int!) {
        submitTestimonial(content: $content, author: $author, rating: $rating) {
          id
          content
          author
          rating
          createdAt
        }
      }
    `;

    const variables = { content, author, rating };

    const url = `http://${req.headers.host}/api/graphql`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
      });

      const data = await response.json();

      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(500).json({ error: data });
      }
    } catch (error) {
      const errorMessage = (error as Error).message || "Something went wrong";
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
