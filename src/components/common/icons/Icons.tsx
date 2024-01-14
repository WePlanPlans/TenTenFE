interface IconProps {
  size?: number;
  color?: string;
  fill?: string;
  onClick?: () => void;
  className?: string;
  isHalf?: boolean;
  cursor?: string;
  children?: React.ReactNode;
}

export const HomeIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={fill}>
      <path
        d="M2.94556 11.3541C2.94556 10.1299 3.50614 8.97315 4.46698 8.21459L9.96698 3.87248C11.4202 2.72519 13.4709 2.72519 14.9241 3.87248L20.4241 8.21459C21.385 8.97315 21.9456 10.1299 21.9456 11.3541V17.9157C21.9456 20.1248 20.1547 21.9157 17.9456 21.9157H16.4456C15.8933 21.9157 15.4456 21.468 15.4456 20.9157V17.9157C15.4456 16.8111 14.5501 15.9157 13.4456 15.9157H11.4456C10.341 15.9157 9.44556 16.8111 9.44556 17.9157V20.9157C9.44556 21.468 8.99784 21.9157 8.44556 21.9157H6.94556C4.73642 21.9157 2.94556 20.1248 2.94556 17.9157L2.94556 11.3541Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const CalendarIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 25 25"
      fill={fill}>
      <rect
        x="3.1955"
        y="4.66537"
        width="18"
        height="18"
        rx="5"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M3.1955 9.66537H21.1955"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16.6956 3.16537L16.6956 6.16537"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.69556 3.16537L7.69556 6.16537"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.69543 13.6646H7.69543"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6954 13.6646H12.6954"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6955 13.6646H17.6955"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.69543 17.6654H7.69543"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6954 17.6654H12.6954"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6955 17.6654H17.6955"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HeartIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
  onClick,
}) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={fill}>
      <path
        d="M4.56662 14.1289L10.7276 20.622C11.9106 21.8687 13.8971 21.8687 15.0801 20.622L21.2411 14.1289C23.4581 11.7925 23.4581 8.00429 21.2411 5.66782C19.0241 3.33135 15.4297 3.33135 13.2127 5.66782V5.66782C13.0448 5.84472 12.7629 5.84472 12.5951 5.66782V5.66782C10.3781 3.33135 6.78362 3.33135 4.56662 5.66782C2.34962 8.00429 2.34962 11.7925 4.56662 14.1289Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const UserIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={fill}>
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-1 0 0 1 16.6538 3.91537)"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M5.65381 17.85C5.65381 16.9897 6.19466 16.2222 7.0049 15.9328V15.9328C10.6578 14.6282 14.6498 14.6282 18.3027 15.9328V15.9328C19.113 16.2222 19.6538 16.9897 19.6538 17.85V19.1656C19.6538 20.353 18.6021 21.2651 17.4266 21.0972L16.4722 20.9609C13.9395 20.599 11.3682 20.599 8.83543 20.9609L7.88101 21.0972C6.70551 21.2651 5.65381 20.353 5.65381 19.1656V17.85Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

interface ChackIconProps {
  width?: number;
  height?: number;
  color?: string;
  fill?: string;
}

export const CheckIcon = ({
  width = 16,
  height = 16,
  color = '#888888',
  fill = 'none',
}: ChackIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36698">
        <path
          id="Vector 747"
          d="M2.93848 8.00788L7.01646 12.0858L13.4343 5.66797"
          stroke={color}
        />
      </g>
    </svg>
  );
};

interface LeftIconProps {
  width?: number;
  height?: number;
  fill?: string;
  onClick?: VoidFunction;
  cursor?: string;
}

export const LeftIcon = ({
  width = 8,
  height = 15,
  fill = '#1E1E1E',
  onClick,
  cursor = 'pointer',
}: LeftIconProps) => {
  return (
    <svg
      onClick={onClick}
      cursor={cursor}
      width={width}
      height={height}
      viewBox="0 0 8 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        id="Left"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.65547 0.743953C8.9713 1.02827 8.99457 1.51229 8.70746 1.82503L2.99737 8.04492L8.70746 14.2648C8.99457 14.5776 8.9713 15.0616 8.65547 15.3459C8.33964 15.6302 7.85086 15.6072 7.56375 15.2944L0.908447 8.04492L7.56375 0.795433C7.85087 0.482685 8.33965 0.459636 8.65547 0.743953Z"
        fill={fill}
      />
    </svg>
  );
};

