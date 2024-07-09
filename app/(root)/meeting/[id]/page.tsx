"use client"

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallsById } from "@/hooks/useGetCallsById";
import { useUser } from "@clerk/nextjs"
import { StreamCall,StreamTheme } from "@stream-io/video-react-sdk"
import {useState} from "react";

const Meeting = ({params:{id}}:{params:{id:string}}) => {
  const {user,isLoaded} = useUser()
  const [isSetupComplete,setisSetupComplete] = useState(false)
  const { call, isloading } = useGetCallsById(id)
  if(!isLoaded || isloading){
    return <Loader/>
  }
  return (
    <main className="h-full w-full">
     <StreamCall call = {call}>
      <StreamTheme>
       {
        !isSetupComplete ?(<MeetingSetup setisSetupComplete = {setisSetupComplete}/>):(<MeetingRoom/>)
       }
      </StreamTheme>
     </StreamCall>
    </main>
  )
}

export default Meeting
