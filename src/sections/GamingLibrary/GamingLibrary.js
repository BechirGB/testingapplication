import './GamingLibrary.css'
import {GamingLibraryCard} from '../../components/index'
import GamingLibraryData from '../../data/GamingLibraryData'
const GamingLibrary = () => {
    const cards=GamingLibraryData.map(card=>{
        return <GamingLibraryCard  key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
      })
  return (
    <div className='section-wrapper'>
    <div className='section-header'>
        <h4> GamingLibrary</h4>
    </div>
    <div className='most-popular-items'>
    {cards}
   
</div>
    </div>
  )
}

export default GamingLibrary