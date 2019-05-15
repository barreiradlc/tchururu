const express = require("express");
// const controlesPost = require('../controles/post');
const { getPost, criarPost} = require('../controles/post');
const router = express.Router();
// const valida = require("../helpers");
const valida = require("../helpers");


// router.get('/', controlesPost.getPost);
router.get('/', getPost);
// router.post('/post', valida.validaPost, controlesPost.criarPost);
router.post('/post', valida.validaPost, criarPost);


module.exports = router;