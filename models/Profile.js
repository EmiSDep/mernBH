const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    occupation: {
        type: String
    },
    educationLevel: {
        type: String
    },
    certifications: {
        type: [String]
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    github: {
        type: String
    },
    twitter: {
        type: String
    },
    bio: {
        type: String
    },
    
});

module.exports = Profile = mongoose.model('profile', profileSchema)















/* 
 userId (how to connect to user model)
 fname
 lastname,
 name,
 occupation,
 educationlevel
 resourceIds: [] optional
 certifications
 city
 state
 github url
 twitterurl
 youtubeurl
 timeStamps
 bio/aboutme
 avatar

 datatypes, options(required etc)
 */