import { ContactForm } from "@/components/ContactForm";
import { Github, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">
            AWS Serverless Form Backend
          </h1>
          <a
            href="https://github.com/DaltonBuilds/aws-serverless-form-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
            🎯 Live Demo - Mock Mode
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Production-Ready Serverless Architecture
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            An event-driven form backend built with AWS Lambda, DynamoDB, EventBridge, and Terraform.
            Try the demo below to see how it works!
          </p>
        </div>

        {/* Demo Notice */}
        <div className="mb-8 p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
          <h3 className="font-semibold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
            <span className="text-2xl">ℹ️</span>
            Demo Mode Active
          </h3>
          <p className="text-amber-800 dark:text-amber-400">
            This demo uses <strong>mock responses</strong> - no AWS backend is required.
            When you submit the form, you will see educational messages explaining what would
            happen in a real deployment. To deploy the actual infrastructure, follow the
            instructions in the README.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Try the Demo
            </h3>
            <ContactForm />
          </div>

          {/* Architecture Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                What Happens Behind the Scenes?
              </h3>
              <div className="space-y-4">
                {[
                  { icon: "🛡️", title: "Security Layers", desc: "HMAC signing, Turnstile verification, input validation" },
                  { icon: "⚡", title: "Lambda Processing", desc: "Serverless functions validate and process submissions" },
                  { icon: "💾", title: "DynamoDB Storage", desc: "Data persisted with 18-month TTL for compliance" },
                  { icon: "📡", title: "EventBridge", desc: "Event-driven architecture for loose coupling" },
                  { icon: "📧", title: "Email Notifications", desc: "Async delivery via Resend API" },
                  { icon: "📊", title: "CloudWatch", desc: "Full observability with logs and metrics" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Key Features
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>100% Infrastructure as Code (Terraform)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Multi-layer security (WAF, HMAC, Turnstile, validation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Event-driven architecture with EventBridge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Cost-effective (~$7/month for 100 submissions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Production monitoring & observability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "AWS Lambda",
              "DynamoDB",
              "API Gateway",
              "EventBridge",
              "Secrets Manager",
              "CloudWatch",
              "Terraform",
              "TypeScript",
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-center font-medium text-slate-900 dark:text-white"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/DaltonBuilds/aws-serverless-form-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Deploy Your Own
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Full deployment guide available in the repository
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-slate-600 dark:text-slate-400">
          <p>Built with AWS, Terraform, and TypeScript</p>
          <p className="text-sm mt-2">MIT License • Open Source</p>
        </div>
      </footer>
    </div>
  );
}