export const MapIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="2 -1.5 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36689">
        <g id="Group">
          <path
            id="Exclude"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.63905 13.4649C8.02061 14.0124 8.81045 14.0124 9.192 13.4649C10.4794 11.6176 12.9155 7.87993 12.9155 6.04785C12.9155 4.85438 12.4414 3.70978 11.5975 2.86587C10.7536 2.02196 9.609 1.54785 8.41553 1.54785C7.22205 1.54785 6.07746 2.02196 5.23355 2.86587C4.38963 3.70978 3.91553 4.85438 3.91553 6.04785C3.91553 7.87993 6.35168 11.6176 7.63905 13.4649ZM9.91553 6.04785C9.91553 6.87628 9.24395 7.54785 8.41553 7.54785C7.5871 7.54785 6.91553 6.87628 6.91553 6.04785C6.91553 5.21942 7.5871 4.54785 8.41553 4.54785C9.24395 4.54785 9.91553 5.21942 9.91553 6.04785Z"
            stroke={color}
          />
        </g>
      </g>
    </svg>
  );
};

export const PenIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36684">
        <g id="Group 36683">
          <path
            id="Rectangle 74"
            d="M12.9793 3.21944C13.6297 2.56808 14.6846 2.56768 15.3354 3.21855L17.412 5.29509C18.0573 5.94042 18.064 6.98512 17.427 7.63868L9.73273 15.5331C9.26238 16.0156 8.61727 16.2878 7.94365 16.2877L5.65019 16.2876C4.9395 16.2876 4.37194 15.6952 4.40183 14.9846L4.50029 12.6437C4.52662 12.0177 4.78681 11.4244 5.22936 10.9811L12.9793 3.21944Z"
            stroke={color}
            strokeWidth="1.25"
          />
          <path
            id="Line"
            d="M11.2227 5.12033L15.3475 9.24512"
            stroke={color}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Line_2"
            d="M13.2701 16.2266H18.3715"
            stroke={color}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export const PhoneIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36690">
        <path
          id="Vector"
          d="M10.4971 14.3215C11.1129 14.7188 11.8468 14.8919 12.5752 14.8118C13.3037 14.7316 13.9823 14.4031 14.4971 13.8815L14.9471 13.4415C15.1444 13.2397 15.2548 12.9687 15.2548 12.6865C15.2548 12.4043 15.1444 12.1333 14.9471 11.9315L13.0371 10.0415C12.837 9.84482 12.5676 9.73463 12.2871 9.73463C12.0065 9.73463 11.7372 9.84482 11.5371 10.0415C11.3353 10.2388 11.0643 10.3492 10.7821 10.3492C10.4999 10.3492 10.2289 10.2388 10.0271 10.0415L7.02709 7.04148C6.92701 6.94285 6.84754 6.82532 6.79329 6.6957C6.73905 6.56609 6.71112 6.42698 6.71112 6.28648C6.71112 6.14597 6.73905 6.00687 6.79329 5.87725C6.84754 5.74764 6.92701 5.6301 7.02709 5.53148C7.22374 5.33137 7.33394 5.06204 7.33394 4.78148C7.33394 4.50092 7.22374 4.23158 7.02709 4.03148L5.12709 2.13148C4.9253 1.93419 4.6543 1.82373 4.37209 1.82373C4.08988 1.82373 3.81888 1.93419 3.61709 2.13148L3.17709 2.58148C2.65544 3.09622 2.32692 3.77488 2.24679 4.50334C2.16666 5.23181 2.3398 5.96565 2.73709 6.58148C4.80713 9.63221 7.44103 12.2593 10.4971 14.3215Z"
          stroke={color}
        />
      </g>
    </svg>
  );
};

export const ReactIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className="iconify iconify--logos"
      width={size}
      height={size}
      fill={fill}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 228">
      <path
        stroke={color}
        d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path>
    </svg>
  );
};

