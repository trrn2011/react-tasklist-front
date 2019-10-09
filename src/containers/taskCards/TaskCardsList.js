import React, { Component } from 'react'
import Styles from './TaskCardsList.module.scss'
import TaskCardContainer from '../taskCards/TaskCardContainer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { switchTask } from '../../redux/actions/index'
class TaskCardList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const ListItem = (props) => {
            const task = props.task
            return (
                <li className={Styles.card}>
                    <TaskCardContainer
                        title={task.title}
                        content={task.content}
                        checked={task.checked}
                        handleChangeSwitch={() => this.props.switchTask(task.id)}
                    ></TaskCardContainer>
                </li>
            )
        }
        const listItems = this.props.tasks.map(task => {
            return (
                <ListItem key={task.id} task={task}></ListItem>
            )
        })
        return <ul className={Styles.cardList}>{listItems}</ul>
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchTask: (id) => dispatch(switchTask(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskCardList)
