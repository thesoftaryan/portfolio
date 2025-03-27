const Contact = () => {
    return (
        <section id="contact" className="min-h-screen bg-[#121212] text-white px-10 py-20 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF8C00] mb-6">Contact</h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
                Have a question or feedback? Feel free to reach out!
            </p>

            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <a href="mailto:your.email@example.com" target="_blank" className="flex items-center gap-2 text-lg text-gray-300 hover:text-[#FF8C00] transition">
                    <i className="devicon-google-plain text-2xl"></i> thesoftaryan@gmail.com
                </a>
                <a href="https://linkedin.com/in/thesoftaryan" target="_blank" className="flex items-center gap-2 text-lg text-gray-300 hover:text-[#FF8C00] transition">
                    <i className="devicon-linkedin-plain text-2xl"></i> LinkedIn
                </a>
                <a href="https://github.com/thesoftaryan" target="_blank" className="flex items-center gap-2 text-lg text-gray-300 hover:text-[#FF8C00] transition">
                    <i className="devicon-github-original text-2xl"></i> GitHub
                </a>
            </div>
        </section>
    );
};

export default Contact;
