import { auth } from '@clerk/nextjs'

import { connectToDB } from '@/lib/mongoose'
import UserSubscription from '@/lib/models/user-subscription.model'

const DAY_IN_MS = 86_400_000

export const checkSubscription = async () => {
  const { userId } = auth();

  if (!userId) {
    return false
  }

  connectToDB()
  const userSubscription = await UserSubscription.findOne({ userId: userId })
  .select('stripeSubscriptionId stripeCurrentPeriodEnd stripeCustomerId stripePriceId')
  .exec()

  console.log(userSubscription)

  if (!userSubscription) {
    return false
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

  return !!isValid
}