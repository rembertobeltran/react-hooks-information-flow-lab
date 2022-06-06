import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
    return (
        <button onClick = {onDarkModeClick}>
            {isDarkMode ? 'Dark' : 'Light'} Mode
        </button>
    )
}

export default Header;