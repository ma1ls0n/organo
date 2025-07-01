import './Button.css';

const Button = (props) => {
    return(
        <button required={props.mandatory} className='button'>
            {props.children}
        </button>
    )
}

export default Button