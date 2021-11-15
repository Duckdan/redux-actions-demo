import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/person'


class Person extends Component {

    state = { person: {} }

    handAddPerson = ()=>{
        const name = this.nameNode.value
        const {addPerson} = this.props
        addPerson({name})
        this.nameNode.value=""
    }

    render() {
        const { counter,persons } = this.props
        return (
            <div>
                <h2>当前count的值是：：{counter}</h2>
                <input type="text" ref={c=>this.nameNode = c}/>
                <button onClick={this.handAddPerson}>添加</button>
                <ul>
                    {
                        persons.map(({name},index)=><li key={index}>{index}==={name}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        counter: state.count,
        persons: state.persons
    }), 
    {
        addPerson
    }
)(Person)