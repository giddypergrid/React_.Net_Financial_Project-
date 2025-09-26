import React from 'react'
import './Table.css'

type Props = {
    data: Record<string, any>[],
    config: Record<string, Function>
}

const Table = ({data, config}: Props) => {
  const keys = Object.keys(config);
  return (
    <div className='scrollable-area table-container'>
        <table>
            <thead>
                <tr>
                    {keys.map((key) => <th key={key}>{key}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => 
                    <tr key={index}>
                        {keys.map((key) => <td key={key}>{config[key](row)}</td>)}
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Table