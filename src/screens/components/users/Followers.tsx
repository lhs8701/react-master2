import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
    nameOfMyUser: string;
}
function Followers() {
    const { nameOfMyUser } = useOutletContext<IFollowersContext>();
    return <h1>Herer are {nameOfMyUser}'s followers</h1>;
}

export default Followers;
