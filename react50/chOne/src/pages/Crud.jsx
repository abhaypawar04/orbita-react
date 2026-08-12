import { useState } from "react";

function Crud() {
  const [post, setPost] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  return (
    <>
      <h1>BLOGIFY</h1>
      <hr />
      <input
        type="text"
        name="newPost"
        value={newPost}
        placeholder="write your blog here"
        onChange={(e) => setNewPost(e.target.value)}
      />
      {/* <button onClick={() => setPost([...post, newPost])}>
        {editIndex !== null ? "update" : "add"}{" "}
      </button> */}

      <button
        onClick={() => {
          if (editIndex !== null) {
            const updatedPosts = [...post];
            updatedPosts[editIndex] = newPost;
            setPost(updatedPosts);
            setEditIndex(null);
          } else {
            setPost([...post, newPost]);
          }
          setNewPost("");
        }}
      >
        {editIndex !== null ? "update" : "add"}
      </button>

      <hr />

      <table>
        {post.map((item, index) => (
          <>
            <tr>
              <td>{item}</td>
              <td>
                <button
                  onClick={() => setPost(post.filter((_, i) => i != index))}
                >
                  delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    setNewPost(item);
                    setEditIndex(index);
                  }}
                >
                  edit
                </button>
              </td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
}

export default Crud;
