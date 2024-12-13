import me from '/pics/sumitlandscape.jpg'
import scene from '/pics/scene.jpg'

const Home = () => {
    return (
        <div className='max-w-screen-xl m-auto min-h-[100vh] inter text-4xl flex flex-col justify-center'>
            <div className='min-h-[40vh] my-auto  max-w-[80vw] leading-normal flex flex-col gap-10'>
                <div>
                    Sumit <img src={me} className='h-14 inline-block rounded-md' /> is a software developer & designer. JS enthusiast.
                    <br />
                    Loves to design and build things. Makes products strike a balance between creativity and functionality. Huge fan of minimalism and swiss design.
                </div>
                <div>
                    Based in <span className='text-neutral-500 line-through'>ghato</span>, <span className='text-neutral-500 line-through'>Mad</span>, <span className='text-neutral-500 line-through'>Prayagraj</span>,📍Bangalore, India <img src={scene} className='h-14 inline-block rounded-md' />
                </div>
            </div>

        </div>
    )
}

export default Home