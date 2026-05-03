import React, { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for contacting us! (Demo)");
    // يمكنك إضافة منطق الإرسال الحقيقي هنا
  };

  return (
      <div className=" bg-[#2b233b] flex items-center justify-center py-4 px-20">
        
      <div className="w-full max-w-md bg-[#201a2c] rounded-2xl shadow-2xl p-8">
        {/* العنوان */}
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Contact Us
        </h2>
        <p className="text-gray-400 text-center text-sm mb-8">
          Please fill in your information or{" "}
          <a href="#" className="text-purple-400 hover:underline">
            click here
          </a>{" "}
          for more options
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* حقل الاسم */}
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

          {/* حقل البريد الإلكتروني */}
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

          {/* حقل الرسالة */}
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
            ></textarea>
          </div>

          {/* شارة تذكرني (يمكن تغيير النص إلى شيء مناسب مثل "Subscribe to newsletter") */}
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

          {/* زر الإرسال */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* رابط إضافي اختياري */}
        <p className="text-center text-gray-500 text-xs mt-6">
          We'll never share your information with anyone else.
        </p>
      </div>
      
    </div>
  );
}

export default Contact;
