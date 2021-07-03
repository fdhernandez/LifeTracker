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
        <div className='ex-btn'>
          <Link className='exercise-btn' to='/exercise/create'>Add an Exercise</Link>
        </div>
        
        <div className='ex-section'>
          {exercises.length > 0 ?
            exercises.map((item) => (
              <div key={item.id} className='ex-card'>
                <div className='ex-type'>
                  <div className='ex-name'>{item.name}</div>
                  <div className='ex-category'>{item.category}</div>
                </div>
                <div className='ex-stats'>
                  <div>Duration: <span>{item.duration}</span></div>
                  <div>Intensity: <span>{item.intensity}</span></div>
                </div>
                <div className='ex-meta'>
                  <div>{new Date(item.date).toLocaleString()}</div>
                </div>
              </div>
            )) : <div>No data</div>
          }
        </div>
      </>
      : 
      <NoUser page='exercise info'/>
      }
    </div>
  )
}