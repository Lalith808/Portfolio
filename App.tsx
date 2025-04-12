import React from 'react';
import { Github, Mail, Phone, MapPin, FileText, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LALITH KISHORE</h1>
          <h2 className="text-2xl md:text-3xl mb-6">Software Developer</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:lalithkishore088@gmail.com" className="flex items-center gap-2">
              <Mail size={16} />
              lalithkishore088@gmail.com
            </a>
            <a href="tel:7200837879" className="flex items-center gap-2">
              <Phone size={16} />
              7200837879
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              992, amman koil st., manamelkudi
            </span>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-gray-600 max-w-3xl">
            A passionate software developer with a strong foundation in Java, HTML, and CSS, dedicated to continuous learning and growth in the tech field. Skilled in building efficient, user-centric applications and exploring new technologies to enhance problem-solving abilities. Eager to contribute to innovative projects while expanding expertise in software development.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Java', 'React', 'HTML', 'CSS', 'MySQL'].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">BankAccount Management System</h3>
              <p className="text-gray-600 mb-4">
                Designed and implemented a BankAccount Management System using Object-Oriented Programming (OOP) principles in Java. Demonstrated clean code practices and adherence to SOLID principles, resulting in a maintainable and extensible codebase.
              </p>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">OOP</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Smart To-Do Website</h3>
              <p className="text-gray-600 mb-4">
                A Smart To-Do Website for Efficient Task Scheduling built with React, HTML, and CSS.
              </p>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HTML</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold">SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</h3>
              <p className="text-gray-600">Bachelor of Technology: Computer Science and Business Systems</p>
              <p className="text-gray-600">CGPA: 7.6 | 2021-2025</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">SOWDAMBIKAA METRIC HIGHER SECONDARY SCHOOL</h3>
              <p className="text-gray-600">Higher Secondary | Percentage: 88.5</p>
              <p className="text-gray-600">2019-2020</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">MAHATMA MONTESSORI SCHOOL</h3>
              <p className="text-gray-600">Secondary | Percentage: 84</p>
              <p className="text-gray-600">2018-2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FileText className="text-blue-600" />
              <span>Programming in Java - NPTEL</span>
            </div>
            <div className="flex items-center gap-4">
              <FileText className="text-blue-600" />
              <span>Enhancing Soft Skills and Personalities - NPTEL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Lalith Kishore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;