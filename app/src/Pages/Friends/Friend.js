import friendSrc from '../../assets/images/friend.png'

const Friend = ({name}) => {
    return (
        <div className="friend-container">
            <div className="friend-img-div">
                <img src={friendSrc}/>
            </div>
            <div className="friend-name-div">
                <span>{name}</span>
            </div>
        </div>
    );
}

export default Friend;