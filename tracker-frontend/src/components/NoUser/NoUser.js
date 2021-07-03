import { Link } from 'react-router-dom'
import './NoUser.css'

export default function NoUser({ page }) {
  return (
    <div className='NoUser'>
      <p>Login <Link to='/login'>here</Link> for your {page}</p>
    </div>
  )
}