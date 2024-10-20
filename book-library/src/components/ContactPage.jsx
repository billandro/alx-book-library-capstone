import React from 'react'
import CreatorImage from '../assets/IMG_5145 (1).jpg';

function ContactPage() {
    return (
        <div className="p-16 w-full flex flex-col items-center">
            <h1 className="mb-5 text-3xl font-semibold tracking-widest">CONTACT ME</h1>
            <img src={CreatorImage} alt="Picture of the Book Library Creator" className="rounded-2xl w-auto h-auto max-w-full max-h-96" />
            <p className="font-medium mt-4">LinkedIn: <span className="font-normal hover:underline"><a href="https://www.linkedin.com/in/bill-qubeka/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/bill-qubeka/</a></span></p>
            <p className="font-medium">Github: <span className="font-normal hover:underline"><a href="https://www.linkedin.com/in/bill-qubeka/" target="_blank" rel="noopener noreferrer">https://github.com/billandro</a></span></p>
            <p className="font-medium">Twitter: <span className="font-normal hover:underline"><a href="https://www.linkedin.com/in/bill-qubeka/" target="_blank" rel="noopener noreferrer">http://x.com/Bill_Qubeka</a></span></p>
        </div>
    );
}

export default ContactPage