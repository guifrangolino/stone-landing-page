type SmartphoneProps = {
  fullWidth?: boolean;
};

export function Smartphone({ fullWidth }: SmartphoneProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current ${fullWidth ? "h-full w-full" : null}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.74976 28.375H15.9998V30.375H2.74976V28.375Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.74976 6.5H29.7498V8.5H2.74976V6.5Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.24976 2.25C5.42704 2.25 4.74976 2.92728 4.74976 3.75V36.25C4.74976 37.0727 5.42704 37.75 6.24976 37.75H26.2498C27.0725 37.75 27.7498 37.0727 27.7498 36.25V27.125H29.7498V36.25C29.7498 38.1773 28.177 39.75 26.2498 39.75H6.24976C4.32247 39.75 2.74976 38.1773 2.74976 36.25V3.75C2.74976 1.82272 4.32247 0.25 6.24976 0.25H26.2498C28.177 0.25 29.7498 1.82272 29.7498 3.75V16.625H27.7498V3.75C27.7498 2.92728 27.0725 2.25 26.2498 2.25H6.24976Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.1873 27.875C21.5314 27.875 20.9998 28.4067 20.9998 29.0625C20.9998 29.7183 21.5314 30.25 22.1873 30.25C22.8431 30.25 23.3748 29.7183 23.3748 29.0625C23.3748 28.4067 22.8431 27.875 22.1873 27.875ZM18.9998 29.0625C18.9998 27.3021 20.4268 25.875 22.1873 25.875C23.9477 25.875 25.3748 27.3021 25.3748 29.0625C25.3748 30.8229 23.9477 32.25 22.1873 32.25C20.4268 32.25 18.9998 30.8229 18.9998 29.0625Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.3123 27.875C34.6564 27.875 34.1248 28.4067 34.1248 29.0625C34.1248 29.7183 34.6564 30.25 35.3123 30.25C35.9681 30.25 36.4998 29.7183 36.4998 29.0625C36.4998 28.4067 35.9681 27.875 35.3123 27.875ZM32.1248 29.0625C32.1248 27.3021 33.5518 25.875 35.3123 25.875C37.0727 25.875 38.4998 27.3021 38.4998 29.0625C38.4998 30.8229 37.0727 32.25 35.3123 32.25C33.5518 32.25 32.1248 30.8229 32.1248 29.0625Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8748 11.5H21.4637L22.0152 14.625H36.8052L35.2219 24.125H21.6608L19.7858 13.5H16.8748V11.5ZM22.3681 16.625L23.3387 22.125H33.5276L34.4443 16.625H22.3681Z"
      ></path>
    </svg>
  );
}
