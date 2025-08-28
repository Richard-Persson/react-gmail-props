import Email from "./Email";

function Emails({filteredEmails, toggleRead, toggleStar}){

    return(<>
        <main className="emails">
        <ul>
      <Email filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar}/>
        </ul>
        </main>
    </>)
}

export default Emails;