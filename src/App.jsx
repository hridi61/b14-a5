import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [myStack, setMyStack] = useState([]);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.error("Failed to load technologies:", err));
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("myStack");
    if (saved) setMyStack(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("myStack", JSON.stringify(myStack));
  }, [myStack]);

  const addToStack = (tech) => {
    setMyStack((prev) => {
      const withoutSameCategory = prev.filter((t) => t.category !== tech.category);
      return [...withoutSameCategory, tech];
    });
  };

  const removeFromStack = (id) => {
    setMyStack((prev) => prev.filter((t) => t.id !== id));
  };

  const removeAll = () => setMyStack([]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <section id="technologies" className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold mb-1">
            Explore the{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-500 mb-8">Pick one technology per category to build your ideal stack.</p>
          <TechnologyList technologies={technologies} myStack={myStack} addToStack={addToStack} />
        </div>
        <div className="lg:col-span-1">
          <StackSidebar myStack={myStack} removeFromStack={removeFromStack} removeAll={removeAll} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
