import './Spinner-files/css/spinner.css'

export default function Spinner(props){
return(
<div >
<div className="spinner">{props.children}</div>
</div>
);

}