import { useQuery } from '@tanstack/react-query';
import { getMyTrips } from '@api/trips';

interface Trip {
  tripId: string;
  tripName: string;
  startDate: string;
  endDate: string;
  numberOfPeople: number;
  tripStatus: string;
  tripThumbnailUrl: string;
}

export const useGetMyTrips = (): { myTrips: Trip[] } => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMyTrips'],
    queryFn: () => getMyTrips(),
  });

  const myTrips = data?.data.data;

  if (isLoading || isError) {
    return { myTrips: [] };
  }

  return { myTrips };
};
