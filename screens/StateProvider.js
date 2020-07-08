import React, { Component } from 'React';

export const MContext = React.createContext();

class StateProvider extends Component {
  
  state = {
    message: "worked!",
  }

  render() {
    return (
      <MContext.Provider value={{ 
        state: this.state,
        setMessage: (value) => this.setState({message: value })}}>
        {this.props.children}  
      </MContext.Provider>)
    )
}