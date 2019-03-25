import React from 'react';
import { Form } from 'semantic-ui-react';
import { connect, } from 'react-redux'
class EditBlog extends React.Component {
  state = { ...this.props.location.state}
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const editedBlog = { ...this.state};
    this.props.dispatch({ type: "EDIT_BLOG", editedBlog})
    this.props.history.push("/")
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            />
            <Form.TextArea
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            />
            <Form.Button>Submit</Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
export default connect()(EditBlog);