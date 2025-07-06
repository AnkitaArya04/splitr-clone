"use client"

import { api } from '@/convex/_generated/api'
import { useConvexQuery } from '@/hooks/use-convex-query'
import React from 'react'
import { BarLoader } from 'react-spinners'

const ContactsPage = () => {
  const {data,isLoading} = useConvexQuery(api.contacts.getAllContacts);
  if(isLoading){
    return(
      <div>
        <BarLoader width={"100%"} color='#36d77'/>
      </div>
    )
  }
  return (
    <div>
      ContactPage
    </div>
  )
}

export default ContactsPage
