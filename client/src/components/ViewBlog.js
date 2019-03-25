import React from 'react';
import { Segment, Header, Button, Icon, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
const ViewBlog = ({ ...props, }) => {
  return (
    <Segment >
      <h1>{props.location.state.title}</h1>
      <p>{props.location.state.body}</p>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <Button icon color="blue" as={Link} to={{ pathname: `/blogs/${props.location.state.id}/edit`, state: { ...props.location.state}}}><Icon name="pencil"/></Button>
      </div>

    </Segment>
  )
}
export default ViewBlog;