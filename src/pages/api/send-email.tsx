import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { ContactsUsEmailTemplate } from "@/components/common/ContactsUsEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["andressilva03@gmail.com"],
    subject: "Hello world",
    react: ContactsUsEmailTemplate({
      firstName: "John",
      email: "",
      lastName: "",
      message: "",
      phoneNumber: 0,
      services: [],
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
