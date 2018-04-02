import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import httpClient from '../httpClient.js'

class NewMinion extends React.Component {
    handleFormSubmit(evt){
        evt.preventDefault()
        console.log("Form clicked")
        const {name, imageURL} = this.refs
        const minionFormFields = {
            name: name.refs.name.value,
            imageURL: imageURL.refs.imageURL.value
        }

        if(!minionFormFields.imageURL) delete minionFormFields.imageURL 

        httpClient.createMinion(minionFormFields).then((serverResponse) => {
            console.log(serverResponse.data)
            this.props.history.push('/minions')
        })
    }
    render() {
        return(
            <div className="NewMinion">
                <h1>Add New Minion</h1>
                <Form onSubmit={this.handleFormSubmit.bind(this)}>
                    <FormGroup>
                        <Label for="name">name</Label>
                        <Input ref="name" innerRef="name" type="text" id="id" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="imageURL">Image URL</Label>
                        <Input ref="imageURL" innerRef="imageURL" type="text" id="imageURL" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default NewMinion 