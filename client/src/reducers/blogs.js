const blogs = (state = initialState, action) => {
  switch (action.type) {
    case "BLOG":
      return action.blog;
    case "BLOGS":
      return action.blogs;
    case "ADD_BLOG":
      return [action.blog, ...state]
    case "REMOVE_BLOG":
      return state.filter( blog => blog.id !== action.blog.id );
    case "EDIT_BLOG":
      return state.map(blog => {
        if (blog.id === action.editedBlog.id) {
          return Object.assign({}, blog, {
            title: action.editedBlog.title,
            body: action.editedBlog.body,
            id: action.editedBlog.id
          })
        }
        return blog
      })
    default:
      return state;
  }
}
const initialState = [{ 
  id: 0,
  title: "First Blog",
  body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
},
]
export default blogs;
      
  