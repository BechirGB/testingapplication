import './MostPopular.css'
import {Card }from '../../components/index'

import MostPopularData from '../../data/MostPopularData'

const MostPopular = () => {

  const cards=MostPopularData.map(card=>{
    return <Card  key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
  }
  )  
  return (
    <div className='section-wrapper'>
    <div className='section-header'>
        <h4> Most Popular</h4>
    </div>
    <div className='most-popular-items'>
   {cards}
</div>
    </div>



   
  )
}

export default MostPopular