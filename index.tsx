import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './components/Clock';


class Time extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
      this.handleClickon = this.handleClickon.bind(this);
      this.handleClickoff = this.handleClickoff.bind(this);
    }
  
    handleClickon() {
      this.setState({
        isToggleOn: true
      });
    }

    handleClickoff(){
      this.setState({
        isToggleOn: false
      });
    }
  
    render() {
      const isToggleOn =this.state.isToggleOn;
      let button;
      if(isToggleOn){
        button =<ButtonOff onClick={this.handleClickoff} />;
        return (
          <div>
          <h1>現在時刻を表示します。</h1>
          {button}
          <Clock/>
          </div>
        );
      }else{
        button =<ButtonOn onClick={this.handleClickon}/>;
        return (
          <div>
          <h1>現在時刻を表示します。</h1>
          {button}
          </div>
        );
      }
    }
  }

  function ButtonOn(props){
    return(
      <button onClick={props.onClick}>
        表示
      </button>
    );
  }

  function ButtonOff(props){
    return(
      <button onClick={props.onClick}>
        閉じる
      </button>
    )
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Time />);
