import './App.css'
import React, {Component} from "react"

class App extends Component {
  render() {
    let heading = ["Nom", "Role", "Camp"]
    let body = [
      ["Darth Vador", "Sith", "❄️"],
      ["Luke Skywalker", "Pilote", "🔥"],
      ["Boba Fett", "Chasseur de primes", "🔱"],
      ["Han Solo", "Contrebandier", "🔥"],
      ["Sheev Palpatine", "Empereur", "❄️"],
      ["Leia Organa", "Princesse", "🔥"],
      ["Bib Fortuna", "Majordome", "🔱"]
    ]
    return (
      <>
      <Table heading={heading} body={body} />
      </>
    )
  }
}

class Table extends Component {
  render() {
    let heading = this.props.heading
    let body = this.props.body
    return (
      <table style={{ width: 500 }}>
                <thead>
                    <tr>
                        {heading.map((head, headID) => (
                            <th key={headID}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {body.map((rowContent, rowID) => (
                        <TableRow
                            rowContent={rowContent}
                            key={rowID}
                        />
                    ))}
                </tbody>
            </table>
    )
  }
}

class TableRow extends Component {
  render() {
      let row = this.props.rowContent;
      return (
          <tr>
              {row.map((val, rowID) => (
                  <td key={rowID}>{val}</td>
              ))}
          </tr>
      );
  }
}

export default App