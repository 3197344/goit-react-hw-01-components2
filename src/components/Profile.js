
import user from '../partials/user.json';
export const Profile = () => {
    return (
        <div class="profile">
            <div
                class="description"
                style={{
                    margin: '0 auto',
                    marginTop: '10px',
                    border: '2px solid tomato',
                    width: '150px',
                    padding: '20px 3px 10px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 16,
                    color: '#010101',
                }}
            >
                <img
                    src={user.avatar}
                    alt="User avatar"
                    class="avatar"
                    width="150" />
                <p class="name"style={{margin: '5px',}}>{user.username}</p>
                <p class="tag"style={{margin: '5px',}}>@{user.tag}</p>
                <p class="location"style={{margin: '5px',}}>{user.location}</p>

            </div>

            <ul class="stats"
            style={{
                    width: '150px',
                    display: 'block',
                    padding: '5px',
                    fontSize: 16,
                    textTransform: 'uppercase',
                    color: 'white',
                    listStyle: 'none',
                    margin: '0 auto',
                    backgroundColor: 'tomato',
                }}

            >
                <li style={{padding: '5px',}}>
                    <span class="label">Followers</span>
                    <span class="quantity"> {user.stats.followers}</span>
                </li>
                <li style={{padding: '5px',}}>
                    <span class="label">Views</span>
                    <span class="quantity"> {user.stats.views}</span>
                </li>
                <li style={{padding: '5px',}}>
                    <span class="label">Likes</span>
                    <span class="quantity"> {user.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

