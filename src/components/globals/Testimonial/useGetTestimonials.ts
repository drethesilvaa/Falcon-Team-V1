import { useEffect, useState } from "react";

export const useGetTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    const query = `
      query {
        testimonials {
          id
          content
          author
          rating
          createdAt
        }
      }
    `;

    const response = await fetch("/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await response.json();
    return data.testimonials;
  };

  useEffect(() => {
    fetchTestimonials().then((testimonials) => {
      const formattedTestimonials = testimonials.map((testimonial: any) => ({
        ...testimonial,
        createdAt: new Date(parseInt(testimonial.createdAt)).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        ),
      }));
      setTestimonials(formattedTestimonials);
    });
  }, []);

  return testimonials;
};
