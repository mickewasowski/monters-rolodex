import { Component } from "react";

class CardList extends Component {
    render(){
        const {monsters} = this.props;

        console.log(this.props);
        return(
            <div>
                {monsters.map(x => {
                    return <h1 key={x.name}>{x.name}</h1>
                })}
            </div>
        )
    }
}

export default CardList;