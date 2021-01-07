import React from "react";
import { Redirect } from "react-router-dom";

const Post = ({ match }) => {
  const slug = match.params.slug;
  const postSlugs = ["my-first-blog-post", "my-second-blog-post"];
  const postDoesNotExist = postSlugs.indexOf(slug) === -1;

  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  return (
    <div>
      <h1>this is something</h1>
    </div>
  );
};

export default Post;
