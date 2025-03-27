

const Introduction = () => {
    return (
        <section id="intro" className="min-h-screen w-full flex items-center justify-center bg-[#121212] text-white px-10">
            <div className="w-screen max-w-none flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 flex justify-center ml-1 mb-10 md:mb-0">
                    <img
                        src={'/assets/aryanImage.jpeg'}
                        alt="Aryan Maurya"
                        className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-[#FF8C00] shadow-lg object-top"
                    />
                </div>

                <div className="md:w-1/2 text-center mr-1 md:text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#FF8C00]">Hello, I'm Aryan Maurya</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        I'm a passionate developer, always eager to learn and create great experiences.
                    </p>
                </div>


            </div>
        </section>
    );
}

export default Introduction;