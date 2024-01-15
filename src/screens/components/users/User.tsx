import { Link, Outlet, useParams } from "react-router-dom";
import { DB } from "../db";

function User() {
    const { userId } = useParams();
    return (
        <div>
            <h1>
                User{userId}'s name is {DB[Number(userId) - 1].name}
            </h1>
            <hr />
            <Link to="followers">See Followers</Link>
            <Outlet context={{ nameOfMyUser: DB[Number(userId) - 1].name }} />
        </div>
    );
}
export default User;