export const StarIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
  onClick,
  className,
  isHalf,
}) => {
  const renderLinearGradient = () => {
    if (isHalf) {
      return (
        <defs>
          <linearGradient id="grad">
            <stop offset="50%" stopColor="#FFEC3E" />
            <stop offset="50%" stopColor="#EDEDED" />
          </linearGradient>
        </defs>
      );
    }
    return null;
  };

  const renderStarPath = () => (
    <path
      id="Star 5"
      d="M7.46447 0.974901C7.76382 0.0535908 9.06723 0.0535913 9.36658 0.974902L10.4362 4.2667C10.57 4.67872 10.954 4.95768 11.3872 4.95768H14.8484C15.8171 4.95768 16.2199 6.1973 15.4362 6.7667L12.636 8.80114C12.2855 9.05578 12.1389 9.50715 12.2728 9.91917L13.3423 13.211C13.6417 14.1323 12.5872 14.8984 11.8035 14.329L9.00331 12.2946C8.65283 12.0399 8.17823 12.0399 7.82774 12.2946L5.02757 14.329C4.24386 14.8984 3.18938 14.1323 3.48873 13.211L4.5583 9.91917C4.69217 9.50715 4.54552 9.05578 4.19503 8.80114L1.39486 6.7667C0.611146 6.1973 1.01392 4.95768 1.98265 4.95768H5.44385C5.87707 4.95768 6.26103 4.67872 6.3949 4.2667L7.46447 0.974901Z"
      stroke={color}
      fill={isHalf ? 'url(#grad)' : fill}
    />
  );

  return (
    <svg
      onClick={onClick}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 15"
      xmlns="http://www.w3.org/2000/svg">
      {renderLinearGradient()}
      {renderStarPath()}
    </svg>
  );
};

export const PlusIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill={fill}>
      <rect
        x="2.42017"
        y="2.60938"
        width="16.6667"
        height="16.6667"
        rx="8.33333"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M6.98962 10.9434L14.5176 10.9434"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7534 7.17908L10.7534 14.707"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChatIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g
        id="mail-chat-bubble-typing-oval--messages-message-bubble-typing-chat"
        clipPath="url(#clip0_447_1104)">
        <g id="Group">
          <path
            id="Vector"
            d="M10.9155 7.5918C10.6394 7.5918 10.4155 7.36794 10.4155 7.0918C10.4155 6.81565 10.6394 6.5918 10.9155 6.5918C11.1917 6.5918 11.4155 6.81565 11.4155 7.0918C11.4155 7.36794 11.1917 7.5918 10.9155 7.5918Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M7.66553 7.5918C7.38938 7.5918 7.16553 7.36794 7.16553 7.0918C7.16553 6.81565 7.38938 6.5918 7.66553 6.5918C7.94167 6.5918 8.16553 6.81565 8.16553 7.0918C8.16553 7.36794 7.94167 7.5918 7.66553 7.5918Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_3"
            d="M4.41553 7.5918C4.13938 7.5918 3.91553 7.36794 3.91553 7.0918C3.91553 6.81565 4.13938 6.5918 4.41553 6.5918C4.69167 6.5918 4.91553 6.81565 4.91553 7.0918C4.91553 7.36794 4.69167 7.5918 4.41553 7.5918Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_4"
            d="M7.41553 0.591798C8.59129 0.592164 9.74493 0.911437 10.7536 1.51561C11.7622 2.11979 12.5881 2.98623 13.1433 4.02267C13.6985 5.05911 13.9621 6.22673 13.9061 7.40115C13.8502 8.57558 13.4767 9.71284 12.8255 10.6918L13.9155 13.5918L10.2655 12.9318C9.38662 13.3613 8.4221 13.5869 7.44388 13.5917C6.46566 13.5966 5.49895 13.3805 4.61584 12.9598C3.73272 12.539 2.95596 11.9243 2.34347 11.1616C1.73097 10.3988 1.29854 9.50765 1.07841 8.55451C0.858272 7.60136 0.856112 6.61082 1.07209 5.65673C1.28806 4.70263 1.7166 3.80958 2.32576 3.04416C2.93492 2.27874 3.70899 1.66069 4.59027 1.23607C5.47154 0.811449 6.43729 0.591221 7.41553 0.591798V0.591798Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_447_1104">
          <rect
            width="14"
            height="14"
            fill={color}
            transform="matrix(-1 0 0 1 14.4155 0.0917969)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CloseIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'white',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36673">
        <circle id="Ellipse" cx="8.00671" cy="8.59326" r="8" fill={fill} />
        <path
          id="Line"
          d="M5.04033 5.62725L10.9731 11.5601"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line_2"
          d="M10.9731 5.62725L5.04028 11.5601"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const DeleteIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36693">
        <g id="Trash can">
          <path
            id="Rectangle 74"
            d="M3.77651 5.58206C3.21324 4.83103 3.74912 3.75928 4.68791 3.75928H12.1309C13.0697 3.75928 13.6056 4.83103 13.0423 5.58206V5.58206C12.6315 6.12984 12.4094 6.79608 12.4094 7.4808V11.7593C12.4094 13.232 11.2155 14.4259 9.74276 14.4259H7.07609C5.60333 14.4259 4.40942 13.232 4.40942 11.7593V7.4808C4.40942 6.79608 4.18734 6.12984 3.77651 5.58206V5.58206Z"
            stroke={color}
          />
          <path
            id="Line"
            d="M9.74268 11.0928L9.74268 7.09277"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Line_2"
            d="M7.07617 11.0928L7.07617 7.09277"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Rectangle 4"
            d="M11.076 3.75928L10.7132 2.67097C10.5318 2.12652 10.0222 1.75928 9.44833 1.75928H7.37035C6.79645 1.75928 6.28693 2.12652 6.10544 2.67097L5.74268 3.75928"
            stroke={color}
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
};

