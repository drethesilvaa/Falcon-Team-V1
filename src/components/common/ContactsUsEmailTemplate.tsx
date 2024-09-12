import * as React from "react";

interface ContactsUsEmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  message: string;
  services: [];
}

export const ContactsUsEmailTemplate: React.FC<
  Readonly<ContactsUsEmailTemplateProps>
> = ({ firstName }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
