import { Component } from "react";
import './card-list.styles.css';
import Card from '../card/card.component';

class CardList extends Component {
    render(){
        const {monsters} = this.props;
        return(
            <Card monsters={monsters}/>
        )
    }
}

export default CardList;


//robohash.org