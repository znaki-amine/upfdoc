import React, { useEffect } from 'react';

export default function Support() {
    useEffect(() => {
        // Insert the Tawk.to script dynamically when the component mounts
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://embed.tawk.to/6571e509bfb79148e59b3192/1hh2edbun';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.head.appendChild(script);

        // Clean up the script when the component unmounts
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Need Support? We're here to help!</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Welcome to UPFDOC! Our support team is here for you, and you can also chat with our helpful chatbot for instant assistance. 🤝💬🤖
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        After completing the information, our dedicated support team will promptly respond to any questions or concerns you may have. Feel free to use our online chatbot on this page for immediate assistance. We're here to help! 🤝✨
                    </p>
                </div>

            </div>
        </div>
    );
}
