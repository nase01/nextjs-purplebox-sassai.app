import mongoose from 'mongoose'

const userApiLimitSchema = new mongoose.Schema({
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
    createdAt: {
			type: Date,
			default: Date.now,
    },
    updatedAt: {
			type: Date
    }
  })
  
  const UserApiLimit = mongoose.models.UserApiLimit || mongoose.model("UserApiLimit", userApiLimitSchema)
  
  export default UserApiLimit