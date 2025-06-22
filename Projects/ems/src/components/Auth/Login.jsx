import React,{useState} from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
    // const email = e.target[0].value;
    // const password = e.target[1].value;

    // Here you can handle the login logic, like sending a request to your backend
    // console.log('Email:', email);
    // console.log('Password:', password);
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-col items-center justify-center gap-4 p-4'
        >
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required 
          className='outline-none border-2 border-emerald-600 text-xl py-3 px-5 rounded-full' type="email" placeholder='Enter your email'   
          />
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required 
          className='outline-none border-2 border-emerald-600 text-xl mt-3 py-3 px-5 rounded-full' type="password" placeholder='Enter your password' 
          />
          <button className='mt-5 outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login