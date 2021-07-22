// Code Keypad Component Here
function Keypad(){
    return (
        <input 
            type="password" 
            placeholder = "Enter Password"
            onChange={() => console.log('Entering password...')} />
    )
}

export default Keypad;