import React from 'react'
import httpClient from '../httpClient.js'
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'

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
    handleDeleteClick() {
        httpClient.deleteMinion(this.props.match.params.id).then((serverResponse) => {
            this.props.history.push('/minions')
        })
    }
    handleEditFormSubmit(evt) {
        evt.preventDefault()
        const {name, imageURL} = this.refs
        const minionFormFields = {
            name: name.refs.name.value,
            imageURL: imageURL.refs.imageURL.value
        }
        httpClient.updateMinion(this.props.match.params.id, minionFormFields).then((serverResponse) => {
            this.setState({
                modalOpen: false,
                minion: serverResponse.data.minion 
            })
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
        const {minion, modalOpen} = this.state
        console.log(minion)
        if(!minion) return <h1>Loading Minion...</h1>
        return (
            <div className="MinionDetail" style={{textAlign: 'center'}}>
                <h1>{minion.name}</h1>
                <img src={minion.imageURL} />
                <div>
                    <Button onClick={this.handleEditClick.bind(this)} color="primary">Edit</Button>
                </div>

                <Modal isOpen={modalOpen}>
                    <ModalHeader>Edit Minion</ModalHeader>
                    <Form onSubmit={this.handleEditFormSubmit.bind(this)}>
                        <ModalBody>
                            <FormGroup>
                                <Label for="name">name</Label>
                                <Input defaultValue={minion.name} ref="name" innerRef="name" type="text" id="id" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="imageURL">Image URL</Label>
                                <Input defaultValue={minion.imageURL} ref="imageURL" innerRef="imageURL" type="text" id="imageURL" />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="info">Update</Button>
                            <Button type="button" onClick={this.handleDeleteClick.bind(this)}color="danger">Delete</Button>
                        </ModalFooter>
                    </Form>
                </Modal>

            </div>
        )
    }
}

export default MinionDetail 