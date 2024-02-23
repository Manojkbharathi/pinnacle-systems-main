import React, { useRef } from 'react';
import Image from 'next/image';
import sale from '../Assets/sale.jpeg'
import emailjs from '@emailjs/browser';
import { ENVELOPE_ICON, PHONE_ICON, LOCATION_ICON, BUILDING } from '../Assets/icons';
import { ContactComponent } from './ContactComponent';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tc9e4a6', 'template_fd9zb2u', form.current, 'RXrk_AtEB1Tpa6dQ0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="min-h-screen">
            <div className="">
                <ContactComponent />
            </div>
            <div className="flex flex-col items-start justify-center md:pt-10 pt-10 md:pb-5">
                <h1 className='fontjb text-2xl text-black md:ml-10 ml-6'>{LOCATION_ICON} Location Map</h1>
                <iframe className='w-full h-[500px] p-5 pt-5 rounded-3xl '
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.992407268605!2d77.3292660729311!3d11.113943028712992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907acd474782b%3A0x305e134ee93875fa!2sPINNACLE%20Systems!5e0!3m2!1sen!2sin!4v1684236290883!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </div>
            <hr className="my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-70 dark:opacity-100" />
            <div className="md:p-5">
                <section className="bg-orange-50 md:rounded-xl text-black">
                    <div className="mx-auto max-w-screen-xl px-4 md:py-16 py-5 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                            <div className="lg:col-span-2 lg:py-12">
                                <h1 className="md:text-3xl text-lg md:leading-relaxed md:pt-10 pb-3 fontjb text-black">{BUILDING} Contact:</h1>
                                <Image className="md:w-[200px] w-24 md:rounded-xl rounded-md" src={sale} />
                                <div className="md:mt-8 mt-3">
                                    <p className="fontjb md:text-3xl text-base text-black md:text-justify">Mr. P. Manoj.</p>
                                    <h1 className="md:text-xl text-sm md:pt-3 pt-2 fontjsb">
                                        {PHONE_ICON} Call : +91 9994610733
                                    </h1>
                                    <h1 className="md:text-xl text-sm md:pt-3 pt-2 fontjsb">
                                        {ENVELOPE_ICON} Mail : manoj@pinnaclesystems.co.in
                                    </h1>
                                    <p className='md:text-xl md:text-left md:pt-3 pt-2 text-black fontjm text-left text-xs '>GS EDIFICE, 13/1, 1st Floor Bungalow Street, Avinashi Road, Tirupur - 641602.</p>
                                </div>
                            </div>
                            <div className="md:rounded-lg rounded-md bg-white p-3 shadow-lg lg:col-span-3 lg:p-12">
                                <form ref={form} onSubmit={sendEmail} className="md:space-y-4 space-y-2">
                                    <div>
                                        <label className="font-medium ml-1 md:text-base text-sm" htmlFor="name">Name *</label>
                                        <input
                                            name='name'
                                            className="w-full md:rounded-lg rounded-sm bg-orange-50 border-gray-200 md:p-3 p-2 text-sm"
                                            placeholder="Enter your Name"
                                            type="text"
                                            id="name"
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:gap-4 gap-2 sm:grid-cols-2">
                                        <div>
                                            <label className="font-medium ml-1 md:text-base text-sm" htmlFor="email">Email *</label>
                                            <input
                                                name='email'
                                                className="w-full md:rounded-lg rounded-sm bg-orange-50 border-gray-200 md:p-3 p-2 text-sm"
                                                placeholder="Enter your Email"
                                                type="email"
                                                id="email"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="font-medium ml-1 md:text-base text-sm" htmlFor="phone">Phone *</label>
                                            <input
                                                name='phone'
                                                className="w-full md:rounded-lg rounded-sm bg-orange-50 border-gray-200 md:p-3 p-2 text-sm"
                                                placeholder="Enter your Contact Number"
                                                type="tel"
                                                id="phone"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="font-medium md:ml-1 md:text-base text-sm" htmlFor="message">What would you like to discuss?</label>
                                        <textarea
                                            name='message'
                                            className="w-full md:rounded-lg rounded-sm bg-orange-50 border-gray-200 p-3 text-sm"
                                            rows="8"
                                            id="message"
                                        ></textarea>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="inline-block w-full rounded-lg bg-orange-400 px-5 py-3 font-medium text-white sm:w-auto"
                                        >
                                            Send Enquiry
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactUs;