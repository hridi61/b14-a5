import TechnologyCard from "./TechnologyCard";

function TechnologyList({ technologies, myStack, addToStack }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {technologies.map((tech) => {
        const isSelected = myStack.some((item) => item.id === tech.id);
        return <TechnologyCard key={tech.id} tech={tech} isSelected={isSelected} onAdd={addToStack} />;
      })}
    </div>
  );
}

export default TechnologyList;
