import React from 'react'

const EmbedVideo = () => {
  return (
    <div>
      <iframe className="rounded-md w-full h-[200px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[300px] lg:w-[1000px] lg:h-[500px]" src="https://www.youtube.com/embed/GcG5eS3sM4M?si=jJBcNVzGH1dOsbI3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default EmbedVideo
