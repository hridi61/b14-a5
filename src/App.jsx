import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";

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
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load technologies!");
      });
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("myStack");

    if (saved) {
      setMyStack(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myStack", JSON.stringify(myStack));
  }, [myStack]);

  const addToStack = (tech) => {
    const alreadyAdded = myStack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setMyStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const removeFromStack = (id) => {
    const removedTech = myStack.find((tech) => tech.id === id);

    setMyStack((prev) => prev.filter((tech) => tech.id !== id));

    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack!`);
    }
  };

  const removeAll = () => {
    setMyStack([]);
    toast.info("All technologies removed!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <section
        id="technologies"
        className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8"
      >
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold mb-1">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-gray-500 mb-8">
            Pick technologies to build your ideal development stack.
          </p>

          {loading ? (
            <p className="text-center py-10 text-gray-500">
              Loading technologies...
            </p>
          ) : (
            <TechnologyList
              technologies={technologies}
              myStack={myStack}
              addToStack={addToStack}
            />
          )}
        </div>

        <div className="lg:col-span-1">
          <StackSidebar
            myStack={myStack}
            removeFromStack={removeFromStack}
            removeAll={removeAll}
          />
        </div>
      </section>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
