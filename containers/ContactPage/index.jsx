import React from 'react'
import ContactForm from './ContactForm'
import ContactInformation from './ContactInformation'
import ContactMap from './ContactMap'

function ContactUsC() {
    return (
        <section className='contact'>
            <ContactMap />
            <div className="container">
                <div className="contact__left">
                    <ContactInformation />
                </div>

                <div className="contact__right">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactUsC