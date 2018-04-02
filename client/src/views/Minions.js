import React from 'react'

class Minions extends React.Component {

    state = {
        minions: []
    }

    componentDidMount() {
        
    }

    render(){
        return(
            <div className="Minions">
                <h2>Number of Minions: 0</h2>
            </div>
        )
    }
}

export default Minions 