import { auth } from '@clerk/nextjs'

import { connectToDB } from '@/lib/mongoose'
import UserApiLimit from '@/lib/models/user-api-limit.model'
import { MAX_FREE_COUNTS } from '@/constants'

export const incrementApiLimit = async () => {
	
	const { userId } = auth()
	
	if (!userId) {
		return
	}

	connectToDB()
	
	await UserApiLimit.findOneAndUpdate(
		{ userId },
		{ $inc: { count: 1 } },
		{ upsert: true } //Insert if not exist, Update if exist
	)
	
}

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return false
  }

	connectToDB()
  const userApiLimit = await UserApiLimit.findOne({ userId })

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true
  } else {
    return false
  }
}

export const getApiLimitCount = async () => {
  const { userId } = auth()

  if (!userId) {
    return 0
  }

  connectToDB()
  const userApiLimit = await UserApiLimit.findOne({ userId })

  if (!userApiLimit) {
    return 0
  }

  if (userApiLimit.count > MAX_FREE_COUNTS) {
    return MAX_FREE_COUNTS
  }

  return userApiLimit.count
}