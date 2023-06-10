import DesktopSidebar from '../components/sidebar/DesktopSidebar'
import Sidebar from '../components/sidebar/Sidebar'

export default async function UserLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className='h-full'>
        {/* <UserList items={users} /> */}
        {children}
      </div>
    </Sidebar>
  )
}
