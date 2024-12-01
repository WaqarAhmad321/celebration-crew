"use client";

import React, { useState } from "react";
import { MotionButton, MotionForm } from "@/components/motion-div";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { Calendar } from "@/components/calendar";
import { OnSelectHandler } from "react-day-picker";
import DateInput from "@/components/date-input";
import NumberOfPersons from "@/components/persons-slider";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const servicesList = [
  { name: "Lighting", price: 500 },
  { name: "Music", price: 500 },
];

const ContactForm = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors, isSubmitting } = formState;
  const [date, setDate] = useState();
  const [nPersons, setNPersons] = useState<number>(5);
  // State for dynamically tracking selected services
  const [selectedServices, setSelectedServices] = useState<
    { name: string; price: number }[]
  >([]);
  const totalBudget =
    2500 +
    (nPersons - 5) * 100 +
    selectedServices.reduce((total, service) => total + service.price, 0);

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
      message: `Name: ${data.name} \n Email: ${data.email} Phone Number: ${data.phone}\n Event Date: ${date}\n Number of Persons: ${nPersons}\n Drink: ${data.drink}\n Snacks: ${data.snacks}\n Options: ${selectedServiceNames}`, // Add selected services and total budget
      // message: `${data.message}\n\nSelected Services: ${selectedServiceNames}\nTotal Budget: Rs.${totalBudget}`,
    };

    try {
      await emailjs.send(serviceId, templateId, emailTemplateParams, userId);

      toast.success("Your message has been sent, Thank you!");
      reset();
      setDate(undefined); // Clear date
      setNPersons(5); // Reset number of persons
      setSelectedServices([]); // Clear selected services
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="mt-24 shadow-xl px-6 lg:px-12 my-12 lg:my-24 py-5 lg:py-12 max-w-6xl mx-auto">
      <div>
        <h2 className="text-5xl text-center font-bold gradient-text mb-4">
          Get a Quote!
        </h2>
        <p className="text-xl text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Let’s share details of your project. So that we can start working on
          it.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmitQuote)}>
        {/* Full Name Field */}
        <div className="flex gap-4 ie">
          <div className="flex-1">
            <label className="input-label text-base font-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 disabled:cursor-not-allowed disabled:opacity-50 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              disabled={isSubmitting}
              {...register("name", { required: "Name is required" })}
            />
          </div>

          <div className="flex-1">
            <label className="input-label text-base font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 disabled:cursor-not-allowed disabled:opacity-50 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              disabled={isSubmitting}
              {...register("email", { required: "Email is required" })}
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex gap-2 flex-col lg:flex-row">
          <div className="flex-1">
            <label className="input-label text-base font-semibold">
              Phone Number
            </label>

            <input
              type="text"
              className="input-field disabled:cursor-not-allowed
              disabled:opacity-50"
              disabled={isSubmitting}
              {...register("phone", {
                required: "Phone number is required",
              })}
              placeholder="So that we can get back to you"
            />
          </div>

          <div className="flex-1">
            <label className="input-label text-base font-semibold">
              Event date
            </label>
            <DateInput date={date} setDate={setDate} isLoading={false} />
          </div>
        </div>

        {/* Message Field */}
        <h3 className="font-bold text-2xl">Pricing & details:</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-xl font-bold"> (i) Decorations - Rs. 2500</div>
            <div className="ml-12 space-y-2">
              <div className="space-y-2">
                <div className="font-bold list-disc">Includes: </div>

                <p className="ml-4">
                  Rings, ballons, Party Popper, Snow Spray, Birthday banner,
                  table, & caps
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-bold">Options: </div>
                <div className="ml-4">
                  <div>
                    <input
                      type="checkbox"
                      id="lighting"
                      className="w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      checked={selectedServices.some(
                        (s) => s.name === "Lighting"
                      )}
                      onChange={() =>
                        handleServiceToggle({
                          name: "Lighting",
                          price: 500,
                        })
                      }
                    />
                    <label
                      htmlFor="lighting"
                      className="ml-3  text-gray-800 font-medium">
                      Lighting - Rs. 500
                    </label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      id="music"
                      className="w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      checked={selectedServices.some((s) => s.name === "Music")}
                      onChange={() =>
                        handleServiceToggle({
                          name: "Music",
                          price: 500,
                        })
                      }
                    />
                    <label
                      htmlFor="music"
                      className="ml-3 text-sm text-gray-800 font-medium">
                      Music - Rs. 500
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="persons" className="text-xl font-bold">
              {" "}
              (ii) Persons
            </label>
            <NumberOfPersons nPersons={nPersons} setNPersons={setNPersons} />
            <p>
              <span className="text-primary-green font-bold">Note:</span> No
              charges will be taken for up to 5 persons. For more than 5 persons
              Rs. 100 will charged per person. No charges will be applied for
              the birthday buddy.
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="drink" className="text-base font-semibold">
              Drink (optional)
            </label>

            <div className="space-y-2">
              <input
                type="text"
                id="drink"
                className="input-field disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your preffered brand, size, and flavour"
                disabled={isSubmitting}
                {...register("drink")}
              />
              <p>
                <span className="font-bold">Note:</span> Charges will be
                included according to drink price
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="snacks" className="text-base font-semibold">
              Snacks
            </label>

            <input
              type="text"
              id="snacks"
              className="input-field disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your favorite snack"
              disabled={isSubmitting}
              {...register("snacks")}
            />
            <div className="font-bold">Note:</div>
            <ul className="ml-4 list-disc">
              <li>Service charges will included.</li>
              <li>
                The price of drinks and snacks will be informed on Whatsapp.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <span className="font-semibold text-xl">Estimated Budget:</span> Rs.{" "}
          <span className="text-xl">{totalBudget}</span>
        </div>

        {/* Submit Button */}
        <MotionButton
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-primary"
          type="submit"
          disabled={isSubmitting}>
          {isSubmitting ? "Confirming..." : "Confirm Order"}
        </MotionButton>
      </form>
    </div>
  );
};

export default ContactForm;
