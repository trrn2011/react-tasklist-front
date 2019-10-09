import React from 'react'
import logo from './logo.svg'
import './App.css'
import Gosic12 from './components/atoms/texts/Gosic12'
import Gosic14 from './components/atoms/texts/Gosic14'
import Gosic16 from './components/atoms/texts/Gosic16'
import TaskCardsList from  './containers/taskCards/TaskCardsList'

class App extends React.Component { 
    render() {
        return (
            <div>
                <TaskCardsList></TaskCardsList>
            </div>
        )
    }
}

export default App
