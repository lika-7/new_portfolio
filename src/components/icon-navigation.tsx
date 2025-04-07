"use client";

import { useState, useEffect, JSX } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Home from "../../public/icons/home.svg";
import Wrench from "../../public/icons/wrench.svg";
import Briefcase from "../../public/icons/briefcase.svg";
import UserCircle from "../../public/icons/user-circle.svg";
import Envelope from "../../public/icons/envelope.svg";

interface NavItem {
  icon: JSX.Element;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    icon: <Home className="w-8 h-8 text-navy group-hover:text-bronze" />,
    label: "프로젝트",
    href: "/",
  },
  // {
  //   icon: "/icons/recommended.svg",
  //   label: "추천 프로젝트",
  //   href: "/#recommended",
  // },
  {
    icon: <UserCircle className="w-8 h-8 text-navy group-hover:text-bronze" />,
    label: "소개",
    href: "/about",
  },
  {
    icon: <Wrench className="w-8 h-8 text-navy group-hover:text-bronze" />,
    label: "기술 스택",
    href: "/about#skills",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-navy group-hover:text-bronze" />,
    label: "경력 소개",
    href: "/about#experience",
  },

  {
    icon: <Envelope className="w-8 h-8 text-navy group-hover:text-bronze" />,
    label: "연락처",
    href: "/contact",
  },
];

export default function IconNavigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleItems, setVisibleItems] = useState<NavItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleItems(mobile ? navItems.slice(0, 3) : navItems);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = Math.max(0, currentIndex - 3);
      setCurrentIndex(newIndex);
      setVisibleItems(navItems.slice(newIndex, newIndex + 3));
    }
  };

  const handleNext = () => {
    if (currentIndex + 3 < navItems.length) {
      const newIndex = Math.min(navItems.length - 3, currentIndex + 3);
      setCurrentIndex(newIndex);
      setVisibleItems(navItems.slice(newIndex, newIndex + 3));
    }
  };

  const handleClick = (e: React.MouseEvent, href: string) => {
    const [path, hash] = href.split("#");
    if (path === pathname) {
      e.preventDefault();
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div
      className={`bg-white rounded-full shadow-md ${
        isMobile ? "py-2 px-4" : "py-4 px-6"
      } mx-auto max-w-4xl relative z-10`}
    >
      <div className="flex items-center justify-between">
        {isMobile && (
          <button
            onClick={handlePrev}
            className={`p-1 ${
              currentIndex === 0 ? "text-gray-300" : "text-gray-700"
            }`}
            disabled={currentIndex === 0}
            aria-label="이전 메뉴"
          >
            <ChevronLeft size={16} />
          </button>
        )}

        <nav className="flex justify-between items-center flex-1">
          {(isMobile ? visibleItems : navItems).map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="flex flex-col items-center group"
            >
              <div
                className={`${
                  isMobile ? "w-8 h-8" : "w-12 h-12"
                } flex items-center justify-center mb-1 relative`}
              >
                <div className="transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
              </div>
              <span
                className={`${
                  isMobile ? "text-xs" : "text-sm"
                } text-gray-700 group-hover:text-gray-900`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {isMobile && (
          <button
            onClick={handleNext}
            className={`p-1 ${
              currentIndex + 3 >= navItems.length
                ? "text-gray-300"
                : "text-gray-700"
            }`}
            disabled={currentIndex + 3 >= navItems.length}
            aria-label="다음 메뉴"
          >
            <ChevronRight size={16} />
          </button>
        )}
      </div>

      {isMobile && (
        <div className="flex justify-center mt-1 space-x-1">
          {Array.from({ length: Math.ceil(navItems.length / 3) }).map(
            (_, i) => (
              <span
                key={i}
                className={`block w-1.5 h-1.5 rounded-full ${
                  Math.floor(currentIndex / 3) === i ? "bg-navy" : "bg-gray-300"
                }`}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
