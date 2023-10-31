import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { tools } from '@/constants'
import { cn } from '@/lib/utils'

export const LandingContent = () => {

  const shuffledTools = [...tools]
  for (let i = shuffledTools.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledTools[i], shuffledTools[j]] = [shuffledTools[j], shuffledTools[i]]
  }

  const randomTools = shuffledTools.slice(0, 4)

  return (
    <div className="px-10 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {randomTools.map((tool) => (
          <Card key={tool.description} className="bg-[#171721] border border-[#854CE6] shadow-lg shadow-indigo-500/10 text-white rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <tool.icon className={cn("w-[36px] h-[36px] mb-3", tool.color)} />
                  <div className="text-lg">{tool.label}</div>
                  <div className="text-zinc-400 text-sm">{tool.description}</div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}