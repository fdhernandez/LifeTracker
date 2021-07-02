import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar( { user, handleLogout }) {
  const isAuthenticated = Boolean(user?.email)

  return (
    <div className="Navbar">
      <Link to='/' className='home-link'>
      <img src = "http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt = "logo"></img>
      </Link>
      <div>
        <Link to='/activity'>Activity</Link>
        <Link to='/exercise'>Exercise</Link>
        <Link to='/nutrition'>Nutrition</Link>
        <Link to='/sleep'>Sleep</Link>
        {isAuthenticated ? 
        <button className="logout-link" onClick={handleLogout}>Logout</button> : 
        <>
          <Link to='/login' className='login-link'>Login</Link>
          <Link to='/register' className='register-link'>Register</Link>
        </> 
        }
      </div>
    </div>
  )
}





//<img src = "http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt = "logo"></img>