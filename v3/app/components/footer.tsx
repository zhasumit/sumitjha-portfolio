import Goto from './goto';
import ScrambleEffect from './ScrambleEffect';
import Available from './available';


const Footer = () => {
    return (
        <div className='max-w-screen-xl m-auto min-h-[100vh]'>

            <div className="flex gap-3 py-5 min-h-[40vh]">

                <div className="flex-1 p-2 text-md tracking-wide">
                    <h2 className='mb-2 text-3xl text-neutral-300'>Hit me up</h2>

                    <ul>
                        <li>
                            <Goto title='github' url='https://www.linkedin.com/in/sumitzha/' num={1} />
                        </li>
                        <li>
                            <Goto title='linkedin' url='https://www.linkedin.com/in/sumitzha/' num={2} />
                        </li>
                        <li>
                            <Goto title='instagram' url='https://www.linkedin.com/in/sumitzha/' num={3} />
                        </li>
                        <li>
                            <Goto title='twitter' url='https://www.linkedin.com/in/sumitzha/' num={4} />
                        </li>
                        <li>
                            <Goto title='leetcode' url='https://www.linkedin.com/in/sumitzha/' num={5} />
                        </li>
                    </ul>
                </div>


                <div className="flex-[2] p-2 mono">
                    <div className=' text-neutral-200 mono mb-10'>
                        <h2 className='text-3xl font-bold mb-2 '>Unmentioned skills:</h2>
                        <ul>
                            <li>Setting food on fire: <span className='text-neutral-400'>Intermediate</span></li>
                            <li>Spelling Bruschetta wrong: <span className='text-neutral-400'>Expert</span></li>
                            <li>Eating family pack icecream: <span className='text-neutral-400'>Expert</span></li>
                            <li>Designing simplicity: <span className='text-neutral-400'>Improving every day</span></li>
                        </ul>
                    </div>
                </div>




            </div>
            <div className='p-2  mb-24 min-h-[40vh]'>
                <h2 className='text-3xl text-neutral-300'>Lets' Collaborate</h2>
                <br />
                <Available />
                <p className='text-center'>
                    <a className='text-8xl' href="mailto:sumitjha2057@gmail.com" target='_blank'>
                        <ScrambleEffect originalWord='sumitjha2057@gmail.com' finalWord='sumitjha2057@gmail.com' />
                        <sup className='text-yellow-400 mono inline'>6</sup>
                    </a>
                </p>
            </div>
            <div className='text-purple-400 mono text-md'>
                Built with <span className='line-through decoration-red-500'>love</span> insanity during boredom for OCD.
            </div>
        </div>
    );
}

export default Footer;
