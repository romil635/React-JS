import React from 'react'

const table = () => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                   <th>No.</th>
                   <th>Full Name</th>
                   <th>Position</th>
                   <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                 <td>1</td>
                 <td>Bill gates</td>
                 <td>Founder Microsoft</td>
                 <td>$1000</td>
            </tr>
            <tr>
                 <td>2</td>
                 <td>Steave jobs</td>
                 <td>Founder Apple</td>
                 <td>$1200</td>
            </tr>
            <tr>
                 <td>3</td>
                 <td>Larry Page</td>
                 <td>Founder Google</td>
                 <td>$1100</td>
            </tr>
            <tr>
                 <td>4</td>
                 <td>Mark Zukerburg</td>
                 <td>Founder Facebook</td>
                 <td>$1300</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default table
