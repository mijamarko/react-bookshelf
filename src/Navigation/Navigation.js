import React from "react"
import NavigationItem from "./NavigationItem"
import { ReactComponent as BookIcon } from "../icons/auto_stories_black_24dp.svg"
import { ReactComponent as AccountIcon } from "../icons/account_circle_black_24dp.svg"

const Navigation = ({ loggedIn, isOpen, setIsOpen }) => {

  return (
    <nav className="navigation">
      <ul className="navigation-items">
        <NavigationItem
          data={<BookIcon />}
          classes={["navigation-item", "navigation-item-icon"]}
        />
        <NavigationItem
          data={"Ćazim's Book Emporium"}
          classes={["navigation-item"]}
        />
        {loggedIn ? (
          <>
            <NavigationItem
              data={"Hello, Reader"}
              classes={["navigation-item", "navigation-item-right"]}
            />
            <NavigationItem
              data={<AccountIcon />}
              classes={["navigation-item", "navigation-item-icon"]}
              isOpen={isOpen}
              setIsOpen={setIsOpen} />
          </>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  )
}

export default Navigation
