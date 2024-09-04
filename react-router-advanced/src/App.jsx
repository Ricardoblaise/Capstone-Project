import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </Router>
   );
}

export default App;