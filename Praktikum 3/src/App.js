import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Component dari Class App</h1>
        <List />
        <Footer judul='Halaman Footer' nama="Diva Ardhia Rahmania" />
      </div>
    );
  }
}
export default App;