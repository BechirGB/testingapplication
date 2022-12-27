import './GamingLibraryCard.css'

const GamingLibraryCard = () => {
  return (
    <div className='gaming-library-card'>
    <ul>
        <li>
            <img src={props.image}/>
        </li>
    </ul>
    </div>
  )
}

export default GamingLibraryCard