import React from 'react'

function Footer() {
    return (
        <div>
            <div className='p-1  pb-0 bg-black mt-4'>
                <section className=''>
                    <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2024 Copyright: 
                        <a className='text-white' href='#' style={{textDecoration:"none"}}>
                            Products.com
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer
