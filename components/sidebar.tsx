import Link from 'next/link'

const sidebar = () => {
    return (
      <div className="h-screen bg-black w-[15vw] text-2xl text-white">
        <ul className="pt-5 flex-col gap-5 px-3">
          <li>
            <Link href="/member/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/member/dashboard/todos">Todos</Link>
          </li>
          <li>
            <Link href="/member/dashboard/users">Users</Link>
          </li>
          <li>
            <Link href="/member/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </div>
    );
}

export default sidebar;

