// Routes

// Import libraries
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

//import page components
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Websites from './Pages/Websites/Websites';
import Rps from './Pages/Projects/rps/Rps';
import Weather from  './Pages/Projects/weather/Weather';
import Todo from './Pages/Projects/todo/Todo';
import Expense from './Pages/Projects/expense/Expense';
import Shopping from './Pages/Projects/shopping/Shopping';

import WebsitesM from './Pages/Mobile/Components/WebsitesM';
import ProjectsM from './Pages/Mobile/Components/ProjectsM';
import RpsM from './Pages/Mobile/Components/Projects/rps/RpsM';
import WeatherM from './Pages/Mobile/Components/Projects/weather/WeatherM';
import TodoM from './Pages/Mobile/Components/Projects/todo/TodoM';
import ShoppingM from './Pages/Mobile/Components/Projects/shopping/ShoppingM';
import ExpenseM from './Pages/Mobile/Components/Projects/expense/ExpenseM';
// component - the router
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/websites" element={<Websites />} />
      <Route path="/projects/rps" element={<Rps />} />
      <Route path="/projects/weather" element={<Weather />} />
      <Route path="/projects/todo" element={<Todo />} />
      <Route path="/projects/expense-tracker" element={<Expense />} />
      <Route path="/projects/shopping-cart" element={<Shopping />} />
      
      <Route path="/mobile-websites" element={<WebsitesM />} />
      <Route path="/mobile-projects" element={<ProjectsM />} />
      <Route path="/projects/mobile-rps" element={<RpsM />} />
      <Route path="/projects/mobile-weather" element={<WeatherM />} />
      <Route path="/projects/mobile-todo" element={<TodoM />} />
      <Route path="/projects/mobile-shopping-cart" element={<ShoppingM />} />
      <Route path="/projects/mobile-expense-tracker" element={<ExpenseM />} />
    </Routes>
  );
}

//export component into index.js
export default App;