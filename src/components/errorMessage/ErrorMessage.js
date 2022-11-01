import img from './error.png'

const ErrorMessage = () => {
  return(
    <img src={img} style={{margin: '0 auto', height: "250px"}}  alt='Error'/>
  )
}

export default ErrorMessage;