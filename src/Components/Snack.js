import { Link } from 'react-router-dom';

export default function Snack( { snack } ) {


  


  return (
   <tr className='snack'>
    <td>
        <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
    </td>
    <td>{snack}</td>  
    <td>{snack}</td>
    <td>{snack.is_healthy ? '♥️' : null}</td>
   </tr>
  );
}
// {snack.name}