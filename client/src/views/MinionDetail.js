import React from 'react'
import httpClient from '../httpClient.js'
import {Button, Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'

class MinionDetail extends React.Component {
    
    state = {
        minion: null,
        modalOpen: false 
    }

    handleEditClick() {
        this.setState({
            modalOpen: true 
        })
    }
    
    componentDidMount() {
        httpClient.getAMinion(this.props.match.params.id).then((serverResponse) => {
            this.setState({
                minion: serverResponse.data
            })
        }) 
    }

    render(){
        const {minion} = this.state
        console.log(minion)
        if(!minion) return <h1>Loading Minion...</h1>
        return (
            <div className="MinionDetail" style={{textAlign: 'center'}}>
                <h1>{minion.name}</h1>
                <img src={minion.imageURL} />
                <div>
                    <Button onClick={this.handleEditClick.bind(this)} color="primary">Edit</Button>
                </div>

                <Modal isOpen={this.state.modalOpen}>

                </Modal>

            </div>
        )
    }
}

export default MinionDetail 