import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { v4 as uuidv4 } from 'uuid';
import { MyLikedListItem } from './MyLikedListItem';
import { TourType } from '@/@types/tours.types';
import { Spinner } from '@components/common/spinner/Spinner';

interface WishListProps {
  toursData: { pages: Array<{ data: { content: TourType[] } }> };
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isLoading: boolean;
  selectedContentTypeId: number | null;
}

export const MyLikedList: React.FC<WishListProps> = ({
  toursData,
  fetchNextPage,
  hasNextPage,
  isLoading,
  selectedContentTypeId,
}) => {
  if (!toursData || toursData.pages.length === 0) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  const filteredData =
    selectedContentTypeId !== null
      ? toursData.pages.map((group) => ({
          data: {
            content: group.data.content.filter(
              (item) => item.contentTypeId === selectedContentTypeId,
            ),
          },
        }))
      : toursData.pages;

  return (
    <div className="min-h-[70vh]">
      <InfiniteScroll
        pageStart={0}
        loadMore={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={
          <div key={uuidv4()} className="flex justify-center">
            <Spinner />
          </div>
        }>
        <div className="no-scrollbar grid grid-cols-1 gap-[16px] overflow-y-scroll">
          {!isLoading &&
            filteredData.map((group) => (
              <React.Fragment key={uuidv4()}>
                {group?.data.content.map((wishList: TourType) => (
                  <MyLikedListItem key={uuidv4()} wishList={wishList} />
                ))}
              </React.Fragment>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
