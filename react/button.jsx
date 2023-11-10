// function Button(props) {
    
//     const buttonStyle = {
//         color: props.color,
//         fontSize: props.fontSize + 'px'
//     };

//     return (
//         <button style={buttonStyle}>{props.text}</button>
//     )
// }

// export default function App() {
//     return(
//         <div>
//             <Button text="Click Me!" color="blue" fontSize={12} />
//             <Button text="Don't Click Me!" color="red" fontSize={12} />
//             <Button text="Click Me!" color="blue" fontSize={20} />
//         </div>
//     )
// }

// 

function Button({ text="Click Me!", color="blue", fontSize=12, handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return (
        <button onClick={() => handleClick('https://www.theodinproject.com')} style={buttonStyle}>
            {text}
        </button>

    )
}

export default function App() {
    const handleButtonClick = (url) => {
        window.location.href = url;
    };

    return (
        <div>
            <Button handleClick={handleButtonClick} />
        </div>
    )
}

// When supplying a parameter to the function we can’t just write onClick={handleClick('www.theodinproject.com')}, and instead must attach a reference to an anonymous function which then calls the function with the parameter. Like the previous example, this is to prevent the function being called during the render.