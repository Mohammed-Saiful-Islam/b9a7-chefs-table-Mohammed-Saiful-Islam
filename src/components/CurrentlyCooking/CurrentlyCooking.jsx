
const CurrentlyCooking = () => {
    return (
        <div>
            <div>
                <div className="">
                    <h1 className="text-center text-3xl font-bold">Want to cook: <span>0</span></h1>
                    <hr />
                    <div className="p-2">
                        <div>
                            <div className="">
                                <table className=" flex justify-evenly">
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </table>
                            </div>
                            <div className="">
                                <div className="">
                                    <table className="flex justify-between">
                                        <p>0</p>
                                        <td>___________</td>
                                        <td>___________</td>
                                        <td>___________</td>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-end gap-6">
                                <div>
                                    <div><p>Total Time =</p></div>
                                    <div><p>0 minutes </p>
                                    </div>
                                </div>
                                <div>
                                    <div><p>Total Calories =</p></div>
                                    <div><p>0 Caloroies </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentlyCooking;