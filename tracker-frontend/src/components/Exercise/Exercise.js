import { Link } from 'react-router-dom'
import PageH from '../PageH/PageH'
import NoUser from "../NoUser/NoUser"
import './Exercise.css'

export default function Exercise({ user, setAppState, exercises = []}) {
  const isAuthenticated = Boolean(user?.email)
  return (
    <div className="Exercise">
      {isAuthenticated ? 
      <>
        <PageH sectionName='Exercise'/>
        <div className='aty-btn'>
          <Link className='exercise-btn' to='/exercise/create'>Add an Exercise</Link>
        </div>
        
        <div className='aty-section'>
          {exercises.length > 0 ?
            exercises.map((item) => (
              <div key={item.id} className='aty-card'>
                <div className='aty-type'>
                  <div className='aty-name'>{item.name}</div>
                  <div className='aty-category'>{item.category}</div>
                </div>
                <div className='aty-stats'>
                  <div>Duration: <span>{item.duration}</span></div>
                  <div>Intensity: <span>{item.intensity}</span></div>
                </div>
                <div className='aty-meta'>
                  <div>{new Date(item.date).toLocaleString()}</div>
                </div>
              </div>
            )) : <div>No data yet</div>
          }
        </div>
      </>
      : 
      <NoUser page='exercise info'/>
      }
    </div>
  )
}