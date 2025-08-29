import { useState } from "react";
import EmailView from "./EmailView";


function Email({filteredEmails, toggleRead, toggleStar, currentSearch}){
  
  filteredEmails = filteredEmails.filter(email=>email.title.toLowerCase().includes(currentSearch.toLowerCase()))

  

  const [emailClass,setEmailClass] = useState("email-hidden")



  
    return(<>
          <EmailView emailClass = {emailClass}/>
          {filteredEmails.map((email, index) => (
            <li
              key={index}
              className={`email ${email.read ? 'read' : 'unread'}`}
            onClick={()=>{emailClass === "email-visible" ? setEmailClass("email-hidden"): setEmailClass("email-visible"); console.log(emailClass)}}
            >
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>

            </li>
          )
          
          
          )}

    
    </>)
}


export default Email;