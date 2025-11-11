import CardItem from './cardItem/CardItem'
import * as styled from './Cards.style'
import { cardsData } from '../../../data/static';

const Cards = () => {
    return ( 
        <styled.CardsContainer>
            {
                cardsData.map((item, index) =>{
                    return(
                        <CardItem
                        key={item.id}
                        index={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                    />
                    )
                })
            }
        </styled.CardsContainer>
     );
}
 
export default Cards;