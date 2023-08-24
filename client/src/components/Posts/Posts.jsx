import React, { useEffect } from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import { fetchPosts } from "../../api";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    fetchPosts(dispatch)
  },[dispatch])

  console.log(posts);
  return !posts.length ? 
    <CircularProgress />
   : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
