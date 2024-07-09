import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useEffect, useState } from 'react';

export const useGetCallsById = (id: string | string[]) => {
  const [call, setCall] = useState<Call | undefined>(undefined);
  const [isloading, setLoading] = useState<boolean>(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;

    const loadCall = async () => {
      try {
        const { calls } = await client.queryCalls({
          filter_conditions: {
            id
          }
        });

        if (calls.length > 0) {
          console.log("calls", calls);
          setCall(calls[0]);
        }
      } catch (error) {
        console.error("Error isloading call:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCall();
  }, [client, id]);

  return { call, isloading };
};
