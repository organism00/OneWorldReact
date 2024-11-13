import React from 'react';

// Components
import Sidebar from './Sidebar';
import DashboardCards from './DashboardCards';
import MoneyFlow from './MoneyFlow';
import BudgetCard from './BudgetCard';
import TransactionsTable from './TransactionsTable';

function Dashboard() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='px-4 space-y-10 mt-10'>
        <DashboardCards/>
        <div className='flex gap-10'>
          <MoneyFlow/>
          <BudgetCard/>
        </div>
        <TransactionsTable/>
      </div>
    </div>
  )
}

export default Dashboard