import React from 'react'

const ExchangeTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Код валюти</th>
          <th scope="col">Назва валюти</th>
          <th scope="col">Курс</th>
          <th scope="col">Абривіатура</th>
          <th scope="col">Дата</th>
        </tr>
      </thead>
      <tbody>
        {props.a.map((item) => (
          <tr key={item.r030}>
            <th scope="row">{item.r030}</th>
            <td>{item.txt}</td>
            <td>{item.rate}</td>
            <td>{item.cc}</td>
            <td>{item.exchangedate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ExchangeTable
