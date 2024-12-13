import React from 'react'
import BubbleText from './bubbletext'

const Projects = () => {
    return (
        <div className='max-w-screen-xl m-auto min-h-[100vh] '>
            <div className='inter text-7xl flex gap-4 font-medium mb-20'>
                 <BubbleText word="RECENT PROJECTS" />
            </div>
            <div className='inter text-7xl flex gap-4 font-medium'>
                 <BubbleText word="PET PROJECTS" />
            </div>
        </div>
    )
}

export default Projects