
import React, { useState, useRef } from "react";
import { FaPhone, FaLocationDot, FaLinkedin, FaGithub } from "react-icons/fa6";

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    remember: false,
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ضع هنا الـ endpoint الذي حصلت عليه من Formspree
    const formspreeEndpoint = "https://formspree.io/f/mrejkkqn";

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      remember: formData.remember ? "Yes" : "No",
    };

    setIsSending(true);
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert("تم إرسال رسالتك بنجاح! شكراً لتواصلك.");
        // إعادة تعيين النموذج
        setFormData({
          name: "",
          email: "",
          message: "",
          remember: false,
        });
      } else {
        throw new Error("فشل الإرسال");
      }
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء الإرسال، الرجاء المحاولة لاحقاً.");
    } finally {
      setIsSending(false);
    }
  };
  

  return (
    <div className="bg-[#2b233b] p-4 md:px-20">
      <div className="bg-[#201a2c] rounded-2xl shadow-2xl p-6 md:p-8">
        {/* عنوان موحد فوق القسمين */}
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center text-sm mb-8">
          <a href="#" className="text-purple-400 hover:underline">
            click here
          </a>{" "}
          for more options
        </p>

        <div className="flex flex-col md:flex-row gap-8 ">
          {/* العمود الأيسر: معلومات الاتصال */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1">
              {/* Phone */}
              <div className="text-gray-500 flex items-center mb-4">
                <div className="bg-violet-400 flex items-center justify-center rounded-full w-12 h-12 shrink-0">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Phone Number</h3>
                  <p>+963 995 124 589</p>
                </div>
              </div>

              {/* Address */}
              <div className="text-gray-500 flex items-center mb-4">
                <div className="bg-violet-400 flex items-center justify-center rounded-full w-12 h-12 shrink-0">
                  <FaLocationDot className="text-white text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">My Address</h3>
                  <p>Jdeidat Artouz, Rural Damascus, Syria</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="text-gray-500 flex items-center mb-4">
                <div className="bg-violet-400 flex items-center justify-center rounded-full w-12 h-12 shrink-0">
                  <FaLinkedin className="text-white text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">LinkedIn</h3>
                  <p>linkedin.com/in/omar-ali-730b9a374</p>
                </div>
              </div>

              {/* GitHub */}
              <div className="text-gray-500 flex items-center">
                <div className="bg-violet-400 flex items-center justify-center rounded-full w-12 h-12 shrink-0">
                  <FaGithub className="text-white text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">GitHub</h3>
                  <p>https://github.com/omar43007</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-600">
              <h4 className="text-lg font-semibold text-white text-center mb-2">
                Excited to work together?
              </h4>
              <p className="text-gray-400 text-sm text-center">
                I'm always open to new projects and collaborations. Let's create
                something amazing!
              </p>
            </div>
          </div>

          {/* العمود الأيمن: النموذج */}
          <div className="flex-1">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#2f2a3e] border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#2f2a3e] border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="you@example.com"
                />
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#2f2a3e] border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
                />
                <label htmlFor="remember" className="text-gray-300 text-sm">
                  I'd like to receive updates
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className={`w-full py-2 rounded-lg text-white font-semibold transition duration-200 ${
                  isSending
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
            <p className="text-center text-gray-500 text-xs mt-6">
              We'll never share your information with anyone else.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
