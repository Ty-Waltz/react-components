import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import CharacterList from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';

import './App.css';

const Navbar = () => (
    <nav >
       <NavLink to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
        <NavLink to="/browse-characters" className="nav-link" activeClassName="active-link">Browse Characters</NavLink>
        <NavLink to="/comics" className="nav-link" activeClassName="active-link">Comics</NavLink>
    </nav>
);

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>Marvel Router App</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<CharacterList />} />
                <Route path="/characters/:id" element={<CharacterDetails />} />
                <Route path="/comics" element={<Comics />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};


export default App;