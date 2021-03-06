const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const postSchema = Schema({
  content: String,
  creatorId: Object,
  picPath: String,
  picName: String,
  comments : {type:Array, default:[]}
}, {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;