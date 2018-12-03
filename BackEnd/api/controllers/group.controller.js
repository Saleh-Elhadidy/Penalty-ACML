var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var Validations = require('../utils/validations');
var Encryption = require('../utils/encryption');
var EMAIL_REGEX = require('../config').EMAIL_REGEX;
var Group = mongoose.model('group');
var moment = require('moment')

module.exports.CreateGroup =function(req, res, next){
    var valid =
    req.body.name && 
    Validations.isString(req.body.name)
   console.log(req.body.name)
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg:
        'the name should be String or there is an entry missing',
      data: null
    });
  }
  

    Group.findOne({name : req.body.name}).exec(function(err, group) {
        
        // If an err occurred, call the next middleware in the app.js which is the error handler
        if (err) {
          return next(err);
        }
        // If there is a user with this email don't continue
        if (group) {
          return res.status(422).json({
            err: null,
            msg:
              'A group with the same name already exists, please try another Name.',
            data: null
          });
        }
        else{
            req.body.EndDate =new Date(req.body.StartDate)
            req.body.EndDate.setDate(req.body.EndDate.getDate()+7);
if(req.body.StartDate>req.body.EndDate){
    return res.status(422).json({
        err: null,
        msg: 'check the date, the starting date probably comes after the End date',
        data: null
      });
}
else{
    
   

    Group.create(req.body, function(err, newGroup) {
        if (err) {
          return next(err);
        }    
else{ Group.findOne({name : newGroup.name}).exec(function(err, group){
    group.participants.push(req.body.email)
    var length = group.participants.length;
    group.Loser.length=length
    group.Date.length=length
    group.participationCount.length=length
    group.save(function(err){
        if (err) {
            return next(err);
          }
          res.status(200).json({
            err: null,
            msg: 'Group is Created successfully !',
            data: group
          });
    })
  
}
)}
       
      });

}       
        }
})}

module.exports.viewGroups = function (req, res, next) { //this is a method that retrieves all groups in the database
	Group.find({}).exec(function (err, groups) {
		if (err) {
			return next(err);
		}
		res.status(200).json({
			err: null,
			msg: 'groups retrieved successfully.',
			data: groups
		});
	});
};
module.exports.viewoneGroup = function (req, res, next) { //this is a method that retrieves on group from the database
  console.log(req.params.name)
	Group.findOne({name:req.params.name}).exec(function (err, group) {
		if (err) {
			return next(err);
		}
		res.status(200).json({
			err: null,
			msg: 'group retrieved successfully.',
			data: group
		});
	});
};




module.exports.join = function(req, res, next){ //req: name of group, email of joiner

    Group.findOne({name : req.body.name}).exec(function(err, group){
        if(err){
            return next(err)
        }
        else
        {
          var x = 0;
          for(x = 0;x<group.participants.length;x++){
            if(group.participants[x]==req.body.email){
               return res.status(422).json({
                err: null,
                msg: 'You have already joined this group',
                data: null
            });
            }
          }
           
            group.participants.push(req.body.email)
            group.Loser.push(0);
            group.participationCount.push(0);
            var length = group.participants.length
            group.Date.length=length;
            group.save(function(err){
                if (err) {
                    return next(err);
                  }
                  res.status(200).json({
                    err: null,
                    msg: 'Joined successfully',
                    data: group
                  });
            })
        }
    })

}

module.exports.check = function(req, res, next){ //email //group name
    var x = null;
Group.findOne({name : req.body.name}).exec(function(err, group){
    if(err){
        return next(err)
    }
    else{
        var id = group._id;
            for(var  i =0; i<group.participants.length;i++){
                if(group.participants[i]==req.body.email){
                   x = i;
                  break;
             }
            };    
            console.log(x)
            var lastDay =  group.Date[x];
            var CheckIn = moment().format("MMM Do YY"); 
    
             if(lastDay != CheckIn || lastDay==null){ 
                 group.participationCount[x] = group.participationCount[x] +1;
                 group.Date[x]=CheckIn;
                 Group.findOneAndUpdate(
                   {name: req.body.name},
                    {
                      $set: {Date:group.Date , participationCount :group.participationCount}
                    },
                    { new: true }
                  ).exec(function(err, updatedGroup) {
                    if (err) {
                      return next(err);
                    }
                    if (!updatedGroup) {
                      return res
                        .status(404)
                        .json({ err: null, msg: 'no group is found.', data: null });
                    }
                    res.status(200).json({
                      err: null,
                      msg: 'Group was updated successfully.',
                      data: updatedGroup
                    });
                  });
             }
             else{
                 res.status(422).json({
                     err: null,
                     msg: 'You have already checked today',
                     data: group
                 });
             }
    }
})
}
module.exports.getResult = function(req, res, next){ //email //group name
  var x = null;
Group.findOne({name : req.params.name}).exec(function(err, group){
  if(err){
      return next(err)
  }
  else{
      var id = group._id;
      var min = -1;
          for(var  i =0; i<group.participationCount.length;i++){
              if(group.participationCount[i]<min){
                min = group.participationCount[i];
                 x = i;
                break;
           }
          };    
          console.log(x)
          var endDate = group.EndDate;
          var now = moment().format("MMM Do YY"); 
          if(now > endDate){
            group.Loser[i] = group.Loser[i]+1;
            Group.findOneAndUpdate(
              {name: req.params.name},
               {
                 $set: {Date:group.Date , participationCount :group.participationCount,Loser:group.Loser}
               },
               { new: true }
             ).exec(function(err, updatedGroup) {
               if (err) {
                 return next(err);
               }
               if (!updatedGroup) {
                 return res
                   .status(404)
                   .json({ err: null, msg: 'no group is found.', data: null });
               }
               else{
               res.status(200).json({
                 err: null,
                 msg: 'The email of the user is',
                 data: group.participants[i]
               });
              }
             });


          }else{
            res.status(422).json({
              err: null,
              msg: 'Group has not ended yet',
              data: null
          });
          }
  }
})
}


  