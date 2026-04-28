
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Schedule = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          subject: formData.interest,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert('Call scheduled successfully! We will contact you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          interest: '',
          message: ''
        });
      } else {
        alert('Failed to schedule call. Please try again.');
      }
    } catch (error) {
      console.error('Error scheduling call:', error);
      alert('Failed to schedule call. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Schedule a <span className="text-regal-green">Call</span>
              </h1>
              <p className="text-xl text-gray-400">
                Let's discuss how our AI automation can transform your business.
              </p>
            </div>
            
            <div className="bg-regal-dark rounded-xl border border-gray-800 p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-regal-green"
                      placeholder="John"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-regal-green"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-regal-green"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-regal-green"
                    placeholder="Your Company"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">I'm interested in...</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-regal-green"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="recruitment">Recruitment Automation</option>
                    <option value="customer">Customer Engagement Automation</option>
                    <option value="sales">Sales Process Automation</option>
                    <option value="custom">Custom Automation Solution</option>
                  </select>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-regal-green"
                    placeholder="Tell us more about your automation needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-regal-green text-black font-semibold py-3 rounded-lg hover:bg-regal-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule My Call'}
                </button>
              </form>
            </div>
            
            <div className="mt-8 text-center text-gray-400">
              <p>
                By scheduling a call, you agree to our{" "}
                <a href="#" className="text-regal-green hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-regal-green hover:underline">
                  Terms of Service
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
