"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle } from "lucide-react";
import { submitForm } from "@/lib/api-client";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [responseData, setResponseData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      const result = await submitForm(data);
      
      setResponseData(result);
      setShowSuccess(true);
      toast.success("Form submitted successfully!", {
        description: "Check below to see what would happen in production",
      });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Submission failed", {
        description: error instanceof Error ? error.message : "Please try again",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Name *
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Email *
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Company Field (Optional) */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Company <span className="text-slate-400">(optional)</span>
          </label>
          <input
            {...register("company")}
            type="text"
            id="company"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Acme Corp"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Message *
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Demo Form
            </>
          )}
        </button>
      </form>

      {/* Success Response Display */}
      {showSuccess && responseData && (
        <div className="mt-8 space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-center gap-2 text-green-800 dark:text-green-300 font-semibold mb-2">
              <CheckCircle className="w-5 h-5" />
              Submission Successful!
            </div>
            <p className="text-sm text-green-700 dark:text-green-400">
              Lead ID: <code className="font-mono bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">{responseData.leadId}</code>
            </p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">
              What Would Happen in Production:
            </h4>
            <div className="space-y-2">
              {responseData.whatWouldHappen?.map((step: any) => (
                <div key={step.step} className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full flex items-center justify-center font-semibold text-xs">
                    {step.step}
                  </span>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-white">{step.service}</div>
                    <div className="text-slate-600 dark:text-slate-400">{step.action}</div>
                    <div className="text-green-600 dark:text-green-400 text-xs mt-0.5">{step.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {responseData.estimatedCost && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                💰 Cost Per Submission
              </h4>
              <p className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-2">
                {responseData.estimatedCost.perSubmission}
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-400">
                {responseData.estimatedCost.note}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

