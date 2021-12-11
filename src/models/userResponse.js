const mongoose = require("mongoose");
const essaySchema = new mongoose.Schema({
    username:{
        type:String,
        required:false
    },
    question:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false,
    },
    userresponse:{
        type:String,
        required:false
    },
})
const quizSchema = new mongoose.Schema({
    username: {
      type: String,
    },
    questionid: {
      type: Number,
      required: true,
    },
    correctanswer: {
      type: String,
      required: false,
  
    },
    useranswer: {
      type: String,
      required: false,
    },
  });
  const responseSchema=new mongoose.Schema({
      email:{
          type:String,
          required:true
      },
      questionid:{
          type:Number,
      },
      useranswer:{
        type:string
      },
      correct:{
          type:Boolean,
      },
      essayqid:{
          type:Number
      },
      userDescription:String
  })
const response = mongoose.model('response',responseSchema);
module.exports = response;