const HeaderMenu = ({ title }) => {
    return (
        <div>
            <div className="p-8 flex items-center justify-center ">
                <h3 className="text-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-2xl px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">{title}</h3>
            </div>
        </div>
    )
}

export default HeaderMenu