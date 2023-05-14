const router = require("express").Router();
const newpostSchema = require("../Models/newposts");

router.post("/", async (req, res)=>{

    const newPost = newpostSchema({
        postTitle : req.body.postTitle,
        postBody : req.body.postBody,
        isActive : true,
        createdBy : req.body.createdBy,
        createdOn : Date.now(),
        updatedBy : null,
        updatedOn : null
    })

    try {
        const newpost = await newPost.save();
        res.status(200).send(newpost);
    } catch (error) {
        res.status(400).send(error);        
    }
});


router.get("/", async (req, res)=>{
    try {
        const posts = await newpostSchema.find();
        res.status(200).send(posts);
    } catch (error) {
        res.status(400).send(error);
    }
})


router.get("/:createBy", async (req, res)=>{
    const creatby = req.params.createBy
    console.log(creatby)
    const posts = await newpostSchema.findOne({creatby})
    res.send(posts);
    // try {
    //     const posts = await newpostSchema.find();
    //     res.status(200).send(posts);
    // } catch (error) {
    //     res.status(400).send(error);
    // }
})
// export Router
module.exports = router;

