import React, { useState, FormEvent, useRef } from "react";
import { Github, Linkedin, Mail, Send, Code } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      setSubmitError("");

      // Use EmailJS to send the email
      emailjs
        .sendForm(
          "service_e190yc9", // Replace with your EmailJS service ID
          "template_1j57hwy", // Replace with your EmailJS template ID
          form.current as HTMLFormElement,
          "fRQiaG8Cfeg1URnBN" // Replace with your EmailJS public key
        )
        .then((result) => {
          console.log("Email sent successfully:", result.text);
          setIsSubmitting(false);
          setSubmitMessage("Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          // Clear success message after 5 seconds
          setTimeout(() => {
            setSubmitMessage("");
          }, 5000);
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          setIsSubmitting(false);
          setSubmitError("Failed to send message. Please try again later.");
        });
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/latish705",
      username: "latish705",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/latish705/",
      username: "latish705",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:latishadwani705@gmail.com",
      username: "latishadwani705@gmail.com",
    },
    {
      name: "LeetCode",
      icon: <Code size={20} />,
      url: "https://leetcode.com/u/latish705/",
      username: "latish705",
    },
    {
      name: "Codolio",
      icon: <Code size={20} />,
      url: "https://codolio.com/profile/latish705",
      username: "latish705",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute -top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-heading">Get In Touch</h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Contact Me</h3>
            <p className="text-white/70 mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/80 hover:text-purple-400 transition-colors p-4 hover:bg-white/5 rounded-lg"
                >
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    {link.icon}
                  </div>
                  <div>
                    <div className="font-medium">{link.name}</div>
                    <div className="text-sm text-white/60">{link.username}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-background border ${
                      errors.name ? "border-red-500" : "border-white/10"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-background border ${
                      errors.email ? "border-red-500" : "border-white/10"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 bg-background border ${
                      errors.message ? "border-red-500" : "border-white/10"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>

                  {submitMessage && (
                    <p className="mt-4 text-center text-green-400">
                      {submitMessage}
                    </p>
                  )}
                  {submitError && (
                    <p className="mt-4 text-center text-red-400">
                      {submitError}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
