import { SVGProps } from "react";

const YellowPhoneSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="100" height="100" rx="50" fill="#F7CD47" />
      <g clipPath="url(#clip0_4038_5818)">
        <path
          d="M57 26H43C40.6147 26.0053 38.3286 26.9552 36.6419 28.6419C34.9552 30.3286 34.0053 32.6147 34 35V69C34 69.6566 34.1293 70.3068 34.3806 70.9134C34.6319 71.52 35.0002 72.0712 35.4645 72.5355C35.9288 72.9998 36.48 73.3681 37.0866 73.6194C37.6932 73.8707 38.3434 74 39 74H61C61.6566 74 62.3068 73.8707 62.9134 73.6194C63.52 73.3681 64.0712 72.9998 64.5355 72.5355C64.9998 72.0712 65.3681 71.52 65.6194 70.9134C65.8707 70.3068 66 69.6566 66 69V35C65.9947 32.6147 65.0448 30.3286 63.3581 28.6419C61.6714 26.9552 59.3853 26.0053 57 26ZM59 64C59.3956 64 59.7822 64.1173 60.1111 64.3371C60.44 64.5568 60.6964 64.8692 60.8478 65.2346C60.9991 65.6001 61.0387 66.0022 60.9616 66.3902C60.8844 66.7781 60.6939 67.1345 60.4142 67.4142C60.1345 67.6939 59.7781 67.8844 59.3902 67.9616C59.0022 68.0387 58.6001 67.9991 58.2346 67.8478C57.8692 67.6964 57.5568 67.44 57.3371 67.1111C57.1173 66.7822 57 66.3956 57 66C57 65.4696 57.2107 64.9609 57.5858 64.5858C57.9609 64.2107 58.4696 64 59 64ZM57 59C57 58.6044 57.1173 58.2178 57.3371 57.8889C57.5568 57.56 57.8692 57.3036 58.2346 57.1522C58.6001 57.0009 59.0022 56.9613 59.3902 57.0384C59.7781 57.1156 60.1345 57.3061 60.4142 57.5858C60.6939 57.8655 60.8844 58.2219 60.9616 58.6098C61.0387 58.9978 60.9991 59.3999 60.8478 59.7654C60.6964 60.1308 60.44 60.4432 60.1111 60.6629C59.7822 60.8827 59.3956 61 59 61C58.4696 61 57.9609 60.7893 57.5858 60.4142C57.2107 60.0391 57 59.5304 57 59ZM62 50C62 50.5304 61.7893 51.0391 61.4142 51.4142C61.0391 51.7893 60.5304 52 60 52H40C39.4696 52 38.9609 51.7893 38.5858 51.4142C38.2107 51.0391 38 50.5304 38 50V38C38 37.4696 38.2107 36.9609 38.5858 36.5858C38.9609 36.2107 39.4696 36 40 36H60C60.5304 36 61.0391 36.2107 61.4142 36.5858C61.7893 36.9609 62 37.4696 62 38V50ZM50 61C49.6044 61 49.2178 60.8827 48.8889 60.6629C48.56 60.4432 48.3036 60.1308 48.1522 59.7654C48.0009 59.3999 47.9613 58.9978 48.0384 58.6098C48.1156 58.2219 48.3061 57.8655 48.5858 57.5858C48.8655 57.3061 49.2219 57.1156 49.6098 57.0384C49.9978 56.9613 50.3999 57.0009 50.7654 57.1522C51.1308 57.3036 51.4432 57.56 51.6629 57.8889C51.8827 58.2178 52 58.6044 52 59C52 59.5304 51.7893 60.0391 51.4142 60.4142C51.0391 60.7893 50.5304 61 50 61ZM52 66C52 66.3956 51.8827 66.7822 51.6629 67.1111C51.4432 67.44 51.1308 67.6964 50.7654 67.8478C50.3999 67.9991 49.9978 68.0387 49.6098 67.9616C49.2219 67.8844 48.8655 67.6939 48.5858 67.4142C48.3061 67.1345 48.1156 66.7781 48.0384 66.3902C47.9613 66.0022 48.0009 65.6001 48.1522 65.2346C48.3036 64.8692 48.56 64.5568 48.8889 64.3371C49.2178 64.1173 49.6044 64 50 64C50.5304 64 51.0391 64.2107 51.4142 64.5858C51.7893 64.9609 52 65.4696 52 66ZM41 61C40.6044 61 40.2178 60.8827 39.8889 60.6629C39.56 60.4432 39.3036 60.1308 39.1522 59.7654C39.0009 59.3999 38.9613 58.9978 39.0384 58.6098C39.1156 58.2219 39.3061 57.8655 39.5858 57.5858C39.8655 57.3061 40.2219 57.1156 40.6098 57.0384C40.9978 56.9613 41.3999 57.0009 41.7654 57.1522C42.1308 57.3036 42.4432 57.56 42.6629 57.8889C42.8827 58.2178 43 58.6044 43 59C43 59.5304 42.7893 60.0391 42.4142 60.4142C42.0391 60.7893 41.5304 61 41 61ZM43 66C43 66.3956 42.8827 66.7822 42.6629 67.1111C42.4432 67.44 42.1308 67.6964 41.7654 67.8478C41.3999 67.9991 40.9978 68.0387 40.6098 67.9616C40.2219 67.8844 39.8655 67.6939 39.5858 67.4142C39.3061 67.1345 39.1156 66.7781 39.0384 66.3902C38.9613 66.0022 39.0009 65.6001 39.1522 65.2346C39.3036 64.8692 39.56 64.5568 39.8889 64.3371C40.2178 64.1173 40.6044 64 41 64C41.5304 64 42.0391 64.2107 42.4142 64.5858C42.7893 64.9609 43 65.4696 43 66Z"
          fill="#6B4403"
        />
      </g>
      <defs>
        <clipPath id="clip0_4038_5818">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(26 26)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default YellowPhoneSvg;