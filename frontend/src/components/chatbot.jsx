import { useState, useRef, useEffect } from "react";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    const response = await fetch("https://aryanportfoliobackend.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();
    setMessages([...newMessages, { sender: "bot", text: data.response }]);
  };

  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);
    return (
        <div className="z-50 fixed bottom-24 right-4 md:right-10 bg-[#1E1E2E] w-80 md:w-96 lg:w-[400px] p-4 rounded-xl shadow-xl border border-[#FF8C00]">
      <div id="chat-container" className="h-64 md:h-80 overflow-y-auto mb-2 p-2 bg-[#2A2A3B] rounded shadow-inner">
        {messages.map((msg, i) => (
          <p
            key={i}
            className={`p-2 my-3 rounded-lg ${
              msg.sender === "user"
                ? "bg-[#FF8C00] text-white text-right pr-6 ml-10"
                : "bg-[#313244] text-white text-left mr-10"
            }`}
          >
            {msg.text}
          </p>
        ))}
      </div>
      <input
        className="w-full p-2 rounded border border-gray-600 bg-[#313244] text-white"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Ask me something about me..."
      />
      <button
        className="mt-2 w-full bg-[#FF8C00] text-black px-4 py-2 rounded font-bold hover:bg-[#FFA500] transition duration-300"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>

    );
}

export default Chatbot;