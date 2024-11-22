"use client";

import React from "react";
import { MotionButton, MotionForm } from "./motion-div";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_QUOTE_PAGE_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const ContactForm = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting: isLoading },
  } = methods;

  const budget = watch("budget");

  const onSubmitQuote = async (data: any) => {
    if (!serviceId || !templateId || !userId) {
      throw new Error("Environment variables are not set");
    }

    const emailTempleteParams = {
      from_name: data.name,
      from_email: data.email,
      message: `${data.description} \n \n \n \n budget: $${budget}`,
    };

    try {
      await emailjs.send(serviceId, templateId, emailTempleteParams, userId);

      toast.success("Your message has been sent, Thank you!");
      reset();
    } catch {
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <MotionForm
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
      onClick={handleSubmit(onSubmitQuote)}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            {...register("name", { required: true })}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          {...register("message", { required: true })}></textarea>
      </div>

      <MotionButton
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full btn-primary"
        type="submit">
        Send Message
      </MotionButton>
    </MotionForm>
  );
};

export default ContactForm;
