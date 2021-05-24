import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    author: String,
    year: String,
    name: String,
    creator: String,
    edition: String,
    stock:String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },

})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage

// Titulo
// Autor
// Año de publicación
// Edición
// Imagen de portada
// Cantidad de ejemplares