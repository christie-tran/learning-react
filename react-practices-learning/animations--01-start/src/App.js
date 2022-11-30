import React, { Component } from "react";

import { Transition } from 'react-transition-group';
import CSSTransition from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className='Button' onClick={
          () => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <br />
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('on Enter')}
          onEntering={() => console.log('on Entering')}
          onEntered={() => console.log('on Entered')}
          onExit={() => console.log('on Exit')}
        >
          {state => (
            <div style={{
              backgroundColor: 'red',
              width: 100,
              height: 100,
              margin: 'auto',
              transition: 'opacity 1s ease-out',
              opacity: state === 'exited' ? 0 : 1,
            }}></div>
          )}
        </Transition>

        {/* <br />
        {/* <Transition in={this.state.modalIsOpen} timeout={300} mountOnEnter unmountOnExit>
          {state => (
            <Modal show={state} closed={this.closeModal} />
          )}
        </Transition> */}
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {/* {this.state.modalIsOpen ? <Modal show={this.state.modalIsOpen} closed={this.closeModal} /> : null} */}
        {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
