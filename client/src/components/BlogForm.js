import React from 'react';
import { Header, Form,  } from 'semantic-ui-react';
import { connect, } from 'react-redux';
import { addBlog, } from '../reducers/blogs'
class BlogForm extends React.Component {
  state = { title: "", body: "", }
  handleChange =(e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body, } = this.state;
    const { dispatch, } = this.props;
    const blog = {title, body}
    dispatch(addBlog(blog))
    // dispatch({ type: "NEW_ID"})
    this.setState({ title: "", body: "", })
    this.props.history.push("/")
  }
  render() {
    return (
      <div>
        <Header as="h3">New Blog</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
            name="title"
            label="Title"
            required
            onChange={this.handleChange}
            value={this.state.title}
            />
            <Form.TextArea
            name="body"
            label="Body"
            required
            onChange={this.handleChange}
            value={this.state.body}
            />
            <Form.Button>Submit</Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
// const mapPropsToState = (state) => {
//   return { id: state.idGen, }
// }
export default connect()(BlogForm);
