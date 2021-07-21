const Button = (props) =>{
 return(
     <button onClick= {props.onClick}>{props.children}</button>
 )
}
//props.children pega a propriedade filha, que se localiza entre as tags
export default Button