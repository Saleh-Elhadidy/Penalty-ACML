var mongoose = require('mongoose');
var moment = require('moment')

var GroupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  habits:{
    type: Array,
    default : [],
    required: true,
  },
 participants:{
    type: Array,
    default : [],
    required: true,
  },
  Date:{
    type: Array,
    default :null,
  }, 
  participationCount:{
    type: Array,
    default : 0,
  }, 
  Loser:{
    type: Array,
    default : 0,
  },
  StartDate:{
    type: Date,
    required: true,
  },
  EndDate:{
    type: Date,
  },
});


mongoose.model('group', GroupSchema);
