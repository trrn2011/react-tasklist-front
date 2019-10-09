import React, { Component } from 'react'
import Styles from './Switch.module.scss'
import './Switch.module.scss'
const SwitchButton = props => {
    return (
        <div className={Styles.switch}>
            <input
                type="checkbox"
                checked={props.checked}
            />
            <label
                onClick={() => {
                    props.handleClickSwitch()
                    sleep(1, props.handleChangeSwitch)
                }}
                className={Styles.label}
            ></label>
        </div>
    )
}
function sleep(waitSec, callbackFunc) {
    // 経過時間（秒）
    var spanedSec = 0

    // 1秒間隔で無名関数を実行
    var id = setInterval(function() {
        spanedSec++

        // 経過時間 >= 待機時間の場合、待機終了。
        if (spanedSec >= waitSec) {
            // タイマー停止
            clearInterval(id)

            // 完了時、コールバック関数を実行
            if (callbackFunc) callbackFunc()
        }
    }, 100)
}


export default SwitchButton
