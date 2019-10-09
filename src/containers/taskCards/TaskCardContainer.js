import React, { Component } from 'react'
import SwitchButton from '../../components/atoms/switches/Switch'
import TaskCard from '../../components/molecules/taskCards/TaskCard'
class TaskCardContainer extends Component {
    constructor(props) {
        super(props)
        this.handleClickSwitch = this.handleClickSwitch.bind(this)
        this.state = {
            checked: this.props.checked
        }
    }

    handleClickSwitch() {
        this.setState({checked: !this.state.checked})
    }

    render() {
        const {title, content, handleChangeSwitch} = this.props
        return (
            <TaskCard
                checked={this.state.checked}
                handleChangeSwitch={handleChangeSwitch}
                title={title}
                content={content}
                handleClickSwitch={this.handleClickSwitch}
            ></TaskCard>
        )
    }
}

export default TaskCardContainer
