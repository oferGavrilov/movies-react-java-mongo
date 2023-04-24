import React from 'react'
import AppHeader from './AppHeader'

interface Props {
      children: React.ReactNode
}

function Layout({ children, ...props }: Props) {
      return (
            <>
                  <div className='max-w-screen-lg xl:max-w-screen-xl mx-auto overflow-hidden'>
                        <AppHeader />
                        <main {...props}>
                              {children}
                        </main>
                  </div>
            </>
      )
}

export default Layout