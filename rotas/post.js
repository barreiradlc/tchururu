const express = require("express");
const controlesPost = require('../controles/post');
const router = express.Router();
const valida = require("../helpers");


router.get('/', controlesPost.getPost);
router.post('/post', valida.validaPost, controlesPost.criarPost);


module.exports = router;