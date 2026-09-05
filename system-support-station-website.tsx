import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, MapPin, Clock, Star, Zap, Shield, Users, ArrowRight, Menu, X, Check, Send } from 'lucide-react';

export default function SystemSupportStation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'laptop-repair',
    message: ''
  });

  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "System Support Station",
      "description": "Leading computer service center in Perambalur with 6 years experience",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4/182, Opp. Cotton Research Station, Attur Main Road",
        "addressLocality": "Veppanthattai North",
        "addressRegion": "Tamil Nadu",
        "postalCode": "621116",
        "addressCountry": "IN"
      },
      "telephone": "+91-XXXXXXXXXX",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:00"
      },
      "areaServed": "Perambalur, Tamil Nadu",
      "priceRange": "₹₹"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Meta tags
    document.title = 'System Support Station | Best Laptop & Computer Repair in Perambalur';
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Leading computer service in Perambalur. 6 years experience. Dell, HP, Lenovo, Toshiba repair. 24/7 support, 1-hour on-call service. Trusted by locals.';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'laptop repair Perambalur, computer service, Dell HP Lenovo repair, tech support';
    document.head.appendChild(metaKeywords);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '', service: 'laptop-repair', message: '' });
  };

  const services = [
    {
      icon: '💻',
      title: 'Laptop Repair',
      description: 'Screen replacement, battery issues, virus removal, hardware upgrades. All major brands: Dell, HP, Lenovo, Acer, Toshiba.',
      brands: ['Dell', 'HP', 'Lenovo', 'Acer', 'Toshiba']
    },
    {
      icon: '🖥️',
      title: 'Desktop PC Service',
      description: 'Complete diagnostics, motherboard repairs, power supply issues, cooling solutions. Government laptop certified.',
      brands: ['Dell', 'HP', 'Govt. Laptops']
    },
    {
      icon: '📱',
      title: 'Data Recovery',
      description: 'Safe data retrieval from damaged drives, accidental deletion recovery, backup solutions.',
      brands: ['All Brands']
    },
    {
      icon: '🔧',
      title: 'Hardware Installation',
      description: 'RAM upgrade, SSD installation, component replacement, optimization.',
      brands: ['All Brands']
    },
    {
      icon: '🛡️',
      title: 'Virus & Malware Removal',
      description: '24/7 remote support. Malware elimination, security scanning, system optimization.',
      brands: ['All Brands']
    },
    {
      icon: '☎️',
      title: 'Remote Support',
      description: 'Real-time remote assistance for software issues, configuration, troubleshooting. Available round-the-clock.',
      brands: ['All Brands']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      text: 'Exceptional service! My Dell laptop had critical issues. They fixed it within an hour of calling. Highly professional.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Student',
      text: 'Quick and reliable. They replaced my laptop screen perfectly. The 1-hour service guarantee is real!',
      rating: 5
    },
    {
      name: 'Arjun Patel',
      role: 'Freelancer',
      text: '6 years in business and it shows. Trust them with my HP completely. Best tech support in Perambalur.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'What brands do you service?',
      answer: 'We service all major brands including Dell, HP, Lenovo, Acer, Toshiba, and Government-issued laptops. Our team is certified and experienced across all platforms.'
    },
    {
      question: 'What is your response time?',
      answer: 'On-call service is typically attended within 1 hour in Perambalur. For remote support, we respond immediately. We offer 24/7 phone and remote assistance.'
    },
    {
      question: 'Do you offer remote support?',
      answer: 'Yes! We provide comprehensive online computer support. You don\'t need to visit us—we can diagnose and fix many issues remotely in real-time.'
    },
    {
      question: 'What is your experience level?',
      answer: 'With 6 years of dedicated service in Perambalur, our team consists of highly skilled and qualified engineers trained to resolve issues quickly and professionally.'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Meta tags are injected via useEffect */}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-2">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">SS Station</h1>
                <p className="text-xs text-gray-500">System Support</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <a href="tel:+919XXXXXXXXX" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium">
                Call Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
              <a href="#services" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#testimonials" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#contact" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <a href="tel:+919XXXXXXXXX" className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg text-center font-medium mt-2">
                Call Now
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                  ⚡ 6 Years of Excellence
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Trusted Computer Expert in Perambalur
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Fast, reliable laptop and computer repair. Dell, HP, Lenovo, Acer, Toshiba—we service them all. Same-day fixes, 24/7 support, 1-hour response guarantee.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2 group">
                  Book Service Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:+919XXXXXXXXX" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">1-Hour Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">Certified Techs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative h-96 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-10"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl opacity-5"></div>
              <div className="absolute top-10 right-10 w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center text-7xl animate-pulse">
                💻
              </div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-50 rounded-lg flex items-center justify-center text-6xl">
                🔧
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">6+</div>
            <p className="text-gray-300 mt-2">Years in Service</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">1000+</div>
            <p className="text-gray-300 mt-2">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">24/7</div>
            <p className="text-gray-300 mt-2">Phone & Remote Support</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400">5★</div>
            <p className="text-gray-300 mt-2">Trusted Locally</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete computer and laptop solutions for all your tech needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-xl border border-gray-200 hover:border-blue-400 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/20"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.brands.map((brand, bidx) => (
                    <span
                      key={bidx}
                      className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                System Support Station has been serving Perambalur for 6 years with exceptional computer repair and tech support services. We're not just another repair shop—we're your trusted tech partner.
              </p>
              <div className="space-y-4">
                {[
                  'Highly skilled and qualified engineers',
                  'Quick issue resolution—like a PC doctor',
                  '24/7 phone and remote support available',
                  'One-hour on-call service guarantee',
                  'All major brands certified',
                  'Online computer support services'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1 mt-1 flex-shrink-0">
                      <Check className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8 space-y-4">
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🎯</div>
                  <p className="text-gray-600 text-lg">
                    "We don't just fix computers—we solve problems quickly, professionally, and affordably."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by hundreds of happy customers in Perambalur
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-blue-100 text-lg">
                  Ready to fix your tech? Reach out today. We respond fast.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-blue-100">+91-XXXXXXXXXX (24/7)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-blue-100">
                      4/182, Opp. Cotton Research Station<br />
                      Attur Main Road<br />
                      Veppanthattai North<br />
                      Tamil Nadu 621116
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-blue-100">9:00 AM - 9:00 PM Daily</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full bg-white/90 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full bg-white/90 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleFormChange}
                    className="w-full bg-white/90 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                  >
                    <option value="laptop-repair">Laptop Repair</option>
                    <option value="desktop-service">Desktop PC Service</option>
                    <option value="data-recovery">Data Recovery</option>
                    <option value="virus-removal">Virus & Malware Removal</option>
                    <option value="remote-support">Remote Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="w-full bg-white/90 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all resize-none"
                    rows={3}
                    placeholder="Describe your issue..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  {formSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-blue-100 text-xs mt-4 text-center">
                We'll respond within 1 hour during business hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                      activeAccordion === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeAccordion === idx && (
                  <div className="px-6 pb-6 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Waiting. Start Fixing.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Call now for same-day service or book a remote support session
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919XXXXXXXXX" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a href="#contact" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-all duration-300">
              Book Online
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 rounded-lg p-2">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">SS Station</span>
              </div>
              <p className="text-sm">Trusted computer repair in Perambalur since 2018.</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm mb-2">📞 +91-XXXXXXXXXX</p>
              <p className="text-sm">📍 Perambalur, Tamil Nadu</p>
              <p className="text-sm mt-3">24/7 Support Available</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">
              © 2024 System Support Station. All rights reserved. | Serving Perambalur since 2018
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
