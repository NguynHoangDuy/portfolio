import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // TODO: Integrate actual email service here (e.g. Resend, Nodemailer, SendGrid)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'your-email@gmail.com',
    //   subject: `New contact from ${data.email}`,
    //   text: data.message
    // });
    
    // Simulate network delay for the "TRANSMITTING..." effect
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submission received:", data);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
