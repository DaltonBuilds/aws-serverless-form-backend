import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate a mock lead ID
    const mockLeadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Return successful response with educational information
    return NextResponse.json(
      {
        success: true,
        leadId: mockLeadId,
        message: "Form submitted successfully (mock mode)",
        timestamp: new Date().toISOString(),
        demo: true,
        processedData: {
          name: body.name,
          email: body.email,
          company: body.company || "Not provided",
          messageLength: body.message?.length || 0,
        },
        whatWouldHappen: [
          {
            step: 1,
            service: "AWS WAF",
            action: "Rate limiting and malicious pattern detection",
            status: "✓ Request allowed"
          },
          {
            step: 2,
            service: "API Gateway",
            action: "Route request to Lambda function",
            status: "✓ Invoked"
          },
          {
            step: 3,
            service: "Lambda (Lead Processor)",
            action: "Verify HMAC signature",
            status: "✓ Signature valid"
          },
          {
            step: 4,
            service: "Cloudflare Turnstile",
            action: "Verify bot protection token",
            status: "✓ Human verified"
          },
          {
            step: 5,
            service: "Zod Validation",
            action: "Validate form schema",
            status: "✓ Schema valid"
          },
          {
            step: 6,
            service: "DynamoDB",
            action: "Check for duplicate submission (idempotency)",
            status: "✓ Unique submission"
          },
          {
            step: 7,
            service: "DynamoDB",
            action: "Store contact data with 18-month TTL",
            status: "✓ Stored successfully"
          },
          {
            step: 8,
            service: "EventBridge",
            action: "Publish ContactSubmitted event",
            status: "✓ Event published"
          },
          {
            step: 9,
            service: "Lambda (Email Notifier)",
            action: "Triggered by EventBridge",
            status: "✓ Invoked"
          },
          {
            step: 10,
            service: "Resend API",
            action: "Send email notification to admin",
            status: "✓ Email delivered"
          },
          {
            step: 11,
            service: "CloudWatch",
            action: "Log all operations and metrics",
            status: "✓ Logged"
          }
        ],
        estimatedCost: {
          perSubmission: "$0.00008",
          breakdown: {
            "API Gateway": "$0.00000100",
            "Lambda executions (2x)": "$0.00004000",
            "DynamoDB write": "$0.00000125",
            "EventBridge event": "$0.00000000",
            "Secrets Manager reads": "$0.00000005",
            "CloudWatch logs": "$0.00000050",
          },
          note: "Most costs covered by AWS Free Tier"
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mock API error:", error);
    
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process form submission",
        demo: true,
      },
      { status: 500 }
    );
  }
}

