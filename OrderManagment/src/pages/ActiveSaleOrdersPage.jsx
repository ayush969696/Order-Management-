import React from 'react'
import SaleOrderTable from '../components/SaleOrderTable'

function ActiveSaleOrdersPage() {
  return (
    <div>
       <SaleOrderTable status="active" />
    </div>
  )
}

export default ActiveSaleOrdersPage
