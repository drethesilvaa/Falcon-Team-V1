interface ContactsUsEmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  message: string;
  services: string[];
}

export const ContactsUsEmailTemplate: React.FC<
  Readonly<ContactsUsEmailTemplateProps>
> = ({ firstName, lastName, email, phoneNumber, message, services }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      color: "#333",
      lineHeight: "1.6",
      padding: "20px",
    }}
  >
    <h2 style={{ color: "#415A77" }}>
      Contact Request from {firstName} {lastName}
    </h2>
    <p>Hello,</p>
    <p>You have received a new contact request. Here are the details:</p>

    <h3 style={{ color: "#415A77" }}>Contact Information:</h3>
    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
      <li>
        <strong>First Name:</strong> {firstName}
      </li>
      <li>
        <strong>Last Name:</strong> {lastName}
      </li>
      <li>
        <strong>Email:</strong> {email}
      </li>
      <li>
        <strong>Phone Number:</strong> {phoneNumber}
      </li>
    </ul>

    <h3 style={{ color: "#415A77" }}>Message:</h3>
    <p>{message}</p>

    <h3 style={{ color: "#415A77" }}>Services Interested In:</h3>
    {services.length > 0 ? (
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    ) : (
      <p>No specific services selected.</p>
    )}

    <p>We hope you find this information helpful.</p>

    <br />
    <p>Best regards,</p>
    <p>
      <strong>Falcon Team Support</strong>
    </p>
  </div>
);
