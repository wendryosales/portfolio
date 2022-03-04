import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <svg width="149" height="37" viewBox="0 0 149 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.73596" y="2.21912" width="145.764" height="32.3315" rx="16.1657" stroke="url(#paint0_linear_18_35)" strokeWidth="3"/>
          <g id="content" transform="translate(75, 25)">
            <text textAnchor="middle" id="header" fontFamily="Raleway, sans-serif" fill="rgba(255, 255, 255, 1)">
              <tspan x="0" y="0" fontWeight="500" fontSize="18px" line-height="21px">{ text }</tspan>
            </text>
          </g>
            <defs>
              <linearGradient id="paint0_linear_18_35" x1="71.3638" y1="-4.39465" x2="96.0028" y2="38.375" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FE53BB"/>
                <stop offset="1" stopColor="#09FBD3"/>
              </linearGradient>
            </defs>
        </svg>
      </div>
    );
  }
}

export default Button;
