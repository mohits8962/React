import React, { Component } from 'react'
import BUpdatingLifeCycleMethod from './BUpdatingLifeCycleMethod'



class AUpdatingLifeCycleMethod extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Mohit'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <h1>LifecycleA</h1>
                <button onClick={this.changeState}>Change state</button>
                <BUpdatingLifeCycleMethod />
            </div>
        )
    }
}

export default AUpdatingLifeCycleMethod