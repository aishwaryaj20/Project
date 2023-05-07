import React, { useState } from 'react'

const PasswordValidation = () => {

    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');
    const [enteredText, setEnteredText] = useState(''); 
    const [visible, setVisible] = React.useState(false);
    function handleChange(e) {
setPass(e.target.value);
setMessage('')
    }
    const handleClick = () => {
     
        setEnteredText('');
      };
    const handleValidation =(e) =>{
        e.preventDefault();
const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

if(pass === "")
{
    setMessage("pls enter password")
  
}
else if(regExp.test(pass))
{
    setMessage("pass is valid")
  
}
else if(!regExp.test(pass))
{
    setMessage("pass in not valid")
  
}
else {
    setMessage("")
}
    }
  return (
    <div>
    <form onSubmit={handleValidation}>
    <label>password</label>
      <input type="password" onChange={handleChange} value={pass}/>
      
<p>{message}</p>
      <button onClick={handleClick}>Check</button>
      <button onClick={() => setVisible(true)}>Show</button>
      <button onClick={() => setVisible(false)}>Hide</button>
      {visible && <div>My element</div>}
      </form>
      dvmdvd
    </div>
  )
}

export default PasswordValidation
