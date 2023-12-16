const Header = () => {
    return(
        <div className="w-full navbar  bg-base-100 fixed z-10">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div> 
            <div className="flex-1 px-2 mx-2">
                <div className="avatar">
                    <div className="w-8 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                <h4 className="prose lg:prose-xl ml-3">Nyoba API</h4>
            </div>
            {/* <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                    <li><a>Nyari ape?</a></li>
                    <li><a>Gua belum nambah fitur lagi</a></li>
                </ul>
            </div> */}
        </div>
    )
}

export default Header