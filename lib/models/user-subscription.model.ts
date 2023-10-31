import mongoose from 'mongoose'

const userSubscriptionSchema = new mongoose.Schema({
	userId: {
		type: String,
		unique: true,
		required: true,
	},
	stripeCustomerId: {
		type: String,
		unique: true
	},
	stripeSubscriptionId: {
		type: String,
		unique: true
	},
	stripePriceId: {
		type: String
	},
	stripeCurrentPeriodEnd: {
		type: Date
	}
})
  
const UserSubscription = mongoose.models.UserSubscription || mongoose.model("UserSubscription", userSubscriptionSchema)

export default UserSubscription