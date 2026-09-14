import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [myStack, setMyStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load technologies:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("myStack");
    if (saved) setMyStack(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("myStack", JSON.stringify(myStack));
  }, [myStack]);

  const addToStack = (tech) => {
    const alreadyAdded = myStack.some((t) => t.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setMyStack((prev) => {
      const withoutSameCategory = prev.filter((t) => t.category !== tech.category);
      return [...withoutSameCategory, tech];
    });
    toast.success(`${tech.name} added to your stack!`);
  };

  const removeFromStack = (id) => {
    const removedTech = myStack.find((t) => t.id === id);
    setMyStack((prev) => prev.filter((t) => t.id !== id));
    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    setMyStack([]);
    toast.info("Stack cleared.");
  };

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer position="top-right" autoClose={2000} />
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

          {loading ? (
            <p className="text-center text-gray-400 py-10">Loading technologies...</p>
          ) : (
            <TechnologyList technologies={technologies} myStack={myStack} addToStack={addToStack} />
          )}
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