import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from 'lucide-react'

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: 'Conversation',
    description: "Human-like conversations and more.",
    icon: MessageSquare,
    href: '/conversation',
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    label: 'Image Generation',
    description: "Turn your text prompt into an image.",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  {
    label: 'Video Generation',
    description: "Turn your text prompt into video.",
    icon: VideoIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: '/video',
  },
  {
    label: 'Music Generation',
    description: "Turn your text prompt into music.",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: '/music',
  },
  {
    label: 'Code Generation',
    description: "Generate code using descriptive text.",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
]