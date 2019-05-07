import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const AddComment = props => {
    return(
        <Form onSubmit={props.addNewComment}>
            <FormGroup>
                <Input 
                    name= 'text'
                    value={props.data.text}
                    placeholder='Add a comment...'
                    onChange={props.newComment}
                />   
            </FormGroup>        
        </Form>
    )
}

export default AddComment;