
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='sum logo' className='w-28 object-contain'/>

            <button
            type='button'
            onClick={()=> window.open('https://github.com/vaibhavforwork12')}
            className='black_btn'>Github
            </button>

        </nav>

        <h1 className='head_text'>Summerize Articles With <br className='max-md:hidden'/>
        <span className='orange_gradient'>ChatGPT-4</span></h1>

        <h2> Simplify Your Article with chatgpt</h2>
    </header>
  )
}

export default Hero