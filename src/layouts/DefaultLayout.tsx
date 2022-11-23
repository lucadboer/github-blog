import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="max-md:p-2 max-md:text-sm">
      <Header />
      <Outlet />
    </div>
  )
}
