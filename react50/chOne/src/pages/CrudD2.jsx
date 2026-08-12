import { useState } from "react";

function CrudD2() {
  const [post, setPost] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [updateIndex, setUpdateIndex] = useState(null);

  return (
    <>
      <h1>Postify</h1>
      <hr />

      <div>
        <input
          type="text"
          name="newPost"
          value={newPost}
          placeholder="enter post here"
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button
          onClick={() => {
            if (updateIndex !== null) {
              const updatedPosts = [...post];
              updatedPosts[updateIndex] = newPost;
              setPost(updatedPosts);
              setUpdateIndex(null);
            } else {
              setPost([...post, newPost]);
            }
            setNewPost("");
          }}
        >
          {updateIndex !== null ? "edit" : "add"}
        </button>
      </div>

      <div>
        <table>
          <tbody>
            {post.map((item, index) => (
              <tr key={index}>
                <th>{item}</th>
                <th>
                  <button
                    onClick={() => {
                      setNewPost(item);
                      setUpdateIndex(index);
                    }}
                  >
                    edit
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => setPost(post.filter((_, i) => i !== index))}
                  >
                    delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CrudD2;
