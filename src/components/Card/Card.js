import './Card.css'




const Card = (props) => {
  return (
    <div className='section-wrapper'>
        <div className='most-popular-items'>
            <div className='most-popular-item'>
                <div className='card-wrapper'>
                    <img className='most-popular-item-image' src={props.image}/>
                    <div className='most-popular-item-content'>
                        <h5 className='most-popular-item-title'>
                        {props.title} <br/>
                        <span>{props.category}</span>
                        </h5>
                        <ul>
                            <li> <span>{props.rate}</span></li>
                            <li><span>{props.download} </span></li>
                        </ul>

                       
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card