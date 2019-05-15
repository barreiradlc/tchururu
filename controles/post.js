// exports.getPost = (req, res) => {
//     res.send("Alou KATIAU uheuhsuehsuehsue");
// };

const Post = require('../modelos/post');

exports.getPost = (req, res) => {
    // res.json({
    //     posts: [
    //         {"titulo":"Alou KATIAU uheuhsuehsuehsue"},
    //         {"oto":"Alou KATIAU uheuhsuehsuehsue"},
    //         {"mai oto":"Alou KATIAU uheuhsuehsuehsue"}
    //     ]
    // });
    const posts = Post.find()
    .then((posts) => {
        res.status(200).json({posts: posts})
    })
    .catch(err => console.log(err));
};

exports.criarPost = (req, res) => {
    const post = new Post(req.body)
    
    console.log("Criando um post ", req.body );

    // post.save((err, result) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: err
    //         })
    //     }
    //     res.status(200).json({
    //         post: result
    //     })
    // });

    post.save().then(result => {
        res.status(200).json({
            post:result
        });
    });

};

