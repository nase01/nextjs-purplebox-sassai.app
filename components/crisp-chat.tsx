'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('20ae9cce-155e-4537-9bdd-59f3c7c99f8c')
  }, [])

  return null
}