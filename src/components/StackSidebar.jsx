function StackSidebar({ myStack, removeFromStack, removeAll }) {
  return (
    <div className="border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-24">
      <h3 className="font-bold text-lg">Your Stack</h3>
      <p className="text-sm text-gray-400 mb-4">{myStack.length} Technology Selected</p>

      {myStack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl py-10 text-center text-sm text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="flex flex-col gap-3 mb-5">
          {myStack.map((tech) => (
            <div key={tech.id} className="flex items-center justify-between border border-gray-100 rounded-xl p-3">
              <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                <div>
                  <p className="font-semibold text-sm">{tech.name}</p>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
              </div>
              <button onClick={() => removeFromStack(tech.id)} className="text-gray-400 hover:text-red-500" aria-label={`Remove ${tech.name}`}>
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {myStack.length > 0 && (
        <button onClick={removeAll} className="w-full py-2 rounded-lg border border-red-200 text-red-500 font-semibold text-sm hover:bg-red-50">
          Remove All
        </button>
      )}
    </div>
  );
}

export default StackSidebar;