"use client"
import { useQuery} from 'convex/react'
import { api } from '@/convex/_generated/api'
import React from 'react'

const ContactsPage = () => {
  const data=useQuery(api.contacts.getAllContacts);
  console.log(data)
  return (
    <div>
      ContactPage
    </div>
  )
}

export default ContactsPage
