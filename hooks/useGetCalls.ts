
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import {  useEffect, useState } from 'react';

export const useGetCalls = () => {
const [call,setCalls] = useState<Call[]>([]);
const [isLoading,setIsLoading] = useState<boolean>(false);
const client = useStreamVideoClient();
const {user} = useUser();

useEffect(()=>{
    const fetchCalls = async () => {

       if(!client || !user) return;
        try {
       
        const { calls } = await client.queryCalls({
          sort: [{ field: 'starts_at', direction: -1 }],
          filter_conditions: {
            starts_at: { $exists: true },
            $or: [
              { created_by_user_id: user.id },
              { members: { $in: [user.id] } },
            ],
          },
        });

        setCalls(calls);
       }catch(e){
           console.log(e);
       }
       finally{
           setIsLoading(false);
       }
    }
    fetchCalls();
},[client,user?.id])

const now = new Date();

  const endedCalls = call?.filter(({ state: { startsAt, endedAt } }: Call) => {
    return (startsAt && new Date(startsAt) < now) || !!endedAt
  })

  const upcomingCalls = call?.filter(({ state: { startsAt } }: Call) => {
    return startsAt && new Date(startsAt) > now
  })

  return { endedCalls, upcomingCalls, callRecordings:call, isLoading }

}