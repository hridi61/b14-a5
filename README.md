# Dev Stack

## Project Description

Dev Stack is a React-based website that helps developers explore different technologies and build their ideal development stack. Users can view technologies by category, add technologies to their stack, remove selected technologies, and save their stack in the browser.

## Technologies Used

- React
- JavaScript
- Tailwind CSS
- Vite
- React Toastify
- Local JSON Data
- Local Storage

## 3 Main Features

1. **Explore Technologies**  
   Users can browse different frontend, backend, database, language, styling, DevOps, and tools technologies.

2. **Build Your Own Stack**  
   Users can add technologies to the "Your Stack" section and remove individual technologies or remove all selected technologies.

3. **Save Selected Stack**  
   The selected technology stack is stored in localStorage, so the stack remains available after refreshing the page.

---

# React Questions & Answers

## 1. What is JSX, and why is it used?

JSX allows us to write HTML-like elements inside JavaScript. I used JSX in my React components such as `Navbar`, `Hero`, `TechnologyCard`, and `StackSidebar` to create the user interface in an easier and readable way.

## 2. What is the difference between Props and State?

Props are used to pass data or functions from a parent component to a child component. State stores data inside a component and can be changed when the application needs to update the UI.

In my project, `TechnologyList` receives `technologies`, `myStack`, and `addToStack` as props. The `myStack` data is managed using state in `App.jsx`.

## 3. What is the useState hook, and how is it used in this project?

`useState` is a React Hook used to store and update data in a component.

In my project, I used `useState` in `App.jsx` to manage the technology list and the selected stack. I also used it in `Navbar.jsx` to control the mobile menu.

## 4. What is the useEffect hook, and why is it used for JSON data fetching?

`useEffect` is used to perform side effects after a component renders.

In my project, I used `useEffect` to fetch technology data from `technologies.json` when the application loads. I also used it to read and save the selected stack using `localStorage`.

## 5. Why is the key prop important when using map()?

The `key` prop helps React identify each item in a list uniquely. It helps React efficiently update the correct item when the list changes.

In my project, I used `tech.id` as the key when displaying technology cards and selected stack items.

## 6. What is conditional rendering? How is it used in this project?

Conditional rendering means displaying different content depending on a condition.

In my project, `StackSidebar.jsx` checks whether `myStack.length === 0`. If the stack is empty, it displays "Your stack is empty." Otherwise, it displays the selected technologies.

## 7. How do you pass data from a parent component to a child component? How do you pass data from child to parent?

Data is passed from a parent component to a child component using props.

In my project, `App.jsx` passes `technologies`, `myStack`, and `addToStack` to `TechnologyList`. The child component then passes the required data and function to `TechnologyCard`.

For child-to-parent communication, the parent passes a function as a prop. For example, `onAdd` is passed to `TechnologyCard`, and the child calls `onAdd(tech)` when the user clicks the Add to Stack button.