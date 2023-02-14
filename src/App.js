import { Route, Routes } from "react-router-dom";
import Index from "./components/jsx/Index";
import Navbar from "./components/jsx/Navbar";
import Footer from './components/jsx/Footer'
import Header from './components/jsx/Header'
import ContactUs from "./components/jsx/ContactUs";
import News from "./components/jsx/News";
import Courses from "./components/jsx/Courses";
import Library from "./components/jsx/library";
import Mentors from "./components/jsx/Mentors";
import CourseAdding from "./components/jsx/CourseAdding";
import Blog from "./components/jsx/Blog";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path='/news' element={<News />} />
        <Route path='/course' element={<Courses />} />
        <Route path="/books" element={<Library />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/CourseAdding" element={<CourseAdding />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;