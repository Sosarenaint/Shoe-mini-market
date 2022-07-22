import React from "react"

export const Footer = () => {
  return (
    <div
      className="
          border-t-2 border-gray-300
          flex
          md:flex-row
          flex-col
          md:justify-between
          text-center
          py-5
          text-sm
        "
    >
      <div className="mb-4">
        <a href="https://github.com/sosarenaint" className="mx-2.5">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/samson-sanyaolu/"
          className="mx-2.5"
        >
          Linked-In
        </a>
        <a href="https://www.facebook.com/praiseloading" className="mx-2.5">
          Facebook
        </a>
      </div>
      <a
        href="https://react.sosarena.com/"
        className="text-gray-600 hover:text-purple-600 inline-block"
      >
        &copy; Developer: Samson Sanyaolu | 2022
      </a>
    </div>
  )
}
