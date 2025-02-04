import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaRegCircleDot,
  FaRegCircle,
} from "react-icons/fa6";
import bg from "../assets/bg.svg";
import { z } from "zod";
import Success from "./Sucess";
const services = [
  { id: "development", name: "Development", icon: "🖥️" },
  { id: "web-design", name: "Web Design", icon: "🎨" },
  { id: "marketing", name: "Marketing", icon: "📢" },
  { id: "other", name: "Other", icon: "⚙️" },
];

const contactSchema = z.object({
  name: z.string().min(4, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().min(1, "Company name is required"),
});

const servicesSchema = z.object({
  selectedServices: z
    .array(z.string())
    .min(1, "Please select at least one service"),
});

const budgetSchema = z.object({
  selectedPrice: z.string().min(1, "Please select a budget option"),
});

const finalSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().min(1, "Company name is required"),
  selectedServices: z
    .array(z.string())
    .min(1, "Please select at least one service"),
  selectedPrice: z.array(z.string()).min(1, "Please select a budget option"),
});

const balances = [
  { id: "1", price: "5000$-10000$" },
  { id: "2", price: "10000$-20000$" },
  { id: "3", price: "20000$-50000$" },
  { id: "4", price: "Above 50000$" },
];

const MultiStepForm = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep1 = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorObj = {};
        error.errors.forEach((err) => {
          errorObj[err.path[0]] = err.message;
        });
        setErrors(errorObj);
      }
      return false;
    }
  };

  const validateStep2 = () => {
    try {
      servicesSchema.parse({ selectedServices });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors({ service: error.errors[0].message });
      }
      return false;
    }
  };

  const validateStep3 = () => {
    try {
      budgetSchema.parse({ selectedPrice });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors({ balance: error.errors[0].message });
      }
      return false;
    }
  };

  const validateStep4 = () => {
    try {
      finalSchema.parse({ ...formData, selectedServices, selectedPrice });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorObj = {};
        error.errors.forEach((err) => {
          errorObj[err.path[0]] = err.message;
        });
        setErrors(errorObj);
      }
      return false;
    }
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;
    if (step === 4 && !validateStep4()) return;
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleServiceSelection = (serviceId) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(serviceId)
        ? prevSelected.filter((id) => id !== serviceId)
        : [...prevSelected, serviceId]
    );
  };

  const handleBalanceSelection = (balanceId) => {
    setSelectedPrice(balanceId);
  };
  const submit = () => {
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
    });
    setSelectedServices([]);
    setSelectedPrice([]);
  };

  if (isSubmitted) {
    return (
      <Success
        onClose={() => {
          setIsSubmitted(false);
          setStep(1);
          
        }}
      />
    );
  }

  return (
    <div
      className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg"
    >
<div className="flex items-center justify-center gap-2 mb-6">
  {[1, 2, 3, 4].map((num, index) => (
    <div key={num}>
     
      <div className="flex items-center gap-2">
      
        <div
          className={`w-8 h-8 flex items-center justify-center text-sm font-semibold rounded-full transition-all duration-300 ${
            step > num
              ? "bg-blue-700 text-white"
              : step === num
              ? "bg-blue-700 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {num}
        </div>

        {index !== 3 && (
          <div className="relative w-12 h-1">
            <div className="absolute w-full h-full bg-gray-300 rounded"></div>

            
            <div
              className={`absolute h-full rounded transition-all duration-300 ${
                step > num
                  ? "w-full bg-blue-700"   
                  : step === num
                  ? "w-1/2 bg-blue-700"    
                  : "w-0 bg-transparent"   
              }`}
            ></div>
          </div>
        )}
      </div>
    </div>
  ))}
</div>





      {step === 1 && (
        <form className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <fieldset className="mb-6">
            <legend className="text-lg font-bold mb-2">Contact details</legend>
            <p className="text-gray-600 mb-4">
              Enter your contact details below.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "John Carter",
                  icon: <FaUser />,
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "Email address",
                  icon: <FaEnvelope />,
                },
                {
                  name: "phone",
                  label: "Phone",
                  type: "tel",
                  placeholder: "1234567890",
                  icon: <FaPhone />,
                },
                {
                  name: "company",
                  label: "Company",
                  type: "text",
                  placeholder: "Company name",
                  icon: <FaBuilding />,
                },
              ].map((field, idx) => (
                <div key={idx} className="relative">
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                      {field.icon}
                    </span>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="pl-10 pr-3 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 z-10"
                    />
                  </div>
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm">{errors[field.name]}</p>
                  )}
                </div>
              ))}
            </div>
          </fieldset>
          <div className="text-end">
            <button
              type="button"
              className="px-6 py-2 text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-800"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <section>
          <fieldset className="mb-6">
            <legend className="text-xl font-bold mb-2">Our Services</legend>
            <p className="text-gray-600 text-sm mb-4">
              Double-click to select/deselect services.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  className={`flex items-center gap-2 p-4 border-2 rounded-lg ${
                    selectedServices.includes(service.id)
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 bg-white"
                  }`}
                  onClick={() => handleServiceSelection(service.id)}
                >
                  <span className="text-lg">{service.icon}</span>
                  {service.name}
                </button>
              ))}
            </div>
            {errors.service && (
              <p className="text-red-500 text-sm mt-2">{errors.service}</p>
            )}
          </fieldset>
          <div className="flex justify-between">
            <button
              type="button"
              className="px-6 py-2 text-black border  border-blue-700 bg-white rounded-full shadow-lg hover:bg-white"
              onClick={prevStep}
            >
              Previous
            </button>
            <button
              type="button"
              className={`px-6 py-2 rounded-full shadow-lg ${
                selectedServices.length > 0
                  ? "bg-blue-700 hover:bg-blue-800 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={selectedServices.length === 0}
              onClick={nextStep}
            >
              Submit
            </button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section>
          <fieldset className="mb-6">
            <legend className="text-xl font-bold mb-2">
              What's Your Preferred Budget
            </legend>
            <p>
              Please fill the form below to receive a quote for your project.
              Feel free to add as much detail as needed.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {balances.map((balance) => (
                <button
                  key={balance.id}
                  type="button"
                  className={`flex items-center gap-2 p-4 rounded-lg border-2 ${
                    selectedPrice.includes(balance.id)
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleBalanceSelection(balance.id)}
                >
                  {selectedPrice.includes(balance.id) ? (
                    <FaRegCircleDot className="mr-2 text-blue-500" />
                  ) : (
                    <FaRegCircle className="mr-2 " />
                  )}
                  {balance.price}
                </button>
              ))}
            </div>
            {errors.balance && (
              <p className="text-red-500 text-sm mt-2">{errors.balance}</p>
            )}
          </fieldset>
          <div className="flex justify-between">
            <button
              type="button"
              className="px-6 py-2 text-black bg-white border border-blue-700 rounded-full shadow-lg hover:bg-white"
              onClick={prevStep}
            >
              Previous
            </button>
            <button
              type="button"
              className={`px-6 py-2 rounded-full shadow-lg ${
                selectedPrice.length > 0
                  ? "bg-blue-700 hover:bg-blue-800 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={selectedPrice.length === 0}
              onClick={nextStep}
            >
              Submit
            </button>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="flex flex-col items-center">
          <form action="" className="w-full max-w-lg">
            <fieldset className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="mb-6 flex justify-center">
                <img src={bg} alt="Background" className="w-1/2 rounded-lg" />
              </div>

              <p className="text-xl font-semibold mb-4">
                Submit your Quote Request
              </p>
              <p className="text-gray-600 mb-4">
                Please review all the information you previously typed in the
                past steps, and if all is okay, submit your message to receive a
                project quote in 24 - 48 hours.
              </p>
              {errors.final && (
                <p className="text-red-500 text-sm mt-2">{errors.final}</p>
              )}
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  className="px-6 py-2 text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-800"
                  onClick={submit}
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          <div className="flex justify-start w-full mt-4">
            <button
              type="button"
              className="px-6 py-2 text-black bg-white rounded-full border border-blue-700 shadow-lg hover:bg-white"
              onClick={prevStep}
            >
              Previous Step
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default MultiStepForm;
