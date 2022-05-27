import {BsHeartFill} from 'react-icons/bs'
import { MainCardWrapper } from './MainContainer.Styles'
export default function CardMain ({title, img,hearts}){
    return(
        <MainCardWrapper className='card__main' >
            <img src={img} alt="" />
            <div className="card-name">
                <h2>{title}</h2>
                <div className="card-icon">
                    <i>{" "}<BsHeartFill/> <span>{hearts}</span></i>
                </div>
            </div>
            <div className='stats'>
                <p>Current Bid <span>1.32 ETH</span></p>
                <p>Ending in <span>1d:12h:10m</span></p>
            </div>
            <div class="button">
                <a href=" " className='button1 btn'>Please a Bid</a>
                <a href=" " className='button2 btn'>History</a>
            </div>
        </MainCardWrapper>
    )
}