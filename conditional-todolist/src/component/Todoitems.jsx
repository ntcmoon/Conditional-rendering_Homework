export default function Todoitems(props) {
    const itemStyle = {backgroundColor: props.priority === 0 ? 'red' : 'white'};
    return ( 
        <>
        <div style={itemStyle}>Item {props.number}</div>
        
            
        
        </>
    )
}