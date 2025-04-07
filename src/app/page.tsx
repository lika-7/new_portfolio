import ProjectGrid from "../components/project-grid";
import Hero from "../components/hero";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* 네비게이션 아래 여백 추가 */}
      <div className="h-16 md:h-20"></div>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">프로젝트</h2>
            <ProjectGrid />
          </div>
        </div>
      </section>

      {/* Recommended Projects Section */}
      {/* <section id="recommended" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">추천 프로젝트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md h-[320px] flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-[#20344D]">
                  반응형 웹 애플리케이션
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  React와 Next.js를 사용하여 구현한 반응형 웹
                  애플리케이션입니다. 사용자 인증, 데이터 시각화, 실시간
                  업데이트 기능을 포함합니다.
                </p>
                <div className="h-20 overflow-y-auto pr-1 mb-4 scrollbar-thin">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mb-2">
                      React
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mb-2">
                      Next.js
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mb-2">
                      TypeScript
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mb-2">
                      Tailwind CSS
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mb-2">
                      Redux
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-[#20344D] hover:text-[#8E6E5F] transition-colors mt-auto"
                >
                  자세히 보기 →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md h-[320px] flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-[#20344D]">
                  e커머스 플랫폼
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  온라인 쇼핑몰을 위한 완전한 e커머스 솔루션입니다. 제품
                  카탈로그, 장바구니, 결제 처리, 주문 관리 기능을 제공합니다.
                </p>
                <div className="h-20 overflow-y-auto pr-1 mb-4 scrollbar-thin">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mb-2">
                      Node.js
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mb-2">
                      Express
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mb-2">
                      MongoDB
                    </span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mb-2">
                      REST API
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-[#20344D] hover:text-[#8E6E5F] transition-colors mt-auto"
                >
                  자세히 보기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
