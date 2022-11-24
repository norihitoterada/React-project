import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from './components/toggle'

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount(){
    this.timerID = setInterval(() => this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState(
      {date: new Date()}
    );
  }

  render(){
    return (
    <>
      <Toggle />
      <div>
        <h2>現在時刻 :  {this.state.date.toLocaleTimeString()}</h2>
      </div>
    </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);

