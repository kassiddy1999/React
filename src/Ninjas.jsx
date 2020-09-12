import React from "react";

 const Ninjas= ({ninjas, deleteNinja})=> {
  const ninjaList = ninjas.map((ninja,index) => {
    return (
      <div key={ninja.id}>
        <p>name: {ninja.name}</p>
          <p>age: {ninja.age}</p>
        <p>belt: {ninja.belt} </p>
        <button className ="btn btn-danger btn-sm" onClick = {deleteNinja(ninja.id)}>Delete ninja</button>

    <br/>
      </div>
)
  })
  return (
    <div>
      { ninjaList }
    </div>
  )
}


export default Ninjas;
