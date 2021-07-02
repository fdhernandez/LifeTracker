import './HeroItem.css'

export default function HeroItem( {item} ) {
  return (
    <div className='HeroItem'>
      <div>{item.name}</div>
      <div className='item-img'>
        <img src={item.image} alt={`${item.image} Display`}></img>
      </div>
    </div>
  )
}