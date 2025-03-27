import 'devicon'
import Header from "./components/header";
import Introduction from "./components/introduction";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Chatbot from './components/chatbot';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <button
        className="z-50 fixed flex bottom-6 right-7 bg-[#FF8C00] text-white p-4 rounded-full shadow-lg"
        onClick={() => setChatOpen(!chatOpen)}
      ><FontAwesomeIcon icon={faMessage} className="text-2xl" />
      </button>
      {chatOpen && <Chatbot />}

      <Header/>
      <Introduction/>
      <Skills/>
      {/* Resume Section */}
      <section id="resume" className="min-h-screen bg-[#121212] text-white px-10 py-20 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF8C00] mb-6">Resume</h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
                Want to know more about my skills and experience? Download my resume below.
            </p>
            
            <a 
                href="/assets/AryanResume.pdf"
                download="AryanResume.pdf"
                className="bg-[#FF8C00] text-black px-6 py-3 text-lg font-semibold rounded-lg shadow-md 
                           hover:bg-[#FFA500] transition duration-300"
            >
                Download Resume
            </a>
        </section>
      {/* Resume Section Ends here */}
      <Contact/>

    </>
  )
}

export default App
