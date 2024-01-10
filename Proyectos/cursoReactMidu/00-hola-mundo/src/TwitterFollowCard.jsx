
const TwitterFollowCard = ({ formatUserName, userName, name, isFollowing}) => {
  return (
    <article className='tw-followCard'>
        <header>
            <img src={`https://unavatar.io/${userName}`}/>
        
            <div>
                <strong>{name}</strong>
                <span>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button>
                Seguir
            </button>
        </aside>
    </article>
  )
}

export default TwitterFollowCard