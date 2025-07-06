"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Plus, Users, User } from "lucide-react";
import Link from "next/link";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { BarLoader } from "react-spinners";
import { Button } from "@/components/ui/button";


const ContactsPage = () => {
  const {data,isLoading} = useConvexQuery(api.contacts.getAllContacts);
  if(isLoading){
    return(
      <div>
        <BarLoader width={"100%"} color='#36d77'/>
      </div>
    )
  }

   const { users, groups } = data || { users: [], groups: [] };

  return (
    <div>
       <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between mb-6">
        <h1 className="text-5xl gradient-title">Contacts</h1>
        <Button onClick={() => setIsCreateGroupModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create Group
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
            <User className="mr-2 h-5 w-5" />
            People
          </h2>
          
        </div>
        <div>
           <h2 className="text-xl font-bold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Groups
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage
