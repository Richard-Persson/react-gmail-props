
function Searchbar({setCurrentSearch}){



    return(<>
        <div className="search">
          <input className="search-bar" placeholder="Search mail" onChange={(e)=>{setCurrentSearch(e.target.value)}} />
        </div>
</>)
}

export default Searchbar;