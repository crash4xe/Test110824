import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class ShoppingList extends React.Component {
    render(){
        return (
            <>
            <h1>Shopping list for {this.props.name}</h1>
        <ul>
            <li>Google</li>
            <li>Meta</li>
            <li>Amazon</li>
        </ul>
            </> 
        
        );
    }
}



class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

   componentDidMount(){
    this.timerID = setInterval(()=> this.tick(), 1000);
   }

   componentWillUnmount(){
    clearInterval(this.timerID);
   }

   tick(){
    this.setState({
        date: new Date()
    });
   }

    render (){
        return (
            <>
            <div id='container' >
            <h1>hello</h1>
            <h2> Current Time is {this.state.date.toLocaleTimeString()}</h2>
            </div>
            <button onClick={()=>console.log('YESSSSSSS')}>Yes</button>
            </>
        );
    }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);