
import { useParams } from "react-router-dom"
const PostDetail = () => {
    let {category}=useParams()
    return (

      <h1>now PostDetail file is running {category}</h1>
    )
  }
  
  export default PostDetail