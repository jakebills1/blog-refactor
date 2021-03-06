import axios from 'axios';
const blogs = (state = [], action) => {
  switch (action.type) {
    // case "BLOG":
    //   return action.blog;
    case "BLOGS":
      return action.blogs;
    case "ADD_BLOG":
      return [action.blog, ...state]
    case "REMOVE_BLOG":
      return state.filter( blog => blog.id !== action.id );
    case "EDIT_BLOG":
      return state.map(blog => {
        if (blog.id === action.blog.id) {
          return action.blog
        } else {
        return blog
        }
      })
    default:
      return state;
  }
}
export const getBlogs = () => {
  return (dispatch) => {
    axios.get("/api/blogs")
      .then( res => dispatch({ type: "BLOGS", blogs: res.data, }))
  }
}
export const addBlog = (newBlog) => {
  return (dispatch) => {
    axios.post("/api/blogs", newBlog)
      .then( res => dispatch({ type: "ADD_BLOG", blog: res.data, }))
  }
}
export const deleteBlog = (id) => {
  return (dispatch) => {
    axios.delete(`/api/blogs/${id}`)
      .then( res => dispatch({ type: "REMOVE_BLOG", id: id}))
  }
}
export const editBlog = (editedBlog) => {
  return (dispatch) => {
    axios.put(`/api/blogs/${editedBlog.id}`, editedBlog)
      .then( res => dispatch({ type: "EDIT_BLOG", blog: res.data}))
  }
}
export default blogs;
      
  