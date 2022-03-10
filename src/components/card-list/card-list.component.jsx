// import { Component } from "react";
import './card-list.styles.css';
import Card from '../card/card.component';

//implicit return
const CardList = ({monsters}) => (
    <div className='card-list'>
        {monsters.map((monster) => {
              return <Card monster={monster}/>
        })}
    </div>
);


// class CardList extends Component {
//     render(){
//         const {monsters} = this.props;
//         return(
//             <div className='card-list'>
//                 {monsters.map((monster) => {
//                     return <Card monster={monster}/>
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;


//robohash.org