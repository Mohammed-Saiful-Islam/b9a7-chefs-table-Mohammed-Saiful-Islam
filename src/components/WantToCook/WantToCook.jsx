
const WantToCook = () => {
    return (
        <div>
            <div className="">
                <h1 className="text-center text-3xl font-bold">Want to cook: <span>0</span></h1>
                <hr />
                <div className="p-2">
                    <div>
                        <div className="w-[80%]">
                            <table className=" flex justify-evenly">
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </table>
                        </div>
                        <div className="flex">
                            <div className="w-[80%] ">
                                <table className="flex justify-between">
                                    <p>0</p>
                                    <td>___________</td>
                                    <td>___________</td>
                                    <td>___________</td>
                                </table>
                            </div>
                            <div>
                                <button>Preparing</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WantToCook;