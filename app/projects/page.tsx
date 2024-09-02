import React from 'react'

const Project = () => {
  return (
    <section className='container text-white'>
        <h1 className='text-white text-2xl text-medium'>Project</h1>
        <p className='mb-2'>Here is a list of all the projects I have worked on over the years. Click on the project to read more about it!</p>
        <ul>
            <li className='flex mb-2'>
                <img className='h-48 w-80' src="chess.jpg" alt="" />
                <div>
                <h2>Multiplayer Chess Game</h2>
                <div>A website where users can play chess online</div>
                </div>
            </li>
            <li className='flex'>
                <img className='h-48 w-80' src="hungersafe.jpg" alt="" />
                <div>
                <h2>Hunger Safe</h2>
                <div>A website where users donate edibles</div>
                </div>
            </li>
        </ul>
    
    </section>
  )
}

export default Project