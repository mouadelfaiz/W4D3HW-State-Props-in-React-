const Students = ({studentData}) => {
  return (
    <div className="Students">
     {studentData.map((name) => {
      return (
        <div>
          <h3>
            {name.name}
          </h3>
          <p>{name.bio}</p>
        </div>
      )
     })}
    </div>
  )
}

export default Students;