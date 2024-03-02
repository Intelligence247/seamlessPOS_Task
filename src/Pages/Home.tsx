import EachItem from "../Components/EachItem"

const Home = () => {
    return (
        <div className="pt-20">
            <div className="itemContainer grid grid-cols-2 w-[90vw] m-auto gap-2 border-[1px] border-primaryblue p-4 my-4 rounded-lg">
                <EachItem />
                <EachItem />
                <EachItem />
                <EachItem />
                <EachItem />
                <EachItem />
                <EachItem />
                <EachItem />
            </div>
        </div>
    )
}

export default Home
