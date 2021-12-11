const mongoose = require('mongoose')
// creating schema for storing data
const quizSchema = new mongoose.Schema({
    description: String,
    alternatives: [
        {
            text: {
                type: String,
                required: true
            },
        }
    ],
    isCorrect: {
        type: String,
        required: true,
    }
    // subjects: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Subject',
    //     required: false
    // }]
})
const essaySchema =new mongoose.Schema({
    problem:String,
    description:String
})
const questionSchema=new mongoose.Schema({
    description: String,
    alternatives: [
        {
            text: {
                type: String,
                required: true
            },
        }
    ],
    isCorrect: {
        type: String,
        required: true,
    },
    problem:String,
    desc:String
})
// ends here

// creating new collection
const User = mongoose.model('question',questionSchema);
module.exports = User;
// const customer = new User({
//     quiz: {
//       description:"How to delete a directory in Linux?",
//       alternatives: [      {
//         "text":"ls"
//     },
//     {
//         "text":"delete"
//     },
//     {
//         "text":"remove"
//     },
//     {
//         "text":"rmdir"
//     }
// ],
// isCorrect:"rmdir"
//     },
//     essay:{
//         problem:"How to delete a directory in Linux?",
//         description:"Also explain other functionality"
//     }
//   });
//   customer.save((err,cust)=>{
//       if(err) return console.error(err);

//   });