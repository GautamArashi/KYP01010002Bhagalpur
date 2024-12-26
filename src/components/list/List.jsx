import React from "react";

const List = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
<h2 
  className="
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
    font-bold mb-6 
    bg-gradient-to-r from-red-500 via-green-500 to-purple-500 
    bg-clip-text text-transparent 
    text-center
  "
>
  Computer Training & Skill Development
</h2>
      <h2 className="text-3xl font-bold mb-6">KYP01010002 </h2>

      <div className="flex space-x-6">
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/kyp01010002/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.5 1 .4.4.8.9 1 1.5.3.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-.9 1.5-.5.4-.9.8-1.5 1-.5.3-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.5-1-.4-.5-.8-.9-1-1.5-.3-.5-.4-1.3-.5-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1 .9-1.5.5-.4.9-.8 1.5-1 .5-.3 1.3-.4 2.5-.5 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 6.9.1c-1.4.1-2.4.3-3.3.6-.9.3-1.7.7-2.5 1.4-.8.8-1.2 1.6-1.5 2.5C-.1 6 .1 6.9 0 8.3-.1 8.7 0 9.1 0 12s0 3.3.1 4.7c.1 1.4.3 2.4.6 3.3.3.9.7 1.7 1.4 2.5.8.8 1.6 1.2 2.5 1.5.9.3 1.9.5 3.3.6 1.4.1 1.8.1 4.7.1s3.3 0 4.7-.1c1.4-.1 2.4-.3 3.3-.6.9-.3 1.7-.7 2.5-1.4.8-.8 1.2-1.6 1.5-2.5.3-.9.5-1.9.6-3.3.1-1.4.1-1.8.1-4.7s0-3.3-.1-4.7c-.1-1.4-.3-2.4-.6-3.3-.3-.9-.7-1.7-1.4-2.5-.8-.8-1.6-1.2-2.5-1.5C17.1.3 16.1.1 14.7.1 13.3 0 12.7 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.7a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0z" />
          </svg>
        </a>
        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com/profile.php?id=61569967837738&rdid=K3nxg2YXZi4j7QNm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FJdmpC2U24AetwZjC%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82V14.708H9.692v-3.574h3.128V8.419c0-3.1 1.892-4.788 4.657-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.574h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
          </svg>
        </a>
        {/* YouTube Icon */}
        <a
          href="https://www.youtube.com/@KypUrduBazar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-700 transition transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.499 6.203a2.932 2.932 0 0 0-2.056-2.075C19.898 4 12 4 12 4s-7.899 0-9.444.128A2.932 2.932 0 0 0 .5 6.203 30.372 30.372 0 0 0 0 12c0 1.963.128 3.839.5 5.797a2.932 2.932 0 0 0 2.056 2.075C4.101 20 12 20 12 20s7.898 0 9.443-.128a2.932 2.932 0 0 0 2.056-2.075A30.372 30.372 0 0 0 24 12a30.372 30.372 0 0 0-.501-5.797zM9.75 15.205V8.794l6.151 3.205-6.151 3.206z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default List;
