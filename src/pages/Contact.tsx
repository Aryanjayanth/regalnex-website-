import React from "react";
import {
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 min-h-screen bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#000000,#000000,#000000)] opacity-40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#000000,transparent)] opacity-20 animate-pulse-subtle"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-8 relative z-10"
          >
            <h1 className="text-7xl font-bold text-center mb-10">
              Let's <span className="text-regal-green animate-pulse-subtle">Talk</span>
            </h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20 text-lg">
              Have questions about our AI solutions? We're here to help you transform your business with cutting-edge technology.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8 bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
              >
                <div>
                  <h2 className="text-4xl font-bold mb-4 relative inline-block group">
                    <span className="relative z-10">Get in touch</span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-regal-green/30 transform origin-left transition-transform group-hover:scale-x-110"></span>
                  </h2>
                  <p className="text-gray-400 text-lg">
                    Please feel free to send us any questions, feedback, or suggestions you might have.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-regal-green/10 rounded-lg border border-regal-green/30 group-hover:bg-regal-green/20 transition-all duration-300">
                      <Phone className="h-6 w-6 text-regal-green" />
                    </div>
                    <p className="text-lg group-hover:text-regal-green transition-colors">+91 7483609720</p>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-regal-green/10 rounded-lg border border-regal-green/30 group-hover:bg-regal-green/20 transition-all duration-300">
                      <Mail className="h-6 w-6 text-regal-green" />
                    </div>
                    <p className="text-lg group-hover:text-regal-green transition-colors">likithlikithsd@gmail.com</p>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-regal-green/10 rounded-lg border border-regal-green/30 group-hover:bg-regal-green/20 transition-all duration-300">
                      <MapPin className="h-6 w-6 text-regal-green" />
                    </div>
                    <p className="text-lg group-hover:text-regal-green transition-colors">123 Innovation Drive, Silicon Valley</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-6">
                    <Link to="#" className="p-3 bg-regal-green/10 rounded-lg border border-regal-green/30 text-regal-green hover:bg-regal-green/20 transition-all duration-300">
                      <Twitter className="h-6 w-6" />
                    </Link>
                    <Link to="#" className="p-3 bg-regal-green/10 rounded-lg border border-regal-green/30 text-regal-green hover:bg-regal-green/20 transition-all duration-300">
                      <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link to="#" className="p-3 bg-regal-green/10 rounded-lg border border-regal-green/30 text-regal-green hover:bg-regal-green/20 transition-all duration-300">
                      <Facebook className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-gray-800 relative group hover:border-regal-green/30 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-regal-green/0 via-regal-green/5 to-regal-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full bg-regal-green/5 border border-gray-700 rounded-lg px-6 py-4 text-lg text-white focus:outline-none focus:border-regal-green focus:ring-2 focus:ring-regal-green/50 transition-all focus:shadow-[0_0_15px_rgba(48,189,54,0.2)] focus:bg-regal-green/10"
                              placeholder="Your Name"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              className="w-full bg-regal-green/5 border border-gray-700 rounded-lg px-6 py-4 text-lg text-white focus:outline-none focus:border-regal-green focus:ring-2 focus:ring-regal-green/50 transition-all focus:shadow-[0_0_15px_rgba(48,189,54,0.2)] focus:bg-regal-green/10"
                              placeholder="Phone Number"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="w-full bg-regal-green/5 border border-gray-700 rounded-lg px-6 py-4 text-lg text-white focus:outline-none focus:border-regal-green focus:ring-2 focus:ring-regal-green/50 transition-all focus:shadow-[0_0_15px_rgba(48,189,54,0.2)] focus:bg-regal-green/10"
                              placeholder="Email Address"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={4}
                              className="w-full bg-regal-green/5 border border-gray-700 rounded-lg px-6 py-4 text-lg text-white focus:outline-none focus:border-regal-green focus:ring-2 focus:ring-regal-green/50 transition-all focus:shadow-[0_0_15px_rgba(48,189,54,0.2)] focus:bg-regal-green/10 resize-none"
                              placeholder="Message"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />
                  
                    <button
                      type="submit"
                      className="w-full bg-regal-green/10 hover:bg-regal-green/20 text-white border border-regal-green/30 hover:border-regal-green/50 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(48,189,54,0.3)] relative group"
                    >
                      <span className="relative z-10">Send Message</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-regal-green/0 via-regal-green/10 to-regal-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                    </button>
                  </form>
                </Form>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
