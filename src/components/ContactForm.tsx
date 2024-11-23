"use client";

import React, { useState } from "react";
import { MotionButton, MotionForm } from "./motion-div";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const servicesList = [
  { name: "Snacks", price: 1500 },
  { name: "Decoration", price: 3300 },
  { name: "Location", price: 1200 },
  { name: "Videos", price: 1050 },
];

const ContactForm = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors, isSubmitting } = formState;

  // State for dynamically tracking selected services
  const [selectedServices, setSelectedServices] = useState<
    { name: string; price: number }[]
  >([]);
  const totalBudget = selectedServices.reduce(
    (total, service) => total + service.price,
    0
  );

  // Handle toggling services
  const handleServiceToggle = (service: { name: string; price: number }) => {
    setSelectedServices(
      (prev) =>
        prev.some((s) => s.name === service.name)
          ? prev.filter((s) => s.name !== service.name) // Remove service
          : [...prev, service] // Add service
    );
  };

  const onSubmitQuote = async (data: any) => {
    if (!serviceId || !templateId || !userId) {
      throw new Error("Environment variables are not set");
    }

    const selectedServiceNames = selectedServices.map((s) => s.name).join(", ");
    const emailTemplateParams = {
      from_name: data.name,
      from_email: data.email,
      message: `${data.message}\n\nSelected Services: ${selectedServiceNames}\nTotal Budget: Rs.${totalBudget}`,
    };

    try {
      await emailjs.send(serviceId, templateId, emailTemplateParams, userId);

      toast.success("Your message has been sent, Thank you!");
      // reset();
      setSelectedServices([]); // Clear selected services
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
      console.log(error);
    }
  };

  return (
    <MotionForm
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
      onSubmit={handleSubmit(onSubmitQuote)}>
      {/* Full Name Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          {...register("name", { required: "Name is required" })}
        />
        {/* {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )} */}
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          {...register("email", { required: "Email is required" })}
        />
        {/* {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )} */}
      </div>

      {/* Message Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          {...register("message", {
            required: "Message is required",
          })}></textarea>
        {/* {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )} */}
      </div>

      {/* Services Selection */}
      <div className="p-4 rounded-lg border border-gray-300 bg-white shadow-sm">
        <label className="block font-semibold text-lg text-gray-800 mb-4">
          Select Services
        </label>
        <div className="space-y-4">
          {servicesList.map((service) => (
            <div
              key={service.name}
              className={`flex items-center p-2 rounded-lg cursor-pointer ${
                selectedServices.some((s) => s.name === service.name)
                  ? "bg-primary-100 border border-primary-500"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleServiceToggle(service)}>
              <input
                type="checkbox"
                id={service.name}
                className="w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                onChange={() => handleServiceToggle(service)}
                checked={selectedServices.some((s) => s.name === service.name)}
              />
              <label
                htmlFor={service.name}
                className="ml-3 text-sm text-gray-800 font-medium">
                {service.name} - Rs.{service.price}
              </label>
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-800 font-medium text-xl">
          <strong>Total Budget:</strong> Rs.{totalBudget}
        </p>
      </div>

      {/* Submit Button */}
      <MotionButton
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full btn-primary"
        type="submit"
        disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Send Message"}
      </MotionButton>
    </MotionForm>
  );
};

export default ContactForm;
