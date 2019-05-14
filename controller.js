const Message = require("./models")

module.exports = {
    index:(req, res) => {
        Message.find({}).sort({createdAt: -1}).exec((err, messages) => {
            if (err) return handleError(err);
            res.render("index", {message: messages});
        })
    },
    message:(req, res) => {
        console.log("POST DATA", req.body);
        var message = new Message({name: req.body.name, content: req.body.content});
        message.save(err => {
            if(err) {
                console.log('something went wrong');
                for(var key in err.errors){
                    req.flash('message', err.errors[key].message);
                }
            } else { 
                console.log('successfully added a message!');
            }
            res.redirect('/');
        })
    },
    comment:(req, res) => {
        console.log("POST DATA", req.body);
        Message.findOneAndUpdate({_id: req.body.id}, {$push: {comments: req.body}}, err => { 
            if(err) {
                console.log('something went wrong');
                for(var key in err.errors){
                    req.flash('message', err.errors[key].message);
                }
            } else { 
                console.log('successfully updated a mongoo!');
            }
            res.redirect('/');
        })
    }

    // //MODULARIZATION WITH MODELS:
    // mongoose_example: function(req, res) {
    //     User.find({}, function(err, data) {
    //         res.render('index', {users:data})
    //     })
    // },
    // //CREATION EXAMPLE:
    // create : function(req,res){
    //     User.create(req.body, function(err,data){
    //         console.log(err);
    //         console.log(data)
    //     })
    // }
}

// app.get('/', function(req, res) {
//     res.render("index");
// })

// app.post('/users', function(req, res) {
//     console.log("POST DATA", req.body);
//     res.redirect('/');
// })
