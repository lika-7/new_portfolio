import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              © {new Date().getFullYear()} LIKA-7 포트폴리오
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/lika-7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-navy hover:text-bronze" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jongsoo-oh-8474a01ab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-navy hover:text-bronze" />
            </Link>
            <Link
              href="https://mail.google.com/mail/?view=cm&to=dhwhdtn93@gmail.com"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-navy hover:text-bronze" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
