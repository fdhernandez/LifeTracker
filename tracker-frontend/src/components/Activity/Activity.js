import { Link } from 'react-router-dom'
import PageH from '../PageH/PageH'
import NoUser from "../NoUser/NoUser"
import './Activity.css'

export default function Activity({ user, setAppState, totalExerciseTime = 0, avgCalories = 0, avgSleepTime = 0 }) {
  const isAuthenticated = Boolean(user?.email)

  return (
    <div className="Activity"> 
    {isAuthenticated ? 
    <>
      <PageH sectionName='Activity'/>
      <div className="activity-btns">
        <Link to='/exercise/create' className='exercise-btn'>Add an Exercise</Link>
        <Link to='/nutrition/create' className='nutrition-btn'>Add Nutrition</Link>
        <Link to='/sleep/create' className='sleep-btn'>Add Sleep</Link>
      </div>
      <div className='ex-section'>
        <div className='ex-card'>
          <div className='ex-stats'>
            <div>Total Exercise Time: <span>{totalExerciseTime}</span></div>
          </div>
        </div>
        <div className='ex-card'>
          <div className='ex-stats'>
            <div>Average Daily Calories: <span>{parseFloat(avgCalories).toFixed(2)}</span></div>
          </div>
        </div>
        <div className='ex-card'>
          <div className='ex-stats'>
            <div>Average Sleep Hours: <span>{parseFloat(avgSleepTime).toFixed(2)}</span></div>
          </div>
        </div>
      </div>
    </> : 
      <NoUser page='activity'/>
    }
    </div>
  )
}