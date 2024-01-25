import { useState } from "react";



const Table = () => {

  /*** DATAS */
  const [datas, setDatas] = useState([
    { name: "Luke Skywalker", role: "Jedi", faction: "Rebel Alliance" },
    { name: "Darth Vader", role: "Sith Lord", faction: "Galactic Empire" },
    { name: "Princess Leia", role: "Diplomat", faction: "Rebel Alliance" },
    { name: "Han Solo", role: "Smuggler", faction: "Rebel Alliance" },
    { name: "Obi-Wan Kenobi", role: "Jedi Master", faction: "Jedi Order" },
    { name: "Yoda", role: "Jedi Master", faction: "Jedi Order" },
    { name: "Chewbacca", role: "Wookiee", faction: "Rebel Alliance" },
    { name: "R2-D2", role: "Astro droid", faction: "Rebel Alliance" },
    { name: "C-3PO", role: "Protocol droid", faction: "Rebel Alliance" },
    { name: "Mace Windu", role: "Jedi Master", faction: "Jedi Order" }
  ]);
  
  const [sortConfig, setSortConfig] = useState({key: null, direction: 'ascending'})
  const handleSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending'){
      direction = 'descending'
    }
    setDatas([...datas].sort((a,b) => {
      const aValue = a[key].toLowerCase()
      const bValue = b[key].toLowerCase()
      
      if (aValue < bValue) return direction === 'ascending' ? -1 : 1
      if (aValue > bValue) return direction === 'ascending' ? 1 : -1
      return 0
    }))

    setSortConfig({ key, direction })
  }

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nom <button onClick ={() => handleSort('name')}>Sort</button></th>
          <th>Rôle <button onClick ={() => handleSort('role')}>Sort</button></th>
          <th>Camp <button onClick ={() => handleSort('faction')}>Sort</button></th>
        </tr>
      </thead>
      <tbody>
        {datas.map(({ name, role, faction }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{role}</td>
            <td>{faction}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Table;