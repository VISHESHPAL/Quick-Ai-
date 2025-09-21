import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {
  const navigate = useNavigate()
  const { user } = useUser()

  return (
    <section className="my-12 px-4">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          Powerful AI Tools
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className="
          mt-12
          mx-auto
          max-w-6xl          /* 👈 parent width controlled */
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3     /* 3 cards on large screens */
          justify-items-center
        "
      >
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => user && navigate(tool.path)}
            className="
              group
              w-full max-w-xs   /* 👈 smaller card width */
              cursor-pointer
              rounded-2xl
              bg-white
              p-5
              shadow-md
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div
              className="
                mb-5
                flex h-14 w-14
                items-center justify-center
                rounded-full
                text-white
                shadow-lg
                transition-transform
                duration-300
                group-hover:scale-110
              "
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            >
              <tool.Icon className="h-7 w-7" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">{tool.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AiTools
