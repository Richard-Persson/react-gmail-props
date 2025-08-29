import Email from "./Email";

function Emails({filteredEmails, toggleRead, toggleStar, currentSearch}){

    return(<>
        <main className="emails">
        <ul>
      <Email filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar} currentSearch={currentSearch}/>
        </ul>
        </main>
    </>)
}

export default Emails;