"use client";

import type React from "react";
import { useState } from "react";
import Hero from "../../components/hero";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 폼 제출 시뮬레이션
    try {
      // 실제 애플리케이션에서는 이 데이터를 백엔드로 전송합니다
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        success: true,
        message: "메시지가 성공적으로 전송되었습니다. 곧 연락드리겠습니다.",
      });

      // 폼 초기화
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "메시지 전송에 실패했습니다. 다시 시도해주세요.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* 네비게이션 아래 여백 추가 */}
      <div className="h-16 md:h-20"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {submitStatus.message && (
            <div
              className={`p-4 mb-6 rounded ${
                submitStatus.success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-md"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-navy text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "전송 중..." : "메시지 보내기"}
            </button>
          </form> */}
          <div className="space-y-6  bg-white p-8 rounded-lg shadow-md">
            <a
              href="https://mail.google.com/mail/?view=cm&to=dhwhdtn93@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg md:text-xl font-bold text-navy hover:text-bronze transition-colors duration-200"
            >
              메일 보내기, 클릭
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
