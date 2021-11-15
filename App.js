import React, { Component } from 'react'
import Count from './contains/count'
import Person from './contains/person'
import './App.css'
export default class App extends Component {


  render() {
    return (
      <main className="container">
        <Count/>
        <hr/>
        <Person/>
      </main>
    )
  }
}
