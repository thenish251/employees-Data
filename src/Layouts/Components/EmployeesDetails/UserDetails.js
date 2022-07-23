import React from "react";
import "./UserDetails.css";

const UserDetails=(props)=>{
    return(
        <>
   <div className="container-1">
    <h1>Description</h1>
    <p> Providing service flight booking @ lowest price guaranteed and also for railway e ticket booking. Also offering international flight tickets.Giving services to our
        customers since 1995.Now going to start hajj and umrah very soon for our valuable customers it will be also @ very affordable prices</p>
    <div className="person-info">
        <div>
            <div className="text">Contact</div>
            <div>imran dola</div>
            <div  className="text">Designation</div>
            <div> Propritor</div>
            <div  className="text">Emails</div>
            <div>hello@gmail.com</div>
            <div  className="text">Phones</div>
            <div>9712500500</div>
            <div></div>
        </div>
        <div className="info-2">
            <div  className="text">Address</div>
            <div>5 Kasmani Shopping Centre Unn Surat Gujrat 395003</div>
            <div  className="text">City</div>
            <div>Surat</div>
            <div  className="text">State</div>
            <div>Gujrat</div>
            <div  className="text">Country</div>
            <div>India</div>
            
        </div>
    </div>
   </div>
   </>
    )
}
 export default UserDetails;