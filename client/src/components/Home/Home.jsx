import { Container, Grid, Grow, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'
import useStyles from "./styles"
import Pagination from '../Pagination'

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
          <Container>
            <Grid
              container
              className={classes.mainContainer}
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
                <Paper elevation={6} >
                  <Pagination /> 
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grow>
  )
}

export default Home