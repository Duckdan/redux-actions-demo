import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, asyncIncrement } from '../../redux/count'

class Count extends Component {

    state = { number: 1 }

    handleIncrement = () => {
        const { number } = this.state
        this.props.increment(+number)
    }

    handleDecrement = () => {
        const { number } = this.state
        this.props.decrement(+number)
    }

    handleOddIncrement = () => {
        const { counter } = this.props
        const { number } = this.state
        if (counter % 2 === 0) {
            alert('数据不符合')
            return
        }
        this.props.increment(+number)
    }

    handleAsyncIncrement = () => {
        const { number } = this.state
        this.props.asyncIncrement(+number, 500)
    }

    handleSelect = (event) => {
        this.setState({ number: event.target.value })
    }

    render() {
        const { counter,personLength } = this.props
        return (
            <>
                <h2>{counter},数组添加了几个人：{personLength}</h2>
                <select
                    onChange={this.handleSelect}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleOddIncrement}>奇数相加</button>
                <button onClick={this.handleAsyncIncrement}>异步相加</button>
            </>
        )
    }
}

export default connect(
    state => ({
        counter: state.count,
        personLength: state.persons.length
    }),
    {
        increment,
        decrement,
        asyncIncrement
    })(Count)