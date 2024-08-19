import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default RootLayout