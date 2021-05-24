import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom'

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ author: '', title: '', message: '', edition:'', tags: '', selectedFile: '',  stock: '', year:'' });
  //const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId): null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))
  const history = useHistory()

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ author: '', title: '', message: '', edition:'', tags: '', selectedFile: '', stock: '', year:'' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId,{...postData, name: user?.result?.name }));
    } else {
      dispatch(createPost({...postData, name: user?.result?.name}, history ))
    }
  };

  if(!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center"> Inicia sesión para ingresar libros y darles like :D</Typography>
      </Paper>
    )
  }


  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editando "${post?.title}"` : 'Agregar Nuevo Libro'}</Typography>
        <TextField name="title" variant="outlined" label="Título" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="author" variant="outlined" label="Autor" fullWidth value={postData.author} onChange={(e) => setPostData({ ...postData, author: e.target.value })} />
        <TextField name="year" variant="outlined" label="Año de publicación" fullWidth value={postData.year} onChange={(e) => setPostData({ ...postData, year: e.target.value })} />
        <TextField name="edition" variant="outlined" label="Edición" fullWidth value={postData.edition} onChange={(e) => setPostData({ ...postData, edition: e.target.value })} />
        <TextField name="message" variant="outlined" label="Comentario" fullWidth  multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="stock" variant="outlined" label="Cantidad de ejemplares" fullWidth value={postData.stock} onChange={(e) => setPostData({ ...postData, stock: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Categorías (separar con comas)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Realizado</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Limpiar</Button>
      </form>
    </Paper>
  );
};

export default Form;
