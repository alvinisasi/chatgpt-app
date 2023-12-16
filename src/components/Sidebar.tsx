const Sidebar = () => {
    return(
        <>
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li><a>Nyari ape?</a></li>
                <li><a>Gua belum nambah fitur lagi</a></li>
            </ul>
        </>
    )
}

export default Sidebar