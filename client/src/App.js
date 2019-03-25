import React, { Fragment, } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import ViewBlog from './components/ViewBlog';
import EditBlog from './components/EditBlog';
import { Route, Switch} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';


const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={BlogList} />
        <Route exact path="/add" component={BlogForm} />
        <Route exact path="/blogs/:id" component={ViewBlog} />
        <Route exact path="/blogs/:id/edit" component={EditBlog} />
      </Switch>
    </Container>
  </Fragment>


)
export default App;
