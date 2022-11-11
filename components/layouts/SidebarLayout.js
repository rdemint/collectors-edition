import SideBarNav from '@/components/layouts/SidebarNav'
import SearchModal from '@/components/search/SearchModal'

export default function SidebarLayout({ children }) {
    return (
        <>
            <div className="pt-8 px-4">
            <SearchModal />
        <div className="block md:flex">
            <SideBarNav />
            {children}
                </div>
</div>
</>
    )
}