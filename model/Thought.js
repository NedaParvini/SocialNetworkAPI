const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const userSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required:true,
            minlength:1,
            maxlength:280
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username:{
            type: String,
            required: true,
        },
        reactions:[
            reactionSchema
        ]
    },
        {
            toJSON: {
              virtuals: true,
              getters: true
            },
            id: false
          });
    
          //
    
          userSchema.virtual('reactionCount').get(function() {
            return this.reactions.length;
          });
          
          const Thought = model('Thought', thoughtSchema);
          
          module.exports = Thought;