'use client';

import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function ContactsPage() {
    const contactInfo = [
        {
            icon: <Phone className="h-6 w-6 text-indigo-600" />,
            title: "Phone",
            value: "+49 123 456 789",
            description: "Mon-Fri 9:00-20:00",
            link: "tel:+49123456789"
        },
        {
            icon: <Mail className="h-6 w-6 text-indigo-600" />,
            title: "Email",
            value: "contact@petshop.ru",
            description: "We respond within 24 hours",
            link: "mailto:contact@petshop.ru"
        },
        {
            icon: <MapPin className="h-6 w-6 text-indigo-600" />,
            title: "Address",
            value: "10 Central St, Paris",
            description: "Main office and showroom",
            link: "https://maps.google.com"
        }
    ];

    return (
        <div className="bg-white min-h-[calc(100vh-64px)]">
            {/* Header */}
            <section className="bg-slate-900 py-16 text-center text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Contacts 📞</h1>
                    <p className="text-slate-400 max-w-xl mx-auto text-lg">
                        Do you have any questions or suggestions? We're always happy to help you and your pet.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    {contactInfo.map((info, idx) => (
                        <a
                            key={idx}
                            href={info.link}
                            target={info.title === "Адрес" ? "_blank" : undefined}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-indigo-200 transition-all group"
                        >
                            <div className="bg-indigo-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                {info.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{info.title}</h3>
                            <p className="text-lg font-semibold text-indigo-600 mb-1">{info.value}</p>
                            <p className="text-slate-500 text-sm">{info.description}</p>
                        </a>
                    ))}
                </div>

                {/* Message form */}
                <section className="mt-20 max-w-4xl mx-auto bg-slate-50 rounded-[40px] p-8 md:p-12 mb-20 border border-slate-100">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-white rounded-2xl shadow-sm">
                            <MessageSquare className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Write to us</h2>
                            <p className="text-slate-500">We will contact you as soon as possible</p>
                        </div>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                            <input
                                type="text"
                                placeholder="Ivan Ivanov"
                                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                            <input
                                type="email"
                                placeholder="ivan@example.com"
                                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-white"
                            />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                            <textarea
                                rows={4}
                                placeholder="How can we help you?"
                                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-white"
                            />
                        </div>
                        <button className="md:col-span-2 bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-all active:scale-[0.98] shadow-lg shadow-indigo-200">
                            Send Message
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
}