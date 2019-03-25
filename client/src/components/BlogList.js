import React from 'react';
import { getBlogs, deleteBlog } from '../reducers/blogs'
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import styled from 'styled-components';


class BlogList extends React.Component {
  componentDidMount(){
    this.props.dispatch(getBlogs())
  }
  render() {
    const { blogs, dispatch } = this.props
    return (
      <div>
        {blogs.map( blog => (
        <Segment key={blog.id}>
          <Link to={{ pathname: `/blogs/${blog.id}`, state: {...blog}}}>
            <Hover>{blog.title}</Hover>
          </Link>
          <p>{blog.body}</p>
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <Button icon color="red" style={{textAlign: "right"}}
            onClick={() => dispatch(deleteBlog(blog.id))}
            ><Icon name="trash" /></Button>
          </div>
        </Segment>
        ))}
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px", }}>
        <Button as={Link} to="/add" color="blue">Add a new blog</Button>
      </div>
      </div>
    )
  }
  
}
const mapStatetoProps = (state) => {
  return { blogs: state.blogs, }
}
const Hover = styled.h2`
  color: black;
  &:hover {
    color: blue !important;
  }
`
export default connect(mapStatetoProps)(BlogList);
