import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About College', href: '#about' },
    {name:'Vision & Mission',href:'#vision-mission'},
    { name: 'Programmes', href: '#programmes' },
    { name: 'Contact Us', href: '#contact' },
    
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo placeholder */}
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <img src="/lib/logo.jpg" alt="Logo"  />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.sbmp.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
              >
                College Website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.sbmp.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                College Website
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div className="relative">
          <img
            src="/lib/college.jpg"
            alt="College Campus"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to Shri Bhagubhai Mafatlal Polytechnic
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Empowering Education for a Bright Future
              </p>
              {/* <a
                href="#about"
                className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
              >
                Learn More About Us
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Shri Bhagubhai Mafatlal Polytechnic
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/lib/sbmp.jpg"
                alt="College Building"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-6">
              About SVKM's Shri Bhagubhai Mafatlal Polytechnic and College of Engineering
Shri Vile Parle Kelavani Mandal established this Polytechnic in 1963 with a munificent donation of RS. 7,50,000/- from Shri Arvind N. Mafatlal and his brothers and named the same after their uncle Shri Bhagubhai Mafatlal.

Mafatlal family and their industries have taken keen interest in developing the same and given financial support which stands at RS. 43,26,000/- at present. The Polytechnic receives Grants and Project fund from the State and Central Governments for establishing facilities and developing its infrastructures. The Polytechnic has developed excellent interaction and liaison with industries and has received financial support for a variety of projects and towards equipment support.

S.B.M. Polytechnic has created a name for itself by maintaining high standard of discipline and performance. The Polytechnic believes in organising need-based programmes and assisting in-service personnel in education and training activities. The Polytechnic has developed Sandwich Programmes and has diversified its conventional programmes initiated in 1963 into variety of discipline areas as First Level as well as Post-Diploma Level along with in-service programmes. The Polytechnic is a grant-in-aid autonomous institution affiliated to the Maharashtra State Board of Technical Education. The Polytechnic is being managed by the duly constituted Managing Council.



              </p>
              {/* <p className="text-gray-600 mb-6">
                Our mission is to provide industry-relevant education, foster innovation, and develop well-rounded professionals who are ready to take on the challenges of tomorrow.
              </p> */}
            </div>
          </div>
        </div>
      </section>

{/* Vision and Mission Section */}
{/* Vision and Mission Section */}
<section id="vision-mission" className="py-20 px-4">
          <div className="relative">
            {/* You can comment out or remove the image tag below */}
            {/* <img
              src="/lib/college.jpg"
              alt="College Campus"
              className="w-full h-[600px] object-cover"
            /> */}
            <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col items-center justify-center min-h-[400px]"> {/* Added min-h-[400px] */}
              <div className="text-center text-black px-4 mb-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Vision and Mission
                </h1>
                <div className="text-left">
                  <h2 className="text-2xl font-semibold mb-2">Vision</h2>
                  <p className="text-xl mb-4">
                    SBM Polytechnic aspires to be the lead institute in providing
                    need based technical education.
                  </p>
                  <h2 className="text-2xl font-semibold mb-2">Mission</h2>
                  <ul className="list-disc list-inside text-xl">
                    <li>
                      To provide state-of-the-art infrastructure and latest
                      equipments for providing a stimulating learning environment.
                    </li>
                    <li>
                      To prepare students to meet the dynamic needs of the
                      industry by periodic reviewing and upgradation of curriculum
                      through an interactive process with industry.
                    </li>
                    <li>
                      To inculcate a spirit of excellence in terms of academic
                      performance, research and innovation in faculty by providing
                      appropriate support and incentive systems.
                    </li>
                    <li>
                      To promote and support Co-Curricular, extra-curricular
                      activities and industry interaction to make students
                      socially sensitive and employable.
                    </li>
                  </ul>
                </div>
                {/* <a
                  href="#about"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
                >
                  Learn More About Us
                </a> */}
              </div>
            </div>
          </div>
        </section>

      {/* Programmes Section */}
      <section id="programmes" className="py-16 px-4 mt-72">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Programmes Offered
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Degree Program */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className=" bg-gray-200 rounded-lg mb-4"><img src="/lib/IMG_6251.JPG" alt="Degree"  height="100px"  /></div>
              <h3 className="text-2xl font-bold mb-4">Degree Program</h3>
              <p className="text-gray-600 mb-4">
                Our comprehensive degree program offers advanced technical education with a focus on practical skills and theoretical knowledge.
              </p>
              
              
            </div>

            {/* Diploma Program */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-gray-200 rounded-lg mb-4"><img src="/lib/IMG_6252.JPG" alt="Diploma"  height="100px"  /></div>
              <h3 className="text-2xl font-bold mb-4">Diploma Program</h3>
              <p className="text-gray-600 mb-4">
                Our diploma programs provide hands-on training and industry-relevant skills to prepare students for successful careers.
              </p>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            <div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                    <p className="text-gray-600">Irla, N. R. G Marg,Opposite Cooper Hospital,Vileparle (W),Mumbai 400056,India

</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-600 mr-3" />
                    <p className="text-gray-600">022-42336000</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600 mr-3" />
                    <p className="text-gray-600">Website: www.sbmp.ac.in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 Shree Bhagubhai Mafatlal Polytechnic. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;