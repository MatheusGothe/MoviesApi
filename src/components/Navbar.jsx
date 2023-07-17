import {useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import './Navbar.css'


const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY


const Navbar = () => {

  const [search,setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }
  
  const fetchData = async () => {
    const searchWithQueryURL = `${searchUrl}?api_key=${apiKey}&query=${search}`;
    const res = await fetch(searchWithQueryURL);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    if (search) {
      navigate(`/search?q=${search}`);
      fetchData();
    } else{
      navigate('/')
    }
  }, [search]);
  


  return (
    <div>
      <nav id="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie /> MoviesLib
          </Link>
        </h2>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder="Busque um filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
