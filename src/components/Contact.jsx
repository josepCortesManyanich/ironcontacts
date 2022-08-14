import React from 'react'

export default function Contact(props) {
  const { contact: { name, pictureUrl, popularity, id, wonOscar, wonEmmy } } = props;

  //const handleFloor = () => {
    //return Math.floor({popularity})
  //}


  
  return (
    <div>
        
      <table className='table'>
          <tr>
              <th> <h3>Picture</h3></th>
              <th> <h3 >Name</h3></th>
              <th> <h3>Popularity</h3> </th>
              <th>  <h3> Won Oscar</h3></th>
              <th>  <h3> Won Emmy</h3></th>
          </tr>
          <tr>
              <td><img src={pictureUrl} alt={name} width="50%" height= "50%" /></td>
              <td>{name}</td>
              <td>{popularity}</td>
              <td>{wonOscar ? <p> 🏆 </p> : <p></p>}</td>
              <td>{wonEmmy ? <p> 🏆 </p> : <p></p> }</td>
          </tr>

      </table>
    </div>
  )}