import HeroItem from '../HeroItem/HeroItem'
import watch from '../../assets/watch.jpg'
import fitness from '../../assets/fitness.jpg'
import food from '../../assets/food.jpg'
import rest from '../../assets/rest.jpg'
import planner from '../../assets/planner.jpg'
import './Hero.css'

export default function Hero() {
  const items = [
    {
      name: "Planner",
      image: planner
    },
    {
      name: "Fitness",
      image: fitness
    },
    {
      name: "Food",
      image: food
    },
    {
      name: "Rest",
      image: rest
    }
  ]

  return (
    <div className="Home"> 
      <div className='home-intro'>
        <div className='intro-blurb'>
          <span>LifeTracker</span>
          <span>Helping you take back control of your world.</span>
        </div>
        <div className='intro-img'>
          <img src={watch} alt='fit watch'></img>
        </div>
      </div>
      <div className='home-layout'>
        {items.map(item => (
          <HeroItem key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
}