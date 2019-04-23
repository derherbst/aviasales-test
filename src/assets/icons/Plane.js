import React from "react";

const SvgPlane = props => (
  <svg width={82} height={90} fill="none" {...props}>
    <g filter="url(#plane_svg__filter0_d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.375 70.14c12.22 0 22.125-9.905 22.125-22.124 0-12.22-9.906-22.125-22.125-22.125-12.22 0-22.125 9.906-22.125 22.125 0 12.22 9.906 22.125 22.125 22.125z"
        fill="#000"
        fillOpacity={0.01}
      />
    </g>
    <g filter="url(#plane_svg__filter1_d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41 70.14c16.569 0 30-13.43 30-30 0-16.568-13.431-30-30-30-16.569 0-30 13.432-30 30 0 16.57 13.431 30 30 30z"
        fill="#2196F3"
      />
      <path
        d="M69.125 40.14c0 15.534-12.592 28.126-28.125 28.126S12.875 55.674 12.875 40.14 25.467 12.016 41 12.016 69.125 24.608 69.125 40.14z"
        stroke="#42A5F5"
        strokeWidth={3.75}
      />
    </g>
    <mask
      id="plane_svg__a"
      maskUnits="userSpaceOnUse"
      x={11}
      y={10}
      width={60}
      height={61}
    >
      <path
        d="M69.125 40.14c0 15.534-12.592 28.126-28.125 28.126S12.875 55.674 12.875 40.14 25.467 12.016 41 12.016 69.125 24.608 69.125 40.14z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={3.75}
      />
    </mask>
    <g mask="url(#plane_svg__a)" stroke="#42A5F5" strokeWidth={3.75}>
      <path
        d="M13.714 33.016h53.822M13.714 48.766h53.822"
        strokeLinecap="square"
      />
      <path
        d="M40.25 14.64s-9.962 11.578-9.747 26.25c.216 14.673 9.747 24.75 9.747 24.75M41 14.64s9.962 11.578 9.746 26.25C50.531 55.564 41 65.64 41 65.64"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <g filter="url(#plane_svg__filter2_d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.195 29.169c.2-.116.42-.188.65-.202 1.017-.064 3.953-.148 4.59.955.636 1.102-.905 3.602-1.469 4.45-.128.192-.3.347-.5.462l-6.076 3.508.844 17.1a.65.65 0 0 1-.315.59l-1.249.748a.65.65 0 0 1-.546.057l-.946-.327a.65.65 0 0 1-.367-.319L39.353 43.56l-6.369 3.677-.687 4.671a.65.65 0 0 1-.654.555l-.498-.01a.65.65 0 0 1-.581-.384l-1.79-4.016c-1.23.04-2.385-.082-2.695-.618-.31-.537.164-1.592.814-2.633l-2.564-3.531a.65.65 0 0 1-.042-.696l.24-.436a.65.65 0 0 1 .808-.29l4.362 1.73 6.38-3.683-7.658-11.829a.65.65 0 0 1-.092-.476l.19-.983a.65.65 0 0 1 .322-.445l1.273-.707a.65.65 0 0 1 .667.021l14.298 9.224 6.118-3.532z"
        fill="#fff"
      />
      <mask
        id="plane_svg__b"
        maskUnits="userSpaceOnUse"
        x={16}
        y={13}
        width={50}
        height={51}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.195 29.169c.2-.116.42-.188.65-.202 1.017-.064 3.953-.148 4.59.955.636 1.102-.905 3.602-1.469 4.45-.128.192-.3.347-.5.462l-6.076 3.508.844 17.1a.65.65 0 0 1-.315.59l-1.249.748a.65.65 0 0 1-.546.057l-.946-.327a.65.65 0 0 1-.367-.319L39.353 43.56l-6.369 3.677-.687 4.671a.65.65 0 0 1-.654.555l-.498-.01a.65.65 0 0 1-.581-.384l-1.79-4.016c-1.23.04-2.385-.082-2.695-.618-.31-.537.164-1.592.814-2.633l-2.564-3.531a.65.65 0 0 1-.042-.696l.24-.436a.65.65 0 0 1 .808-.29l4.362 1.73 6.38-3.683-7.658-11.829a.65.65 0 0 1-.092-.476l.19-.983a.65.65 0 0 1 .322-.445l1.273-.707a.65.65 0 0 1 .667.021l14.298 9.224 6.118-3.532z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#plane_svg__b)">
        <path
          fill="#EBECF2"
          d="M45.536 30.925l.654 1.133-10.745 6.204-.655-1.133z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.92 56.032a.65.65 0 0 0 .314-.59l-.871-17.659-9.237 5.333 6.685 13.076a.65.65 0 0 0 .367.318l.946.327a.65.65 0 0 0 .546-.057l1.25-.748z"
          fill="#DEE1E3"
        />
        <path
          opacity={0.4}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.837 47.942l-.09.051 1.817 4.076a.65.65 0 0 0 .58.385l.498.01a.65.65 0 0 0 .655-.555l.726-4.935-.463.268a1.624 1.624 0 0 1-.459.18c-.55.123-1.946.414-3.264.52z"
          fill="#DEE1E3"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.248 43.354l9.13-5.27.099 2.01-7.521 6.6-1.708-3.34z"
          fill="#C5C6CC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M57.482 33.093l-29.79 17.2s-.88-1.589-1.613-2.858a.954.954 0 0 1-.025-.047c1.352.098 4.073-.012 6.712-1.536l20.625-11.907c2.291-1.324 2.852-3.037 3.162-3.773.478 1.285.93 2.921.93 2.921z"
          fill="#DEE1E3"
        />
      </g>
    </g>
    <defs>
      <filter
        id="plane_svg__filter0_d"
        x={8.25}
        y={22.891}
        width={66.25}
        height={66.25}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={8} />
        <feGaussianBlur stdDeviation={5.5} />
        <feColorMatrix values="0 0 0 0 0.215686 0 0 0 0 0.407843 0 0 0 0 0.556863 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <filter
        id="plane_svg__filter1_d"
        x={0}
        y={0.141}
        width={82}
        height={82}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={5.5} />
        <feColorMatrix values="0 0 0 0 0.215686 0 0 0 0 0.407843 0 0 0 0 0.556863 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <filter
        id="plane_svg__filter2_d"
        x={5.692}
        y={6.654}
        width={71.181}
        height={72.139}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={5.5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgPlane;
