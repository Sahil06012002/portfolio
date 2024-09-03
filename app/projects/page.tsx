import React from 'react'

const Project = () => {
  return (
    <section className='container text-white mt-10'>
        <h1 className='text-white text-4xl text-bold'>Project</h1>
        <p className='mb-2 text-lg'>Here is a list of all the projects I have worked on over the years. Click on the project to read more about it!</p>
        <ul className='text-lg'>
            <li className='flex mb-4'>
                <img className='h-35 w-40' src="diff-cal.jpg" alt="" />
                <div className='px-4'>
                <h2>Excel Diff Calculator</h2>
                <div>A website where users can identify the updated data apply it to tha actual table and maintain versions for that.</div>
                <div className='flex items-center'>
                <a className='text-purpletext pr-2' href="https://github.com/Sahil06012002/chess">Github</a>
                <img className='h-4 w-4' src="link-icon.svg" alt="" />
                </div>
                </div>
            </li>
            <li className='flex mb-4'>
                <img className='h-35 w-40' src="chess.jpg" alt="" />
                <div className='px-4'>
                <h2>Multiplayer Chess Game</h2>
                <div>A website where users can play chess online</div>
                <div className='flex items-center'>
                <a className='text-purpletext pr-2' href="https://github.com/Sahil06012002/chess">Github</a>
                <img className='h-4 w-4' src="link-icon.svg" alt="" />
                </div>
                </div>
            </li>
            <li className='flex'>
                <img className='h-35 w-40' src="hungersafe.jpg" alt="" />
                <div className='px-4' >
                <h2>Hunger Safe</h2>
                <div>A website where users donate edibles</div>
                <div className='flex items-center'>
                <a className='text-purpletext pr-2' href="https://github.com/Sahil06012002/Hunger-safe-backend.git">Github</a>
                <img className='h-4 w-4' src="link-icon.svg" alt="" />
                </div>
                </div>
            </li>
        </ul>
    
    </section>
  )
}

export default Project