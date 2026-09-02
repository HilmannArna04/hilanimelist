const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handleprevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center alight-center py-4 px-2 gap-2 text-color-primary text-2xl">
            {page <= 1 ? null :
                <button onClick={handleprevPage} className="transition-all hover:text-color-accent cursor-pointer">Prev</button>
            }
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? null :
                <button onClick={handleNextPage} className="transition-all hover:text-color-accent cursor-pointer">Next</button>
            }
        </div>
    )
}

export default Pagination