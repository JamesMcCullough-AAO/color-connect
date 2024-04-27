import { Box } from "@chakra-ui/react";

type BombProps = {
  text: string;
  color: string;
};

export const Bomb = ({ text, color }: BombProps) => (
  <Box
    w="70%"
    h="70%"
    position="absolute"
    //center in parent
    left="50%"
    top="50%"
    transform="translate(-50%, -50%)"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Group-copy">
          <path
            id="Shape"
            fill="#f72f39"
            fill-rule="evenodd"
            stroke="none"
            d="M 499.835938 874.583984 C 418.122894 874.583984 351.880859 842.69989 351.880859 803.369141 L 351.880859 101.044922 L 647.791016 101.044922 L 647.791016 803.369141 C 647.791016 842.69989 581.54895 874.583984 499.835938 874.583984 Z"
          />
          <path
            id="Ellipse"
            fill="#ac0307"
            fill-rule="evenodd"
            stroke="none"
            d="M 647.790649 101.044128 C 647.790649 61.713318 581.549072 29.829407 499.835999 29.829407 C 418.122864 29.829407 351.881317 61.713318 351.881317 101.044128 C 351.881317 140.374878 418.122864 172.258789 499.835999 172.258789 C 581.549072 172.258789 647.790649 140.374878 647.790649 101.044128 Z"
          />
          <path
            id="Ellipse-copy-4"
            fill="#1a1a1a"
            fill-rule="evenodd"
            stroke="none"
            d="M 557.533875 88.151794 C 557.533875 72.894165 531.836731 60.525391 500.137665 60.525391 C 468.438599 60.525391 442.741455 72.894165 442.741455 88.151794 C 442.741455 103.409424 468.438599 115.778198 500.137665 115.778198 C 531.836731 115.778198 557.533875 103.409424 557.533875 88.151794 Z"
          />
        </g>
        <g id="Group-copy-3">
          <path
            id="path1"
            fill="#d92029"
            fill-rule="evenodd"
            stroke="none"
            d="M 352.496094 911.417969 C 270.783051 911.417969 204.541016 879.533875 204.541016 840.203125 L 204.541016 137.878906 L 500.449219 137.878906 L 500.449219 840.203125 C 500.449219 879.533875 434.209106 911.417969 352.496094 911.417969 Z"
          />
          <path
            id="path2"
            fill="#c50005"
            fill-rule="evenodd"
            stroke="none"
            d="M 500.449921 137.879272 C 500.449921 98.548523 434.208344 66.664612 352.495239 66.664612 C 270.782104 66.664612 204.540558 98.548523 204.540558 137.879272 C 204.540558 177.210083 270.782104 209.093994 352.495239 209.093994 C 434.208344 209.093994 500.449921 177.210083 500.449921 137.879272 Z"
          />
          <path
            id="Ellipse-copy-2"
            fill="#282828"
            fill-rule="evenodd"
            stroke="none"
            d="M 410.193115 138.493225 C 410.193115 123.235596 384.495941 110.866821 352.796906 110.866821 C 321.097839 110.866821 295.400696 123.235596 295.400696 138.493225 C 295.400696 153.750854 321.097839 166.119629 352.796906 166.119629 C 384.495941 166.119629 410.193115 153.750854 410.193115 138.493225 Z"
          />
        </g>
        <mask
          id="bombmask1"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
          mask-type="alpha"
        >
          <g id="g1">
            <path
              id="path3"
              fill="#d92029"
              fill-rule="evenodd"
              stroke="none"
              d="M 352.496094 911.417969 C 270.783051 911.417969 204.541016 879.533875 204.541016 840.203125 L 204.541016 137.878906 L 500.449219 137.878906 L 500.449219 840.203125 C 500.449219 879.533875 434.209106 911.417969 352.496094 911.417969 Z"
            />
            <path
              id="path4"
              fill="#c50005"
              fill-rule="evenodd"
              stroke="none"
              d="M 500.449921 137.879272 C 500.449921 98.548523 434.208344 66.664612 352.495239 66.664612 C 270.782104 66.664612 204.540558 98.548523 204.540558 137.879272 C 204.540558 177.210083 270.782104 209.093994 352.495239 209.093994 C 434.208344 209.093994 500.449921 177.210083 500.449921 137.879272 Z"
            />
            <path
              id="path5"
              fill="#282828"
              fill-rule="evenodd"
              stroke="none"
              d="M 410.193115 138.493225 C 410.193115 123.235596 384.495941 110.866821 352.796906 110.866821 C 321.097839 110.866821 295.400696 123.235596 295.400696 138.493225 C 295.400696 153.750854 321.097839 166.119629 352.796906 166.119629 C 384.495941 166.119629 410.193115 153.750854 410.193115 138.493225 Z"
            />
          </g>
        </mask>
        <g id="g2" mask="url(#bombmask1)">
          <path
            id="Rounded-Corner-copy-3"
            fill="#252525"
            fill-rule="evenodd"
            stroke="none"
            d="M 351.881317 640.065674 C 167.434021 640.065674 17.908928 460.305786 17.908928 238.562134 L 82.632263 238.562134 C 82.632263 417.332214 203.179611 562.254883 351.881317 562.254883 Z"
          />
          <path
            id="Rounded-Corner"
            fill="#252525"
            fill-rule="evenodd"
            stroke="none"
            d="M 351.881317 489.041412 C 167.434021 489.041412 17.908928 309.281494 17.908928 87.537842 L 82.632263 87.537842 C 82.632263 266.307922 203.179611 411.230652 351.881317 411.230652 Z"
          />
        </g>
        <g id="Group-copy-4">
          <path
            id="path6"
            fill="#d92029"
            fill-rule="evenodd"
            stroke="none"
            d="M 648.404297 911.417969 C 566.691223 911.417969 500.449219 879.533875 500.449219 840.203125 L 500.449219 137.878906 L 796.359375 137.878906 L 796.359375 840.203125 C 796.359375 879.533875 730.11731 911.417969 648.404297 911.417969 Z"
          />
          <path
            id="path7"
            fill="#c50005"
            fill-rule="evenodd"
            stroke="none"
            d="M 796.359253 137.879272 C 796.359253 98.548523 730.117676 66.664612 648.404602 66.664612 C 566.691467 66.664612 500.44989 98.548523 500.44989 137.879272 C 500.44989 177.210083 566.691467 209.093994 648.404602 209.093994 C 730.117676 209.093994 796.359253 177.210083 796.359253 137.879272 Z"
          />
          <path
            id="Ellipse-copy-3"
            fill="#282828"
            fill-rule="evenodd"
            stroke="none"
            d="M 706.102478 138.493225 C 706.102478 123.235596 680.405273 110.866821 648.706238 110.866821 C 617.007202 110.866821 591.310059 123.235596 591.310059 138.493225 C 591.310059 153.750854 617.007202 166.119629 648.706238 166.119629 C 680.405273 166.119629 706.102478 153.750854 706.102478 138.493225 Z"
          />
        </g>
        <mask
          id="mask2"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
          mask-type="alpha"
        >
          <g id="g3">
            <path
              id="path8"
              fill="#d92029"
              fill-rule="evenodd"
              stroke="none"
              d="M 648.404297 911.417969 C 566.691223 911.417969 500.449219 879.533875 500.449219 840.203125 L 500.449219 137.878906 L 796.359375 137.878906 L 796.359375 840.203125 C 796.359375 879.533875 730.11731 911.417969 648.404297 911.417969 Z"
            />
            <path
              id="path9"
              fill="#c50005"
              fill-rule="evenodd"
              stroke="none"
              d="M 796.359253 137.879272 C 796.359253 98.548523 730.117676 66.664612 648.404602 66.664612 C 566.691467 66.664612 500.44989 98.548523 500.44989 137.879272 C 500.44989 177.210083 566.691467 209.093994 648.404602 209.093994 C 730.117676 209.093994 796.359253 177.210083 796.359253 137.879272 Z"
            />
            <path
              id="path10"
              fill="#282828"
              fill-rule="evenodd"
              stroke="none"
              d="M 706.102478 138.493225 C 706.102478 123.235596 680.405273 110.866821 648.706238 110.866821 C 617.007202 110.866821 591.310059 123.235596 591.310059 138.493225 C 591.310059 153.750854 617.007202 166.119629 648.706238 166.119629 C 680.405273 166.119629 706.102478 153.750854 706.102478 138.493225 Z"
            />
          </g>
        </mask>
        <g id="g4" mask="url(#mask2)">
          <path
            id="Rounded-Corner-copy-2"
            fill="#252525"
            fill-rule="evenodd"
            stroke="none"
            d="M 647.790649 640.065674 C 832.237976 640.065674 981.763062 460.305786 981.763062 238.562134 L 917.039734 238.562134 C 917.039734 417.332214 796.492371 562.254883 647.790649 562.254883 Z"
          />
          <path
            id="Rounded-Corner-copy"
            fill="#252525"
            fill-rule="evenodd"
            stroke="none"
            d="M 647.790649 489.041412 C 832.237976 489.041412 981.763062 309.281494 981.763062 87.537842 L 917.039734 87.537842 C 917.039734 266.307922 796.492371 411.230652 647.790649 411.230652 Z"
          />
        </g>
        <g id="Group-copy-5">
          <path
            id="path11"
            fill="#ff3741"
            fill-rule="evenodd"
            stroke="none"
            d="M 499.835938 990 C 418.122894 990 351.880859 958.115906 351.880859 918.785156 L 351.880859 216.460938 L 647.791016 216.460938 L 647.791016 918.785156 C 647.791016 958.115906 581.54895 990 499.835938 990 Z"
          />
          <path
            id="path12"
            fill="#e30006"
            fill-rule="evenodd"
            stroke="none"
            d="M 647.790649 216.460999 C 647.790649 177.130249 581.549072 145.246338 499.835999 145.246338 C 418.122864 145.246338 351.881317 177.130249 351.881317 216.460999 C 351.881317 255.791809 418.122864 287.67572 499.835999 287.67572 C 581.549072 287.67572 647.790649 255.791809 647.790649 216.460999 Z"
          />
          <path
            id="Ellipse-copy"
            fill="#353535"
            fill-rule="evenodd"
            stroke="none"
            d="M 557.533875 210.93573 C 557.533875 195.678101 531.836731 183.309326 500.137665 183.309326 C 468.438599 183.309326 442.741455 195.678101 442.741455 210.93573 C 442.741455 226.193359 468.438599 238.562134 500.137665 238.562134 C 531.836731 238.562134 557.533875 226.193359 557.533875 210.93573 Z"
          />
        </g>
        <path
          id="Rectangle"
          fill="#3a3939"
          fill-rule="evenodd"
          stroke="none"
          d="M 351.881317 489.041412 C 351.881317 489.041412 391.832703 516.053894 499.882599 516.053894 C 612.843872 516.053894 647.790649 489.041412 647.790649 489.041412 L 647.790649 410.459717 C 647.790649 410.459717 613.411133 437.472168 500.44989 437.472168 C 394.855682 437.472168 351.881317 410.459717 351.881317 410.459717 L 351.881317 489.041412 Z"
        />
        <path
          id="Rectangle-copy"
          fill="#3a3939"
          fill-rule="evenodd"
          stroke="none"
          d="M 351.881317 640.065674 C 351.881317 640.065674 391.832703 667.078186 499.882599 667.078186 C 612.843872 667.078186 647.790649 640.065674 647.790649 640.065674 L 647.790649 561.484009 C 647.790649 561.484009 613.411133 588.49646 500.44989 588.49646 C 394.855682 588.49646 351.881317 561.484009 351.881317 561.484009 L 351.881317 640.065674 Z"
        />
        <path
          id="path13"
          fill="#3a3939"
          fill-rule="evenodd"
          stroke="none"
          d="M 254.881973 845.114929 L 744.789978 845.114929 L 744.789978 346.612 L 254.881973 346.612 Z"
        />
        <path
          id="Rectangle-copy-2"
          fill="#000000"
          fill-rule="evenodd"
          stroke="none"
          d="M 280.573181 823.013794 L 719.005371 823.013794 L 719.005371 368.713135 L 280.573181 368.713135 Z"
        />
        <path
          id="Path"
          fill="none"
          stroke="#00f1f1"
          stroke-width="13.506236"
          stroke-linecap="round"
          d="M 710.410461 346.612 C 710.410461 346.612 771.926025 124.638062 693.220703 87.537842 C 673.842041 78.403137 649.018494 134.195801 649.018494 134.195801"
        />
        <path
          id="path14"
          fill="none"
          stroke="#c500bb"
          stroke-width="13.506236"
          stroke-linecap="round"
          d="M 691.992859 346.612 C 691.992859 346.612 699.99646 62.377441 606.044128 12.639648 C 569.317566 -6.803162 500.44989 87.537842 500.44989 87.537842"
        />
        <path
          id="path15"
          fill="none"
          stroke="#1ff100"
          stroke-width="13.506236"
          stroke-linecap="round"
          d="M 649.018494 346.612 C 649.018494 346.612 601.227173 181.566162 542.196472 124.373047 C 508.76944 91.986694 460.085114 58.49353 414.501129 67.892456 C 384.434875 74.091736 351.881317 135.423584 351.881317 135.423584 L 353.189484 134.195801"
        />
        <path
          id="path16"
          fill="none"
          stroke="#ffef00"
          stroke-width="13.506236"
          stroke-linecap="round"
          d="M 673.575317 346.612 C 673.575317 346.612 647.258972 151.059204 576.947144 132.967957 C 541.678223 123.893188 500.44989 209.093994 500.44989 209.093994"
        />
        <path
          id="Rectangle-copy-3"
          fill="#5c5c5c"
          fill-rule="evenodd"
          stroke="none"
          d="M 583.942993 368.713135 L 744.789978 368.713135 L 744.789978 329.422302 L 583.942993 329.422302 Z"
        />
        <g id="g5">
          <path
            id="path17"
            fill="#1ff100"
            fill-rule="evenodd"
            stroke="none"
            d="M 614.638977 346.612 C 614.638977 340.508972 609.691467 335.561462 603.58844 335.561462 C 597.485352 335.561462 592.537903 340.508972 592.537903 346.612 C 592.537903 352.715088 597.485352 357.662598 603.58844 357.662598 C 609.691467 357.662598 614.638977 352.715088 614.638977 346.612 Z"
          />
          <mask
            id="mask3"
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
            mask-type="alpha"
          >
            <path
              id="path18"
              fill="#1ff100"
              fill-rule="evenodd"
              stroke="none"
              d="M 614.638977 346.612 C 614.638977 340.508972 609.691467 335.561462 603.58844 335.561462 C 597.485352 335.561462 592.537903 340.508972 592.537903 346.612 C 592.537903 352.715088 597.485352 357.662598 603.58844 357.662598 C 609.691467 357.662598 614.638977 352.715088 614.638977 346.612 Z"
            />
          </mask>
          <g id="g6" mask="url(#mask3)">
            <path
              id="path19"
              fill="#ffffff"
              fill-rule="evenodd"
              stroke="none"
              d="M 601.132751 339.858887 C 601.132751 338.163635 599.758423 336.789307 598.063171 336.789307 C 596.367859 336.789307 594.99353 338.163635 594.99353 339.858887 C 594.99353 341.554199 596.367859 342.928528 598.063171 342.928528 C 599.758423 342.928528 601.132751 341.554199 601.132751 339.858887 Z"
            />
          </g>
        </g>
        <g id="Group-copy-2">
          <path
            id="path20"
            fill="#bd0000"
            fill-rule="evenodd"
            stroke="none"
            d="M 640.423645 346.612 C 640.423645 340.508972 635.476135 335.561462 629.373047 335.561462 C 623.27002 335.561462 618.32251 340.508972 618.32251 346.612 C 618.32251 352.715088 623.27002 357.662598 629.373047 357.662598 C 635.476135 357.662598 640.423645 352.715088 640.423645 346.612 Z"
          />
          <mask
            id="mask4"
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
            mask-type="alpha"
          >
            <path
              id="path21"
              fill="#bd0000"
              fill-rule="evenodd"
              stroke="none"
              d="M 640.423645 346.612 C 640.423645 340.508972 635.476135 335.561462 629.373047 335.561462 C 623.27002 335.561462 618.32251 340.508972 618.32251 346.612 C 618.32251 352.715088 623.27002 357.662598 629.373047 357.662598 C 635.476135 357.662598 640.423645 352.715088 640.423645 346.612 Z"
            />
          </mask>
          <g id="g7" mask="url(#mask4)">
            <path
              id="path22"
              fill="#ffffff"
              fill-rule="evenodd"
              stroke="none"
              d="M 626.917358 339.858887 C 626.917358 338.163635 625.543091 336.789307 623.847778 336.789307 C 622.152466 336.789307 620.778198 338.163635 620.778198 339.858887 C 620.778198 341.554199 622.152466 342.928528 623.847778 342.928528 C 625.543091 342.928528 626.917358 341.554199 626.917358 339.858887 Z"
            />
          </g>
        </g>
        <g id="Group-copy-6">
          <path
            id="path23"
            fill="#000000"
            fill-rule="evenodd"
            stroke="none"
            d="M 664.980408 346.612 C 664.980408 340.508972 660.032898 335.561462 653.929871 335.561462 C 647.826782 335.561462 642.879333 340.508972 642.879333 346.612 C 642.879333 352.715088 647.826782 357.662598 653.929871 357.662598 C 660.032898 357.662598 664.980408 352.715088 664.980408 346.612 Z"
          />
          <mask
            id="mask5"
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
            mask-type="alpha"
          >
            <path
              id="path24"
              fill="#000000"
              fill-rule="evenodd"
              stroke="none"
              d="M 664.980408 346.612 C 664.980408 340.508972 660.032898 335.561462 653.929871 335.561462 C 647.826782 335.561462 642.879333 340.508972 642.879333 346.612 C 642.879333 352.715088 647.826782 357.662598 653.929871 357.662598 C 660.032898 357.662598 664.980408 352.715088 664.980408 346.612 Z"
            />
          </mask>
          <g id="g8" mask="url(#mask5)">
            <path
              id="path25"
              fill="#ffffff"
              fill-rule="evenodd"
              stroke="none"
              d="M 651.474182 339.858887 C 651.474182 338.163635 650.099854 336.789307 648.404602 336.789307 C 646.70929 336.789307 645.334961 338.163635 645.334961 339.858887 C 645.334961 341.554199 646.70929 342.928528 648.404602 342.928528 C 650.099854 342.928528 651.474182 341.554199 651.474182 339.858887 Z"
            />
          </g>
        </g>
      </g>
      <text
        id="10"
        x="500"
        y="764"
        text-anchor="middle"
        font-family="Arial Narrow"
        font-size="400"
        font-weight="600"
        fill={text === "-" ? color : "#ffffff"}
      >
        {text}
      </text>
    </svg>
  </Box>
);