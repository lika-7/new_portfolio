import Hero from "../../components/hero";
import career from "./career";

type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  description: string[]; // 배열로 변경
};

function ExperienceItem({
  title,
  company,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <div className="bg-white p-4 md:p-6 rounded shadow transition-all hover:shadow-md">
      <div className="flex gap-2 items-center">
        <h3 className="font-bold text-base md:text-lg text-navy">{company}</h3>|
        <span className="text-xs md:text-sm text-gray-600"> {period}</span>
      </div>

      <h4 className="font-medium text-base md:text-lg text-navy">{title}</h4>

      <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mt-2 space-y-1">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* 네비게이션 아래 여백 추가 */}
      <div className="h-16 md:h-20"></div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              안녕하세요, node.js 기반 풀스택 개발자 오종수 입니다.
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              웹 개발에 대한 다양한 기술 스택을 활용한 경험을 가지고 있습니다.
              <br />
              프론트엔드부터 백엔드까지 전체 개발 과정을 이해하고 구현 합니다.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              나의 재능이 세상에 가장 효율적으로 쓰이기를 바랍니다.
            </p>
          </section>

          <section id="skills" className="mb-8 pt-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              기술 스택
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <div className="bg-white p-3 md:p-4 rounded shadow transition-transform hover:scale-105">
                <h3 className="font-medium text-base md:text-lg mb-2 text-navy">
                  프론트엔드
                </h3>
                <ul className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    React / Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    TypeScript
                  </li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                      Redux
                    </div>
                    <ul className="ml-6 list-disc text-sm text-gray-600">
                      <li>Redux Toolkit</li>
                      <li>Redux-Saga</li>
                    </ul>
                  </li>

                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    Tailwind CSS
                  </li>
                </ul>
              </div>
              <div className="bg-white p-3 md:p-4 rounded shadow transition-transform hover:scale-105">
                <h3 className="font-medium text-base md:text-lg mb-2 text-navy">
                  백엔드
                </h3>
                <ul className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    Node.js / Express
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    Java / Spring Boot
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    Python / Django
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    RESTful API
                  </li>
                </ul>
              </div>
              <div className="bg-white p-3 md:p-4 rounded shadow transition-transform hover:scale-105">
                <h3 className="font-medium text-base md:text-lg mb-2 text-navy">
                  데이터베이스
                </h3>
                <ul className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    MongoDB
                  </li>

                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    MySQL / MariaDB
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                    Firebase
                  </li>
                </ul>
              </div>
              <div className="bg-white p-3 md:p-4 rounded shadow transition-transform hover:scale-105">
                <h3 className="font-medium text-base md:text-lg mb-2 text-navy">
                  클라우드
                </h3>
                <ul className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                  <li className="flex flex-col gap-1">
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                      AWS
                    </div>
                    <ul className="ml-6 list-disc text-sm text-gray-600">
                      <li>LAMBDA</li>
                      <li>API Gateway</li>
                      <li>S3</li>
                    </ul>
                  </li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-navy rounded-full mr-2"></span>
                      Azure
                    </div>
                    <ul className="ml-6 list-disc text-sm text-gray-600">
                      <li>Azure Function</li>
                      <li>Cognitive</li>
                      <li>Storage</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="experience" className="pt-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">경력</h2>
            <div className="space-y-4 md:space-y-6">
              {career.map((exp, idx) => (
                <ExperienceItem
                  key={idx}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
