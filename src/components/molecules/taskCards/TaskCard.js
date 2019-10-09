import React, { Component } from 'react'
import Styles from './TaskCard.module.scss'
import Gosic14 from '../../atoms/texts/Gosic14'
import SwitchButton from '../../atoms/switches/Switch'
import Gosic12 from '../../atoms/texts/Gosic12'

const TaskCard = props => {
    const { title, content, checked,  handleChangeSwitch, handleClickSwitch } = props
    const styleCardActive = checked ? Styles.card__active : null
    return (
        <div className={`${Styles.card} ${styleCardActive}`}>
            <div className={Styles.titleArea}>
                <div className={Styles.title}><Gosic14 text={title}></Gosic14></div>
                <div className={Styles.switch}><SwitchButton checked={checked}  handleChangeSwitch={handleChangeSwitch} handleClickSwitch={handleClickSwitch}></SwitchButton></div>
            </div>
            <div className={Styles.contentArea}>
                <div className={Styles.content}><Gosic12 text={content}></Gosic12></div>
            </div>
        </div>
    )
}

export default TaskCard;
