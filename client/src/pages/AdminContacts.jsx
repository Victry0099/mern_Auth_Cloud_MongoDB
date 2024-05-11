import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';

const AdminContacts = () => {
  const [contactData, setContactData] = useState([])
  const { authorizationToken } = useAuth();
  const getContactsData = async (req, res) => {

    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      })
      const data = await response.json();
      const newData = data.contacts;
      //  console.log("contact data", newData);
      if (response.ok) {
        //  console.log(response)
        setContactData(newData)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const deleteContactById = async(id)=>{
    try {
      
      const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
        method : "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        getContactsData();
        toast.success("Delete Successfullt")
      }else{
        toast.error("Delete not Successfullt")
      }

    } catch (error) {
      
    }
  }

  useEffect(() => {
    getContactsData();
  }, [])
  return (
    <>
      <section className="admin-contacts-section">
        <h1>Admin Contact Data</h1>

        <div className="container admin-users">
          {contactData.map((curContactData, index) => {
            const { username, email, message, _id } = curContactData;

            return (
              <div key={index}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn" onClick={()=>{
                  deleteContactById(_id);
                }}> delete</button>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default AdminContacts
