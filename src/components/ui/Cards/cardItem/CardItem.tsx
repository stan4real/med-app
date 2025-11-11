import * as styled from './CardItem.style'

type CardItemprops = {
    img:string,
    index: number,
    title:string,
    desc:string
}

const CardItem = ({img, index, title, desc}:CardItemprops) => {
    return (
        <styled.Card order={index}>
            <styled.Icon> <img src={img}></img> </styled.Icon>
            <styled.Title> {title} </styled.Title>
            <styled.Line/>
            <styled.Desc> {desc} </styled.Desc>
        </styled.Card>
    )
}

export default CardItem