export const MoreIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36692">
        <g id="Group 36691">
          <circle
            id="Ellipse 533"
            cx="12.4155"
            cy="5.81689"
            r="1.69482"
            stroke={color}
          />
          <circle
            id="Ellipse 534"
            cx="12.4155"
            cy="12.1226"
            r="1.69482"
            stroke={color}
          />
          <circle
            id="Ellipse 535"
            cx="12.4155"
            cy="18.4272"
            r="1.69482"
            stroke={color}
          />
        </g>
      </g>
    </svg>
  );
};

export const DownIcon: React.FC<IconProps> = ({
  size = 25,
  color = 'black',
  fill = 'none',
  onClick,
  cursor = 'pointer',
  className,
}) => {
  return (
    <svg
      onClick={onClick}
      cursor={cursor}
      width={size}
      height={size}
      className={className}
      viewBox="0 0 17 17"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36659">
        <path
          id="Vector 734"
          d="M3.12079 5.40039L8.41553 10.6951L13.7103 5.40039"
          stroke={color}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const SearchIcon: React.FC<IconProps> = ({
  size = 16,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Search">
        <ellipse
          id="Ellipse"
          cx="6.74886"
          cy="6.60726"
          rx="5.33333"
          ry="5.33333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Line"
          d="M10.4155 10.5793L13.7489 13.9127"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const CameraIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36734">
        <path
          id="Union (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.80814 1.81641C5.29776 1.81641 4.85442 2.16747 4.73743 2.66426L4.59715 3.25993C4.52235 3.57756 4.23874 3.89225 3.82176 3.89225H3.06094C2.45342 3.89225 1.96094 4.38473 1.96094 4.99224V10.0194C1.96094 10.6269 2.45342 11.1194 3.06094 11.1194H11.8609C12.4685 11.1194 12.9609 10.6269 12.9609 10.0194V4.99225C12.9609 4.38473 12.4685 3.89225 11.8609 3.89225H11.1008C10.6856 3.89225 10.4028 3.57886 10.3288 3.26184L10.1896 2.66616C10.0733 2.16846 9.62955 1.81641 9.11844 1.81641H5.80814ZM3.76405 2.43503C3.9874 1.48662 4.83378 0.816406 5.80814 0.816406H9.11844C10.0942 0.816406 10.9414 1.4885 11.1634 2.43867L11.2693 2.89225H11.8609C13.0207 2.89225 13.9609 3.83245 13.9609 4.99225V10.0194C13.9609 11.1792 13.0207 12.1194 11.8609 12.1194H3.06094C1.90114 12.1194 0.960938 11.1792 0.960938 10.0194V4.99224C0.960938 3.83245 1.90114 2.89225 3.06094 2.89225H3.65638L3.76405 2.43503Z"
          fill="#1E1E1E"
        />
        <path
          id="Ellipse 536 (Stroke)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.46038 5.17187C6.48987 5.17187 5.70312 5.95862 5.70312 6.92913C5.70312 7.89963 6.48987 8.68638 7.46038 8.68638C8.43088 8.68638 9.21763 7.89963 9.21763 6.92913C9.21763 5.95862 8.43088 5.17187 7.46038 5.17187ZM4.70312 6.92913C4.70312 5.40634 5.93759 4.17188 7.46038 4.17188C8.98316 4.17188 10.2176 5.40634 10.2176 6.92913C10.2176 8.45191 8.98316 9.68638 7.46038 9.68638C5.93759 9.68638 4.70312 8.45191 4.70312 6.92913Z"
          fill="#1E1E1E"
        />
      </g>
    </svg>
  );
};

interface LogoProps {
  width?: string;
  height?: string;
  fill?: string;
}

export const LogoIcon: React.FC<LogoProps> = ({
  width = '71',
  height = '22',
  fill = '#29DDF6',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 71 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="WPP">
        <path
          d="M0.888672 2.28455C1.17545 1.71099 1.62611 1.27057 2.24064 0.963305C2.87566 0.635555 3.62334 0.47168 4.48369 0.47168C5.83566 0.47168 6.91109 0.963306 7.70998 1.94656C8.52936 2.90933 8.93905 4.4559 8.93905 6.58628V17.5557L15.9754 1.08621H19.6012L20.4308 16.6339L20.3386 17.525L27.6516 1.08621H31.8611L22.0286 21.3351H15.4838L14.8693 11.9942L10.8134 21.3351H3.40826L2.48646 6.58628C2.425 5.48012 2.24064 4.56856 1.93338 3.85161C1.6466 3.11417 1.29836 2.59182 0.888672 2.28455Z"
          fill={fill}
        />
        <path
          d="M43.483 0.840398C48.5017 0.840398 51.011 2.6123 51.011 6.15611C51.011 8.10213 50.3862 9.65894 49.1367 10.8266C47.9076 11.9942 46.2177 12.578 44.0668 12.578C43.0631 12.578 42.172 12.2912 41.3936 11.7176C41.0249 11.4718 40.7176 11.185 40.4718 10.8573C41.9671 10.8573 43.104 10.4066 43.8824 9.50531C44.6813 8.58351 45.0808 7.23154 45.0808 5.44939C45.0808 3.66725 44.1999 2.77618 42.4383 2.77618H41.7008C41.5779 2.77618 41.4653 2.78642 41.3628 2.8069L37.8293 21.3351H31.1616L34.941 1.20912C37.1328 1.00427 38.8638 0.89161 40.1338 0.871126C41.4038 0.850641 42.5202 0.840398 43.483 0.840398Z"
          fill={fill}
        />
        <path
          d="M63.3415 0.840398C68.3602 0.840398 70.8696 2.6123 70.8696 6.15611C70.8696 8.10213 70.2448 9.65894 68.9952 10.8266C67.7662 11.9942 66.0762 12.578 63.9253 12.578C62.9216 12.578 62.0305 12.2912 61.2521 11.7176C60.8834 11.4718 60.5761 11.185 60.3303 10.8573C61.8257 10.8573 62.9626 10.4066 63.741 9.50531C64.5399 8.58351 64.9393 7.23154 64.9393 5.44939C64.9393 3.66725 64.0585 2.77618 62.2968 2.77618H61.5594C61.4365 2.77618 61.3238 2.78642 61.2214 2.8069L57.6878 21.3351H51.0201L54.7995 1.20912C56.9914 1.00427 58.7223 0.89161 59.9923 0.871126C61.2624 0.850641 62.3788 0.840398 63.3415 0.840398Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export const KakaoIcon = () => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        id="Kakao"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.60938 12.9979C13.0277 12.9979 16.6094 10.2415 16.6094 6.84126C16.6094 3.44101 13.0277 0.68457 8.60938 0.68457C4.1911 0.68457 0.609375 3.44101 0.609375 6.84126C0.609375 9.02531 2.08711 10.9437 4.31509 12.0367L3.76215 15.1916L6.86492 12.8511C7.42645 12.9473 8.01022 12.9979 8.60938 12.9979Z"
        fill="#3B1E1E"
      />
    </svg>
  );
};

export const BackIcon: React.FC<IconProps> = ({
  size = 9,
  fill = '#1E1E1E',
  onClick,
  cursor = 'pointer',
}) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height="16"
      viewBox="0 0 9 16"
      fill={fill}
      cursor={cursor}
      xmlns="http://www.w3.org/2000/svg">
      <g id="Back">
        <path
          d="M8.70308 0.743953C9.0189 1.02827 9.04218 1.51229 8.75507 1.82503L3.04497 8.04492L8.75506 14.2648C9.04218 14.5776 9.0189 15.0616 8.70308 15.3459C8.38725 15.6302 7.89847 15.6072 7.61136 15.2944L0.956054 8.04492L7.61136 0.795433C7.89847 0.482685 8.38725 0.459636 8.70308 0.743953Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const RightIcon = ({ size = 16, fill = '#0D0D0D' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36673">
        <path
          id="Icon"
          d="M5.9062 12.5372C5.64585 12.2768 5.64585 11.8547 5.9062 11.5944L9.43479 8.06576L5.9062 4.53716C5.64585 4.27681 5.64585 3.8547 5.9062 3.59435C6.16655 3.334 6.58866 3.334 6.84901 3.59435L10.849 7.59435C11.1094 7.8547 11.1094 8.27681 10.849 8.53716L6.84901 12.5372C6.58866 12.7975 6.16655 12.7975 5.9062 12.5372Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

interface ProgressBarProps {
  full?: boolean;
}

export const ProgressBarIcon = ({ full = false }: ProgressBarProps) => {
  return (
    <svg
      width="49"
      height="3"
      viewBox="0 0 49 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36811">
        <rect
          id="Rectangle 2586"
          x="0.417969"
          y="0.527344"
          width="22"
          height="2"
          rx="1"
          fill="#29DDF6"
        />
        <rect
          id="Rectangle 2587"
          x="26.2539"
          y="0.527344"
          width="22"
          height="2"
          rx="1"
          fill={full ? '#29DDF6' : '#D7D7D7'}
        />
      </g>
    </svg>
  );
};

export const SuccessIcon = () => {
  return (
    <svg
      width="81"
      height="81"
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 36821">
        <circle
          id="Ellipse 546"
          cx="40.4226"
          cy="40.2585"
          r="35.1238"
          stroke="#29DDF6"
          strokeWidth="4"
        />
        <path
          id="Vector 792"
          d="M25.2881 38.8061L36.2808 50.1801L55.5577 30.3379"
          stroke="#29DDF6"
          strokeWidth="5.33333"
          strokeLinecap="round"
        />
        <g id="Group 36821_2">
          <circle
            id="Ellipse 545"
            cx="40.9551"
            cy="40.4521"
            r="40"
            fill="#DAFBFF"
          />
          <path
            id="Vector 792_2"
            d="M21.8516 38.6183L35.7266 52.9746L60.0579 27.9297"
            stroke="#29DDF6"
            strokeWidth="5.33333"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
};

export const EllipseIcon: React.FC<IconProps> = ({ size = 61 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height="61"
      viewBox="0 0 61 61"
      fill="none">
      <g filter="url(#filter0_d_2507_5177)">
        <circle cx="28" cy="29.7959" r="24" fill="white" />
        <circle
          cx="28"
          cy="29.7959"
          r="23.4783"
          stroke="#F8F8F8"
          strokeWidth="1.04348"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2507_5177"
          x="0.0347817"
          y="0.787202"
          width="60.1044"
          height="60.1044"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.08696" dy="1.04348" />
          <feGaussianBlur stdDeviation="3.02609" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2507_5177"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2507_5177"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const TopIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        id="Vector 734 (Stroke)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0462 8.95185C16.7278 9.30213 16.1857 9.32794 15.8354 9.00951L8.86914 2.67653L1.90286 9.00951C1.55258 9.32794 1.01048 9.30213 0.692049 8.95185C0.373615 8.60157 0.39943 8.05947 0.749708 7.74104L8.86914 0.359741L16.9886 7.74104C17.3388 8.05947 17.3647 8.60157 17.0462 8.95185Z"
        fill="#888888"
      />
    </svg>
  );
};

export const ShareIcon: React.FC<ChackIconProps> = ({
  width = 20,
  height = 19,
  fill = 'none',
  color = 'black',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 19"
      fill={fill}>
      <path
        d="M13.623 6.32031L14.9914 6.32031C17.2006 6.32031 18.9914 8.11117 18.9914 10.3203L18.9914 13.9519C18.9914 16.161 17.2006 17.9519 14.9914 17.9519L5.09668 17.9519C2.88754 17.9519 1.09668 16.161 1.09668 13.9519L1.09668 10.3203C1.09668 8.11117 2.88754 6.32031 5.09668 6.32031L6.4651 6.32031"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.7275 3.63734L10.7504 1.66023C10.3599 1.26971 9.72675 1.26971 9.33622 1.66023L7.35912 3.63734"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.0439 1.8491L10.0439 12.5859"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const PlanIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.40263 3.74219C6.13698 3.74219 5.11096 4.7682 5.11096 6.03385V14.7839C5.11096 16.0495 6.13698 17.0755 7.40263 17.0755H13.236C14.5016 17.0755 15.5276 16.0495 15.5276 14.7839V8.02018C15.5276 7.82523 15.4593 7.63645 15.3345 7.48669L12.4639 4.04203C12.3056 3.85204 12.0711 3.74219 11.8237 3.74219H7.40263ZM3.86096 6.03385C3.86096 4.07784 5.44662 2.49219 7.40263 2.49219H11.8237C12.442 2.49219 13.0284 2.76682 13.4242 3.2418L16.2948 6.68646C16.6068 7.06087 16.7776 7.53281 16.7776 8.02018V14.7839C16.7776 16.7399 15.192 18.3255 13.236 18.3255H7.40263C5.44662 18.3255 3.86096 16.7399 3.86096 14.7839V6.03385Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5068 2.85742C12.852 2.85742 13.1318 3.13724 13.1318 3.48242V6.0345C13.1318 6.49474 13.5049 6.86784 13.9652 6.86784H15.7881C16.1333 6.86784 16.4131 7.14766 16.4131 7.49284C16.4131 7.83802 16.1333 8.11784 15.7881 8.11784H13.9652C12.8146 8.11784 11.8818 7.1851 11.8818 6.0345V3.48242C11.8818 3.13724 12.1617 2.85742 12.5068 2.85742Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.77759 10.4082C6.77759 10.063 7.05741 9.7832 7.40259 9.7832H13.2359C13.5811 9.7832 13.8609 10.063 13.8609 10.4082C13.8609 10.7534 13.5811 11.0332 13.2359 11.0332H7.40259C7.05741 11.0332 6.77759 10.7534 6.77759 10.4082Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.77759 14.0547C6.77759 13.7095 7.05741 13.4297 7.40259 13.4297H10.3193C10.6644 13.4297 10.9443 13.7095 10.9443 14.0547C10.9443 14.3999 10.6644 14.6797 10.3193 14.6797H7.40259C7.05741 14.6797 6.77759 14.3999 6.77759 14.0547Z"
        fill={color}
      />
    </svg>
  );
};

export const CarIcon: React.FC<IconProps> = ({
  size = 19,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill={fill}>
      <path
        d="M4.50342 10.3809H6.75342M2.25342 7.38086L3.75342 8.13086L4.7064 5.27191C4.9031 4.6818 5.00146 4.38674 5.18388 4.1686C5.34498 3.97596 5.55186 3.82685 5.78555 3.73494C6.05019 3.63086 6.3612 3.63086 6.98324 3.63086H12.5236C13.1456 3.63086 13.4566 3.63086 13.7213 3.73494C13.955 3.82685 14.1619 3.97596 14.323 4.1686C14.5054 4.38674 14.6037 4.6818 14.8004 5.27191L15.7534 8.13086L17.2534 7.38086M12.7534 10.3809H15.0034M5.85342 8.13086H13.6534C14.9135 8.13086 15.5436 8.13086 16.0249 8.37609C16.4483 8.59181 16.7925 8.93602 17.0082 9.35938C17.2534 9.84068 17.2534 10.4707 17.2534 11.7309V13.7559C17.2534 14.1044 17.2534 14.2786 17.2246 14.4235C17.1062 15.0185 16.6411 15.4837 16.0461 15.602C15.9012 15.6309 15.7269 15.6309 15.3784 15.6309H15.0034C14.175 15.6309 13.5034 14.9593 13.5034 14.1309C13.5034 13.9238 13.3355 13.7559 13.1284 13.7559H6.37842C6.17131 13.7559 6.00342 13.9238 6.00342 14.1309C6.00342 14.9593 5.33184 15.6309 4.50342 15.6309H4.12842C3.77993 15.6309 3.60568 15.6309 3.46078 15.602C2.86575 15.4837 2.4006 15.0185 2.28224 14.4235C2.25342 14.2786 2.25342 14.1044 2.25342 13.7559V11.7309C2.25342 10.4707 2.25342 9.84068 2.49865 9.35938C2.71437 8.93602 3.05857 8.59181 3.48194 8.37609C3.96324 8.13086 4.5933 8.13086 5.85342 8.13086Z"
        stroke={color}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BusIcon: React.FC<IconProps> = ({
  size = 18,
  color = 'black',
  fill = 'none',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill={fill}>
      <path
        d="M7.12842 14.8809V16.5309C7.12842 16.7409 7.12842 16.8459 7.08755 16.9261C7.05159 16.9967 6.99423 17.054 6.92366 17.09C6.84345 17.1309 6.73844 17.1309 6.52842 17.1309H5.10342C4.8934 17.1309 4.78839 17.1309 4.70817 17.09C4.63761 17.054 4.58024 16.9967 4.54429 16.9261C4.50342 16.8459 4.50342 16.7409 4.50342 16.5309V14.8809M15.0034 14.8809V16.5309C15.0034 16.7409 15.0034 16.8459 14.9625 16.9261C14.9266 16.9967 14.8692 17.054 14.7987 17.09C14.7184 17.1309 14.6134 17.1309 14.4034 17.1309H12.9784C12.7684 17.1309 12.6634 17.1309 12.5832 17.09C12.5126 17.054 12.4552 16.9967 12.4193 16.9261C12.3784 16.8459 12.3784 16.7409 12.3784 16.5309V14.8809M3.00342 9.63086H16.5034M3.00342 4.75586H16.5034M5.62842 12.2559H6.75342M12.7534 12.2559H13.8784M6.60342 14.8809H12.9034C14.1635 14.8809 14.7936 14.8809 15.2749 14.6356C15.6983 14.4199 16.0425 14.0757 16.2582 13.6523C16.5034 13.171 16.5034 12.541 16.5034 11.2809V5.73086C16.5034 4.47074 16.5034 3.84068 16.2582 3.35938C16.0425 2.93602 15.6983 2.59181 15.2749 2.37609C14.7936 2.13086 14.1635 2.13086 12.9034 2.13086H6.60342C5.3433 2.13086 4.71324 2.13086 4.23194 2.37609C3.80857 2.59181 3.46437 2.93602 3.24865 3.35938C3.00342 3.84068 3.00342 4.47074 3.00342 5.73086V11.2809C3.00342 12.541 3.00342 13.171 3.24865 13.6523C3.46437 14.0757 3.80857 14.4199 4.23194 14.6356C4.71324 14.8809 5.3433 14.8809 6.60342 14.8809Z"
        stroke={color}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
