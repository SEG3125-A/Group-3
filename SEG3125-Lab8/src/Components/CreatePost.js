import React from 'react';
import "./CreatePost.css"
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function CreatePost()  {
  return (
    <div className="create-post-wrapper">
      <h2 className="form-title">Create New Post</h2>
      <form className="create-post-form">
        <label htmlFor="postTitle" className="form-label">Title</label>
        <input type="text" id="postTitle" name="postTitle" className="form-input" placeholder="Enter title for your artwork" />

        <label htmlFor="postDescription" className="form-label">Description</label>
        <textarea id="postDescription" name="postDescription" className="form-textarea" rows="3" placeholder="Describe your artwork"></textarea>

        <label htmlFor="postImage" className="form-label">Artwork Image</label>
        <input type="file" id="postImage" name="postImage" className="form-input" />

        <button type="submit" className="submit-button">Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;