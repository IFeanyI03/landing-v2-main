import { cn } from "@/lib/utils";
import AppTextBody from "@/widgets/app/text-body";
import Image from "next/image";
import Link from "next/link";

const methods = [
  {
    icon: (
      <svg
        width="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="100"
          height="100"
          rx="50"
          fill="url(#paint0_linear_3713_14166)"
        />
        <g clipPath="url(#clip0_3713_14166)">
          <path
            d="M40 50C40.5304 50 41.0391 49.7893 41.4142 49.4142C41.7893 49.0391 42 48.5304 42 48C42 47.4696 41.7893 46.9609 41.4142 46.5858C41.0391 46.2107 40.5304 46 40 46H32C31.4696 46 30.9609 46.2107 30.5858 46.5858C30.2107 46.9609 30 47.4696 30 48C30 48.5304 30.2107 49.0391 30.5858 49.4142C30.9609 49.7893 31.4696 50 32 50H32.5C32.6326 50 32.7598 50.0527 32.8536 50.1464C32.9473 50.2402 33 50.3674 33 50.5V58.5C33 58.6326 32.9473 58.7598 32.8536 58.8536C32.7598 58.9473 32.6326 59 32.5 59H32C31.4696 59 30.9609 59.2107 30.5858 59.5858C30.2107 59.9609 30 60.4696 30 61C30 61.5304 30.2107 62.0391 30.5858 62.4142C30.9609 62.7893 31.4696 63 32 63H40C40.5304 63 41.0391 62.7893 41.4142 62.4142C41.7893 62.0391 42 61.5304 42 61C42 60.4696 41.7893 59.9609 41.4142 59.5858C41.0391 59.2107 40.5304 59 40 59H39.5C39.3674 59 39.2402 58.9473 39.1464 58.8536C39.0527 58.7598 39 58.6326 39 58.5V50.5C39 50.3674 39.0527 50.2402 39.1464 50.1464C39.2402 50.0527 39.3674 50 39.5 50H40Z"
            fill="url(#paint1_linear_3713_14166)"
          />
          <path
            d="M54 50C54.5304 50 55.0391 49.7893 55.4142 49.4142C55.7893 49.0391 56 48.5304 56 48C56 47.4696 55.7893 46.9609 55.4142 46.5858C55.0391 46.2107 54.5304 46 54 46H46C45.4696 46 44.9609 46.2107 44.5858 46.5858C44.2107 46.9609 44 47.4696 44 48C44 48.5304 44.2107 49.0391 44.5858 49.4142C44.9609 49.7893 45.4696 50 46 50H46.5C46.6326 50 46.7598 50.0527 46.8536 50.1464C46.9473 50.2402 47 50.3674 47 50.5V58.5C47 58.6326 46.9473 58.7598 46.8536 58.8536C46.7598 58.9473 46.6326 59 46.5 59H46C45.4696 59 44.9609 59.2107 44.5858 59.5858C44.2107 59.9609 44 60.4696 44 61C44 61.5304 44.2107 62.0391 44.5858 62.4142C44.9609 62.7893 45.4696 63 46 63H54C54.5304 63 55.0391 62.7893 55.4142 62.4142C55.7893 62.0391 56 61.5304 56 61C56 60.4696 55.7893 59.9609 55.4142 59.5858C55.0391 59.2107 54.5304 59 54 59H53.5C53.3674 59 53.2402 58.9473 53.1464 58.8536C53.0527 58.7598 53 58.6326 53 58.5V50.5C53 50.3674 53.0527 50.2402 53.1464 50.1464C53.2402 50.0527 53.3674 50 53.5 50H54Z"
            fill="url(#paint2_linear_3713_14166)"
          />
          <path
            d="M69 50C69.5304 50 70.0391 49.7893 70.4142 49.4142C70.7893 49.0391 71 48.5304 71 48C71 47.4696 70.7893 46.9609 70.4142 46.5858C70.0391 46.2107 69.5304 46 69 46H61C60.4696 46 59.9609 46.2107 59.5858 46.5858C59.2107 46.9609 59 47.4696 59 48C59 48.5304 59.2107 49.0391 59.5858 49.4142C59.9609 49.7893 60.4696 50 61 50H61.5C61.6326 50 61.7598 50.0527 61.8536 50.1464C61.9473 50.2402 62 50.3674 62 50.5V58.5C62 58.6326 61.9473 58.7598 61.8536 58.8536C61.7598 58.9473 61.6326 59 61.5 59H61C60.4696 59 59.9609 59.2107 59.5858 59.5858C59.2107 59.9609 59 60.4696 59 61C59 61.5304 59.2107 62.0391 59.5858 62.4142C59.9609 62.7893 60.4696 63 61 63H69C69.5304 63 70.0391 62.7893 70.4142 62.4142C70.7893 62.0391 71 61.5304 71 61C71 60.4696 70.7893 59.9609 70.4142 59.5858C70.0391 59.2107 69.5304 59 69 59H68.5C68.3674 59 68.2402 58.9473 68.1464 58.8536C68.0527 58.7598 68 58.6326 68 58.5V50.5C68 50.3674 68.0527 50.2402 68.1464 50.1464C68.2402 50.0527 68.3674 50 68.5 50H69Z"
            fill="url(#paint3_linear_3713_14166)"
          />
          <path
            d="M30.8992 43.0003H69.2992C69.6885 43.009 70.0718 42.9039 70.4023 42.6978C70.7327 42.4918 70.9957 42.1937 71.1592 41.8403C71.3186 41.4668 71.3439 41.0497 71.2309 40.6597C71.1179 40.2697 70.8735 39.9307 70.5392 39.7003L52.2792 26.4003C51.9229 26.1561 51.5011 26.0254 51.0692 26.0254C50.6373 26.0254 50.2154 26.1561 49.8592 26.4003L29.7392 39.6603C29.3878 39.8762 29.1246 40.2099 28.9964 40.6018C28.8682 40.9938 28.8833 41.4185 29.0392 41.8003C29.1966 42.1612 29.4572 42.4676 29.788 42.6811C30.1189 42.8946 30.5054 43.0056 30.8992 43.0003Z"
            fill="url(#paint4_linear_3713_14166)"
          />
          <path
            d="M73.8398 72.44L69.8398 66.44C69.7459 66.3041 69.6204 66.1931 69.4741 66.1165C69.3278 66.0398 69.165 65.9998 68.9998 66H30.9998C30.8347 65.9998 30.6719 66.0398 30.5256 66.1165C30.3793 66.1931 30.2538 66.3041 30.1598 66.44L26.1598 72.44C26.0576 72.5912 25.9987 72.7675 25.9895 72.9498C25.9804 73.1321 26.0213 73.3135 26.1078 73.4742C26.1943 73.6349 26.3232 73.7688 26.4805 73.8615C26.6377 73.9542 26.8173 74.0021 26.9998 74H72.9998C73.1824 74.0021 73.362 73.9542 73.5192 73.8615C73.6764 73.7688 73.8053 73.6349 73.8919 73.4742C73.9784 73.3135 74.0193 73.1321 74.0101 72.9498C74.0009 72.7675 73.9421 72.5912 73.8398 72.44Z"
            fill="url(#paint5_linear_3713_14166)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_3713_14166"
            x1="41.5278"
            y1="3.15129e-07"
            x2="92.5727"
            y2="78.5977"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7049F7" />
            <stop offset="0.505" stopColor="#7049F7" />
            <stop offset="1" stopColor="#551D9B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3713_14166"
            x1="34.0458"
            y1="42.1351"
            x2="39.2149"
            y2="62.4811"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6E9F0" />
            <stop offset="1" stopColor="#F4F8F9" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_3713_14166"
            x1="48.0458"
            y1="42.1351"
            x2="53.2149"
            y2="62.4811"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6E9F0" />
            <stop offset="1" stopColor="#F4F8F9" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_3713_14166"
            x1="63.0458"
            y1="42.1351"
            x2="68.2149"
            y2="62.4811"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6E9F0" />
            <stop offset="1" stopColor="#F4F8F9" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_3713_14166"
            x1="43.2019"
            y1="22.1661"
            x2="44.7472"
            y2="43.6831"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6E9F0" />
            <stop offset="1" stopColor="#F4F8F9" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_3713_14166"
            x1="42.1792"
            y1="64.1812"
            x2="42.4834"
            y2="74.3648"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6E9F0" />
            <stop offset="1" stopColor="#F4F8F9" />
          </linearGradient>
          <clipPath id="clip0_3713_14166">
            <rect
              width="48"
              height="48"
              fill="white"
              transform="translate(26 26)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "BANK TRANSFER",
    desc: "Securely transfer money to your Platnova account.",
  },
  {
    icon: (
      <svg
        width="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" rx="50" fill="#00C7BE" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.8545 29.118L49.9974 28.6895L49.1403 29.118L29.9736 38.7014L28.9141 39.2311V46.1657H32.7474V65.3322H28.9141V71.0822H71.0807V65.3322H67.2474V46.1657H71.0807V39.2311L70.0212 38.7014L50.8545 29.118ZM59.5807 46.1657H53.8307V65.3322H59.5807V46.1657ZM46.1641 46.1657V65.3322H40.4141V46.1657H46.1641Z"
          fill="url(#paint0_linear_3713_14184)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3713_14184"
            x1="43.1305"
            y1="19.0516"
            x2="52.562"
            y2="71.3627"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6E9F0" />
            <stop offset="1" stopColor="#F4F8F9" />
          </linearGradient>
        </defs>
      </svg>
    ),
    name: "VIRTUAL BANK",
    desc: "Add money with a single-use virtual bank account.",
  },
  {
    icon: (
      <svg
        width="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" rx="50" fill="#F7CD47" />
        <g clipPath="url(#clip0_3713_14198)">
          <path
            d="M57 26H43C40.6147 26.0053 38.3286 26.9552 36.6419 28.6419C34.9552 30.3286 34.0053 32.6147 34 35V69C34 69.6566 34.1293 70.3068 34.3806 70.9134C34.6319 71.52 35.0002 72.0712 35.4645 72.5355C35.9288 72.9998 36.48 73.3681 37.0866 73.6194C37.6932 73.8707 38.3434 74 39 74H61C61.6566 74 62.3068 73.8707 62.9134 73.6194C63.52 73.3681 64.0712 72.9998 64.5355 72.5355C64.9998 72.0712 65.3681 71.52 65.6194 70.9134C65.8707 70.3068 66 69.6566 66 69V35C65.9947 32.6147 65.0448 30.3286 63.3581 28.6419C61.6714 26.9552 59.3853 26.0053 57 26ZM59 64C59.3956 64 59.7822 64.1173 60.1111 64.3371C60.44 64.5568 60.6964 64.8692 60.8478 65.2346C60.9991 65.6001 61.0387 66.0022 60.9616 66.3902C60.8844 66.7781 60.6939 67.1345 60.4142 67.4142C60.1345 67.6939 59.7781 67.8844 59.3902 67.9616C59.0022 68.0387 58.6001 67.9991 58.2346 67.8478C57.8692 67.6964 57.5568 67.44 57.3371 67.1111C57.1173 66.7822 57 66.3956 57 66C57 65.4696 57.2107 64.9609 57.5858 64.5858C57.9609 64.2107 58.4696 64 59 64ZM57 59C57 58.6044 57.1173 58.2178 57.3371 57.8889C57.5568 57.56 57.8692 57.3036 58.2346 57.1522C58.6001 57.0009 59.0022 56.9613 59.3902 57.0384C59.7781 57.1156 60.1345 57.3061 60.4142 57.5858C60.6939 57.8655 60.8844 58.2219 60.9616 58.6098C61.0387 58.9978 60.9991 59.3999 60.8478 59.7654C60.6964 60.1308 60.44 60.4432 60.1111 60.6629C59.7822 60.8827 59.3956 61 59 61C58.4696 61 57.9609 60.7893 57.5858 60.4142C57.2107 60.0391 57 59.5304 57 59ZM62 50C62 50.5304 61.7893 51.0391 61.4142 51.4142C61.0391 51.7893 60.5304 52 60 52H40C39.4696 52 38.9609 51.7893 38.5858 51.4142C38.2107 51.0391 38 50.5304 38 50V38C38 37.4696 38.2107 36.9609 38.5858 36.5858C38.9609 36.2107 39.4696 36 40 36H60C60.5304 36 61.0391 36.2107 61.4142 36.5858C61.7893 36.9609 62 37.4696 62 38V50ZM50 61C49.6044 61 49.2178 60.8827 48.8889 60.6629C48.56 60.4432 48.3036 60.1308 48.1522 59.7654C48.0009 59.3999 47.9613 58.9978 48.0384 58.6098C48.1156 58.2219 48.3061 57.8655 48.5858 57.5858C48.8655 57.3061 49.2219 57.1156 49.6098 57.0384C49.9978 56.9613 50.3999 57.0009 50.7654 57.1522C51.1308 57.3036 51.4432 57.56 51.6629 57.8889C51.8827 58.2178 52 58.6044 52 59C52 59.5304 51.7893 60.0391 51.4142 60.4142C51.0391 60.7893 50.5304 61 50 61ZM52 66C52 66.3956 51.8827 66.7822 51.6629 67.1111C51.4432 67.44 51.1308 67.6964 50.7654 67.8478C50.3999 67.9991 49.9978 68.0387 49.6098 67.9616C49.2219 67.8844 48.8655 67.6939 48.5858 67.4142C48.3061 67.1345 48.1156 66.7781 48.0384 66.3902C47.9613 66.0022 48.0009 65.6001 48.1522 65.2346C48.3036 64.8692 48.56 64.5568 48.8889 64.3371C49.2178 64.1173 49.6044 64 50 64C50.5304 64 51.0391 64.2107 51.4142 64.5858C51.7893 64.9609 52 65.4696 52 66ZM41 61C40.6044 61 40.2178 60.8827 39.8889 60.6629C39.56 60.4432 39.3036 60.1308 39.1522 59.7654C39.0009 59.3999 38.9613 58.9978 39.0384 58.6098C39.1156 58.2219 39.3061 57.8655 39.5858 57.5858C39.8655 57.3061 40.2219 57.1156 40.6098 57.0384C40.9978 56.9613 41.3999 57.0009 41.7654 57.1522C42.1308 57.3036 42.4432 57.56 42.6629 57.8889C42.8827 58.2178 43 58.6044 43 59C43 59.5304 42.7893 60.0391 42.4142 60.4142C42.0391 60.7893 41.5304 61 41 61ZM43 66C43 66.3956 42.8827 66.7822 42.6629 67.1111C42.4432 67.44 42.1308 67.6964 41.7654 67.8478C41.3999 67.9991 40.9978 68.0387 40.6098 67.9616C40.2219 67.8844 39.8655 67.6939 39.5858 67.4142C39.3061 67.1345 39.1156 66.7781 39.0384 66.3902C38.9613 66.0022 39.0009 65.6001 39.1522 65.2346C39.3036 64.8692 39.56 64.5568 39.8889 64.3371C40.2178 64.1173 40.6044 64 41 64C41.5304 64 42.0391 64.2107 42.4142 64.5858C42.7893 64.9609 43 65.4696 43 66Z"
            fill="#6B4403"
          />
        </g>
        <defs>
          <clipPath id="clip0_3713_14198">
            <rect
              width="48"
              height="48"
              fill="white"
              transform="translate(26 26)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "USSD",
    desc: "Add money through your mobile USSD.",
  },
  {
    icon: (
      <svg
        width="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" rx="50" fill="#FF5F00" />
        <g clipPath="url(#clip0_3713_14211)">
          <path
            d="M44.7701 40.934C44.8613 41.057 44.9797 41.1573 45.116 41.2271C45.2523 41.2969 45.4028 41.3343 45.5559 41.3365H54.4492C54.5999 41.3359 54.7483 41.299 54.8817 41.2289C55.0152 41.1589 55.1298 41.0577 55.2159 40.934L58.0909 36.8899C58.3813 36.3045 58.4785 35.642 58.3682 34.9979C58.258 34.3537 57.9461 33.7612 57.4776 33.3057C57.0035 32.8412 56.3883 32.5476 55.7289 32.4713C55.0696 32.395 54.4036 32.5402 53.8359 32.884C53.6948 32.9625 53.5317 32.992 53.3721 32.9677C53.2125 32.9434 53.0655 32.8668 52.9542 32.7499L52.5326 32.1557C52.2289 31.7796 51.845 31.4762 51.4089 31.2678C50.9728 31.0594 50.4955 30.9512 50.0121 30.9512C49.5288 30.9512 49.0515 31.0594 48.6154 31.2678C48.1793 31.4762 47.7953 31.7796 47.4917 32.1557L47.0509 32.7499C46.9468 32.8932 46.794 32.9937 46.6211 33.0325C46.4482 33.0714 46.2671 33.0458 46.1117 32.9607C45.5538 32.6293 44.9022 32.4911 44.2578 32.5673C43.6133 32.6435 43.012 32.93 42.5467 33.3824C42.0661 33.8601 41.7538 34.4812 41.657 35.1519C41.5602 35.8226 41.6841 36.5066 42.0101 37.1007L44.7701 40.934Z"
            fill="url(#paint0_linear_3713_14211)"
          />
          <path
            d="M55.5795 43.484C55.4034 43.3333 55.1787 43.2516 54.947 43.254H45.057C44.8253 43.2516 44.6006 43.3333 44.4245 43.484C41.3195 46.1673 36.7578 51.1506 36.7578 57.3415C36.7578 64.069 42.5078 69.129 50.0211 69.129C57.5345 69.129 63.2845 64.069 63.2845 57.3415C63.2653 51.1506 58.6845 46.1673 55.5795 43.484ZM47.6061 54.754C47.6061 54.881 47.6566 55.0029 47.7465 55.0928C47.8364 55.1826 47.9582 55.2331 48.0853 55.2331H51.9186C52.8082 55.2331 53.6614 55.5865 54.2904 56.2155C54.9194 56.8446 55.2728 57.6977 55.2728 58.5873C55.2728 59.4769 54.9194 60.33 54.2904 60.959C53.6614 61.5881 52.8082 61.9415 51.9186 61.9415C51.7916 61.9415 51.6697 61.9919 51.5798 62.0818C51.49 62.1717 51.4395 62.2935 51.4395 62.4206C51.4395 62.8019 51.288 63.1675 51.0184 63.4371C50.7489 63.7067 50.3832 63.8581 50.002 63.8581C49.6207 63.8581 49.2551 63.7067 48.9855 63.4371C48.7159 63.1675 48.5645 62.8019 48.5645 62.4206C48.5645 62.2935 48.514 62.1717 48.4241 62.0818C48.3343 61.9919 48.2124 61.9415 48.0853 61.9415H46.1686C45.7874 61.9415 45.4218 61.79 45.1522 61.5204C44.8826 61.2508 44.7311 60.8852 44.7311 60.504C44.7311 60.1227 44.8826 59.7571 45.1522 59.4875C45.4218 59.2179 45.7874 59.0665 46.1686 59.0665H51.9186C52.0457 59.0665 52.1676 59.016 52.2575 58.9261C52.3473 58.8362 52.3978 58.7144 52.3978 58.5873C52.3978 58.4602 52.3473 58.3383 52.2575 58.2485C52.1676 58.1586 52.0457 58.1081 51.9186 58.1081H48.0853C47.1957 58.1081 46.3426 57.7547 45.7136 57.1257C45.0845 56.4967 44.7311 55.6435 44.7311 54.754C44.7311 53.8644 45.0845 53.0112 45.7136 52.3822C46.3426 51.7532 47.1957 51.3998 48.0853 51.3998C48.2124 51.3998 48.3343 51.3493 48.4241 51.2594C48.514 51.1696 48.5645 51.0477 48.5645 50.9206C48.5645 50.5394 48.7159 50.1737 48.9855 49.9042C49.2551 49.6346 49.6207 49.4831 50.002 49.4831C50.3832 49.4831 50.7489 49.6346 51.0184 49.9042C51.288 50.1737 51.4395 50.5394 51.4395 50.9206C51.4395 51.0477 51.49 51.1696 51.5798 51.2594C51.6697 51.3493 51.7916 51.3998 51.9186 51.3998H53.8353C54.2166 51.3998 54.5822 51.5512 54.8518 51.8208C55.1214 52.0904 55.2728 52.456 55.2728 52.8373C55.2728 53.2185 55.1214 53.5842 54.8518 53.8538C54.5822 54.1233 54.2166 54.2748 53.8353 54.2748H48.0853C47.9582 54.2748 47.8364 54.3253 47.7465 54.4151C47.6566 54.505 47.6061 54.6269 47.6061 54.754Z"
            fill="url(#paint1_linear_3713_14211)"
          />
          <path
            d="M68.3407 47.3351C68.1665 47.179 67.942 47.0906 67.7082 47.0859H63.2999C63.1279 47.0875 62.9593 47.1343 62.8113 47.2218C62.6632 47.3093 62.5408 47.4344 62.4565 47.5843C62.3724 47.73 62.3281 47.8952 62.3281 48.0634C62.3281 48.2317 62.3724 48.3969 62.4565 48.5426C64.1657 51.1631 65.1023 54.212 65.159 57.3401C65.1817 60.0034 64.3781 62.6082 62.859 64.7959C62.7797 64.9293 62.7379 65.0816 62.7379 65.2368C62.7379 65.3919 62.7797 65.5442 62.859 65.6776C62.9207 65.8208 63.0185 65.9455 63.1428 66.0396C63.2671 66.1336 63.4136 66.1938 63.5682 66.2143H64.4499C65.534 66.2183 66.6084 66.01 67.6124 65.6009C69.1991 64.9663 70.5598 63.8716 71.5195 62.4576C72.4793 61.0436 72.9942 59.3749 72.9982 57.6659C72.9759 55.7159 72.5507 53.7916 71.7492 52.0137C70.9477 50.2359 69.7872 48.643 68.3407 47.3351Z"
            fill="url(#paint2_linear_3713_14211)"
          />
          <path
            d="M61.4994 44.7093C61.5777 44.8489 61.6918 44.965 61.8299 45.0459C61.968 45.1267 62.1252 45.1693 62.2852 45.1693H66.4636C66.6236 45.1693 66.7808 45.1267 66.9189 45.0459C67.057 44.965 67.1711 44.8489 67.2494 44.7093L68.5336 42.4476C68.7519 42.064 68.8553 41.6257 68.8314 41.1849C68.8074 40.7442 68.6571 40.3197 68.3985 39.962C68.1398 39.6043 67.7837 39.3286 67.3727 39.1678C66.9616 39.007 66.5129 38.9679 66.0802 39.0551C64.9546 39.2849 63.7942 39.2849 62.6686 39.0551C62.2359 38.9679 61.7872 39.007 61.3762 39.1678C60.9651 39.3286 60.609 39.6043 60.3503 39.962C60.0917 40.3197 59.9414 40.7442 59.9175 41.1849C59.8935 41.6257 59.9969 42.064 60.2152 42.4476L61.4994 44.7093Z"
            fill="url(#paint3_linear_3713_14211)"
          />
          <path
            d="M32.7494 44.6901C32.8375 44.8352 32.9613 44.9554 33.1089 45.0392C33.2564 45.1231 33.423 45.1678 33.5927 45.1693H37.6752C37.8417 45.1646 38.0044 45.1183 38.1483 45.0346C38.2923 44.9509 38.413 44.8325 38.4994 44.6901L39.7644 42.4476C39.9808 42.0656 40.0834 41.6295 40.0599 41.191C40.0364 40.7525 39.8879 40.3299 39.6319 39.9732C39.3759 39.6164 39.0231 39.3404 38.6153 39.1777C38.2074 39.015 37.7615 38.9725 37.3302 39.0551C36.2046 39.2849 35.0442 39.2849 33.9186 39.0551C33.4859 38.9679 33.0372 39.007 32.6262 39.1678C32.2151 39.3286 31.859 39.6043 31.6003 39.962C31.3417 40.3197 31.1914 40.7442 31.1675 41.1849C31.1435 41.6257 31.2469 42.064 31.4652 42.4476L32.7494 44.6901Z"
            fill="url(#paint4_linear_3713_14211)"
          />
          <path
            d="M37.5226 48.5426C37.6127 48.399 37.6606 48.233 37.6606 48.0634C37.6606 47.8939 37.6127 47.7278 37.5226 47.5843C37.443 47.4345 37.3243 47.3092 37.1792 47.2214C37.0341 47.1337 36.868 47.0869 36.6984 47.0859H32.3092C32.0599 47.0883 31.8206 47.1841 31.6384 47.3543C30.195 48.6595 29.0376 50.2496 28.2393 52.0243C27.441 53.7991 27.0191 55.72 27.0001 57.6659C26.9932 59.3946 27.5094 61.0849 28.4809 62.5148C29.4524 63.9447 30.8337 65.0472 32.4434 65.6776C33.4474 66.0866 34.5218 66.295 35.6059 66.2909C35.9059 66.31 36.2068 66.31 36.5067 66.2909C36.6604 66.2761 36.8073 66.2202 36.9321 66.1292C37.0568 66.0381 37.1548 65.9153 37.2159 65.7734C37.2915 65.6388 37.3311 65.487 37.3311 65.3326C37.3311 65.1782 37.2915 65.0264 37.2159 64.8918C35.69 62.7063 34.8797 60.1013 34.8967 57.4359C34.9219 54.2841 35.8317 51.2026 37.5226 48.5426Z"
            fill="url(#paint5_linear_3713_14211)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_3713_14211"
            x1="47.2849"
            y1="28.5901"
            x2="48.735"
            y2="41.661"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6E9F0" />
            <stop offset="1" stopColor="#F4F8F9" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3713_14211"
            x1="45.7012"
            y1="37.3713"
            x2="51.2969"
            y2="69.3592"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6E9F0" />
            <stop offset="1" stopColor="#F4F8F9" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_3713_14211"
            x1="65.9255"
            y1="42.7372"
            x2="73.0267"
            y2="64.8251"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6E9F0" />
            <stop offset="1" stopColor="#F4F8F9" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_3713_14211"
            x1="62.9217"
            y1="37.6094"
            x2="63.8787"
            y2="45.3386"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6E9F0" />
            <stop offset="1" stopColor="#F4F8F9" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_3713_14211"
            x1="34.1644"
            y1="37.6094"
            x2="35.1237"
            y2="45.338"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6E9F0" />
            <stop offset="1" stopColor="#F4F8F9" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_3713_14211"
            x1="30.5942"
            y1="42.7165"
            x2="37.7618"
            y2="64.8859"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6E9F0" />
            <stop offset="1" stopColor="#F4F8F9" />
          </linearGradient>
          <clipPath id="clip0_3713_14211">
            <rect
              width="46"
              height="46"
              fill="white"
              transform="translate(27 27)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "OTC (BILLERPAY)",
    desc: "Add large amounts securely and seamlessly.",
  },
];

const services = [
  { name: "mpesa" },
  { name: "revolut" },
  { name: "mobile money", slug: "mobile-money" },
  { name: "sepa" },
  { name: "cashapp" },
  { name: "zelle" },
];

export const MethodCard: React.FC<{
  icon: React.ReactNode;
  name: string;
  desc: string;
  className?: string;
}> = ({ icon, name, desc, className }) => {
  return (
    <div
      className={cn([
        "bg-white rounded-[40px] px-7 xl:h-[350px] gap-10 flex flex-col justify-between pb-9 pt-14",
        className,
      ])}
    >
      <div className="w-20 xl:w-24">{icon}</div>

      <div>
        <p className="uppercase font-medium">{name}</p>
        <p className="opacity-70 text-sm font-medium">{desc}</p>
        <Link href={"/download"} className="flex items-center gap-2 mt-3">
          <>
            <p className="opacity-70 text-xs font-medium">Try now</p>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.66656 9.16737L2.66656 7.83404L10.6666 7.83404L6.9999 4.16737L7.94656 3.2207L13.2266 8.5007L7.94656 13.7807L6.9999 12.834L10.6666 9.16737L2.66656 9.16737Z"
                fill="#1E1E1E"
              />
            </svg>
          </>
        </Link>
      </div>
    </div>
  );
};

const ITMethodsSection = () => {
  return (
    <section className="bg-white_f9">
      <div className="content-container py-16 md:py-32">
        <div>
          <AppTextBody
            title={
              <>
                so many ways to send <br className="hidden xl:block" /> money
                abroad
              </>
            }
            description={""}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {methods.map((method) => (
            <div key={method.name}>
              <MethodCard {...method} />
            </div>
          ))}
        </div>

        <div className="mt-10 h-[124px] rounded-[40px] bg-white_f0 flex items-center gap-20 xl:gap-32 pl-10 overflow-auto scrollbar-hide">
          {services.map(({ name, slug }) => (
            <div key={slug || name} className="flex items-center gap-5">
              <div className="flex">
                <div className="h-6 w-6 relative rounded-full">
                  <Image src={`/${slug || name}.png`} alt={name} fill />
                </div>
              </div>
              <div>
                <p className="uppercase whitespace-nowrap">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITMethodsSection;