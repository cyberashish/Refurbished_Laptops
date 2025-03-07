import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  verificationToken: string;
}


export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  verificationToken,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "500px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f4f4f4",
      borderRadius: "8px",
    }}
  >
    {/* Header */}
    <table width="100%" style={{ textAlign: "center", paddingBottom: "20px" }}>
      <tr>
        <td>
          <h1 style={{ color: "#333", margin: "0" }}>Welcome to RentoPC</h1>
          <h2 style={{ color: "#555", marginTop: "5px" }}>Verify Your Email</h2>
        </td>
      </tr>
    </table>

    {/* Body Content */}
    <table width="100%" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
      <tr>
        <td>
          <h3 style={{ color: "#333" }}>Hello, {firstName}!</h3>
          <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.5" }}>
            Please verify your email address by clicking the button below. This helps us ensure
            the security of your account.
          </p>
        </td>
      </tr>

      {/* Button */}
      <tr>
        <td align="center" style={{ padding: "20px 0" }}>
          <a
            href={`http://localhost:3000/users/verify-email/?token=${verificationToken}`}
            style={{
              backgroundColor: "#007bff",
              color: "#ffffff",
              textDecoration: "none",
              padding: "12px 24px",
              borderRadius: "5px",
              display: "inline-block",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Verify Email
          </a>
        </td>
      </tr>

      {/* Footer */}
      <tr>
        <td style={{ textAlign: "center", fontSize: "12px", color: "#888", paddingTop: "15px" }}>
          If you didn’t sign up for RentoPC, please ignore this email.
        </td>
      </tr>
    </table>
  </div>
);
