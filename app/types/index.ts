import { Conversation, Message, User } from '@prisma/client'
import { CldImageProps } from 'next-cloudinary'
import { ImageProps } from 'next/image'

export type FullMessageType = Message & {
  sender: User
  seen: User[]
}

export type FullConversationType = Conversation & {
  users: User[]
  messages: FullMessageType[]
}

export type CustomeImageType = Partial<ImageProps> & Partial<CldImageProps>
