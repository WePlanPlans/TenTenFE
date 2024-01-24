import {
  StarIcon,
  ChatIcon,
  MoreIcon,
  UserIcon,
} from '@components/common/icons/Icons';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  isModalOpenState,
  titleState,
  modalChildrenState,
} from '@recoil/modal';
import {
  ratingState,
  keywordsState,
  contentState,
  targetReviewIdState,
  tourItemIdState,
  contentTypeIdState,
} from '@recoil/review';
import { MouseEvent, useState } from 'react';
import { getEmoji } from '@utils/utils';
import { getStarFill } from '@utils/getStarFill';

interface Keyword {
  keywordId: number;
  content: string;
  type: string;
}

interface ItemProps {
  reviewId: number;
  authorNickname: string;
  authorProfileImageUrl: string;
  rating: number;
  createdTime: any;
  content: string;
  keywords: Keyword[]; // keywordId, content, type
  commentCount: number;
  onClick?: () => void;
  tourItemId?: number;
  contentTypeId?: number;
  canTextOverflow: boolean;
  isAuthor?: boolean;
}

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const {
    reviewId,
    authorNickname,
    authorProfileImageUrl,
    rating,
    createdTime,
    content,
    keywords,
    commentCount,
    onClick,
    tourItemId,
    contentTypeId,
    canTextOverflow,
    isAuthor,
  } = props;
  const [_, setIsModalOpen] = useRecoilState(isModalOpenState);

  const setRating = useSetRecoilState(ratingState);
  const setKeywords = useSetRecoilState(keywordsState);
  const setContent = useSetRecoilState(contentState);
  const setTitle = useSetRecoilState(titleState);
  const setTourItemId = useSetRecoilState(tourItemIdState);
  const setContentTypeId = useSetRecoilState(contentTypeIdState);
  const setTargetReviewId = useSetRecoilState(targetReviewIdState);
  const setModalChildren = useSetRecoilState(modalChildrenState);
  const [showMoreKeywords, setShowMoreKeywords] = useState(false);

  const openModal = (title: string, reviewId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setTitle(title);
    if (tourItemId) {
      setTourItemId(tourItemId);
    } else {
      setTourItemId(0);
    }
    if (contentTypeId) {
      setContentTypeId(contentTypeId);
    } else {
      const temp = sessionStorage.getItem('contentTypeId');
      if (temp) {
        const contentTypeId = parseInt(temp, 10);
        setContentTypeId(contentTypeId);
      }
    }

    setRating(rating);
    setKeywords(keywords);
    setContent(content);
    setTargetReviewId(reviewId);
    setModalChildren('EditDelete');
    setIsModalOpen(true);
  };

  const formatCreatedTime = (timeString: string): string => {
    const date = new Date(timeString);
    const formattedDate = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);

    return formattedDate;
  };

  const handleClickPlusButton = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowMoreKeywords(true);
  };

  return (
    <div className="cursor-pointer pb-6" onClick={onClick}>
      <div className=" mb-5 flex items-center">
        <div className="mr-2">
          {!(
            authorProfileImageUrl === 'http://asiduheimage.jpg' ||
            authorProfileImageUrl === null
          ) ? (
            <img
              src={authorProfileImageUrl}
              alt="유저 프로필"
              className="h-[44px] w-[44px] rounded-full"
            />
          ) : (
            <div
              className={`flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#EDEDED]`}>
              <UserIcon size={32} color="white" fill="white" />
            </div>
          )}
        </div>
        <div className=" mr-2 flex flex-col gap-1">
          <div className="ml-1 font-bold">{authorNickname}</div>
          <div className="flex gap-2">
            <div className="flex h-[17px] items-center">
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon
                  key={index}
                  size={20}
                  color="none"
                  fill={getStarFill(index, rating)}
                  isHalf={index === Math.floor(rating) && rating % 1 !== 0}
                />
              ))}
            </div>
            <div className="flex items-center text-[12px] text-gray3">
              {formatCreatedTime(createdTime)}
            </div>
          </div>
        </div>

        {isAuthor && (
          <div
            className="ml-auto cursor-pointer"
            onClick={(e) => openModal('내 리뷰', reviewId, e)}>
            <MoreIcon fill="#888888" color="none" />
          </div>
        )}
      </div>
      {canTextOverflow ? (
        <div className="mb-4 ml-1 max-h-12 text-gray7">
          {content.length > 55 ? `${content.slice(0, 55)}...` : content}
        </div>
      ) : (
        <div className="mb-4 text-[14px] text-gray7">{content}</div>
      )}

      <div className="flex items-center ">
        <div className="flex gap-2">
          {!showMoreKeywords &&
            keywords.slice(0, 2).map((keyword, idx) => (
              <div
                key={idx}
                className="rounded-md bg-gray1 px-2 py-1 text-xs text-gray6">
                {getEmoji(keyword.content)} {keyword.content}
              </div>
            ))}
          {keywords.length > 2 && !showMoreKeywords && (
            <div
              className="rounded-md bg-gray1 px-2 py-1 text-xs text-gray6"
              onClick={(e) => {
                handleClickPlusButton(e);
              }}>
              +{keywords.length - 2}
            </div>
          )}
        </div>
        <div>
          {showMoreKeywords &&
            Array.from({ length: Math.ceil(keywords.length / 2) }).map(
              (_, lineIdx) => (
                <div
                  key={lineIdx}
                  className={`flex gap-2 ${
                    lineIdx === Math.ceil(keywords.length / 2) - 1
                      ? ''
                      : ' mb-3'
                  }`}>
                  {keywords
                    .slice(lineIdx * 2, lineIdx * 2 + 2)
                    .map((keyword, idx) => (
                      <div
                        key={idx}
                        className="rounded-md bg-gray1 px-2 py-1 text-gray6">
                        {getEmoji(keyword.content)} {keyword.content}
                      </div>
                    ))}
                </div>
              ),
            )}
        </div>

        <div className="ml-auto mr-2 flex ">
          <ChatIcon size={20} color="#5E5E5E" />
          <div className="ml-1 text-gray5">{commentCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
