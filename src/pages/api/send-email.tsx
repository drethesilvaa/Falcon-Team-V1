import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { ContactsUsEmailTemplate } from "@/components/common/ContactsUsEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, email, phoneNumber, message, services } =
    req.body;

  if (!firstName || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Falcon Team Support <falconteamsupport@resend.dev>",
      to: ["aurelio.wis@gmail.com", "andressilva03@gmail.com"],
      subject: "Falcon Team Support - Client Contact Request",
      react: ContactsUsEmailTemplate({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
        services,
      }),
    });

    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to send the email." });
  }
};
