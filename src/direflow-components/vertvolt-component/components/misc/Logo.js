import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  width: ${(props) => (props.small ? 12 : 23)}rem;
  height: auto;
  ${(props) => props.theme.mq.small} {
    display: none;
  }
`
export default function Logo(props) {
  return (
    <Wrapper
      width='191'
      height='188'
      viewBox='0 0 191 188'
      small={props.small}
      label={props.label}
    >
      <path
        d='M0 70C0 31.3401 31.3401 0 70 0H191V118C191 156.66 159.66 188 121 188H0V70Z'
        fill='url(#paint0_linear)'
      />
      <path
        d='M125.126 19.9764H125.114C125.01 19.2575 124.811 18.5937 124.518 17.9934C124.059 17.0527 123.384 16.3026 122.511 15.7642C121.639 15.2278 120.591 14.9556 119.393 14.9556C118.185 14.9556 117.096 15.2331 116.156 15.7804C115.214 16.3291 114.466 17.0958 113.933 18.0597C113.404 19.0197 113.135 20.1385 113.135 21.3854C113.135 22.6229 113.421 23.7379 113.982 24.6994C114.544 25.6624 115.333 26.4277 116.326 26.9743C117.313 27.5179 118.454 27.7937 119.716 27.7937C120.423 27.7937 121.17 27.6629 121.935 27.4046C122.706 27.1458 123.363 26.8025 123.883 26.3894C124.338 26.0417 124.415 25.6311 124.399 25.3481C124.379 24.9691 124.199 24.6267 123.856 24.3245C123.585 24.096 123.27 23.9869 122.903 23.9952C122.563 24.0051 122.244 24.1168 121.952 24.3307C121.701 24.5189 121.36 24.6899 120.938 24.8391C120.52 24.9868 120.11 25.0616 119.717 25.0616C118.978 25.0616 118.319 24.8995 117.757 24.5802C117.196 24.262 116.751 23.8231 116.433 23.2761C116.306 23.0578 116.205 22.8252 116.128 22.5793H123.768C124.171 22.5793 124.513 22.4472 124.783 22.1875C125.054 21.9265 125.198 21.5821 125.198 21.1918C125.198 20.7742 125.17 20.3711 125.115 19.9838L125.126 19.9764ZM116.363 19.4546C116.63 18.9011 117.01 18.4782 117.522 18.1613C118.032 17.8471 118.662 17.6879 119.393 17.6879C120.021 17.6879 120.555 17.8302 120.983 18.1114C121.422 18.3997 121.752 18.7825 121.992 19.2807C122.096 19.4984 122.18 19.7306 122.243 19.9762H116.157C116.213 19.7947 116.282 19.6208 116.363 19.4546Z'
        fill='white'
      />
      <path
        d='M134.622 15.4058C134.119 15.0739 133.41 14.9125 132.451 14.9125C131.517 14.9125 130.648 15.1346 129.866 15.5721C129.63 15.704 129.409 15.851 129.2 16.012C129.135 15.7848 129.026 15.5935 128.873 15.4406C128.609 15.176 128.232 15.0419 127.754 15.0419C127.29 15.0419 126.916 15.1798 126.646 15.4509C126.374 15.7222 126.237 16.0948 126.237 16.5591V26.1906C126.237 26.6723 126.376 27.0506 126.651 27.3154C126.921 27.5759 127.292 27.7076 127.754 27.7076C128.236 27.7076 128.614 27.5682 128.878 27.2932C129.138 27.0231 129.271 26.6521 129.271 26.1906V19.8987C129.271 19.3527 129.437 18.9179 129.78 18.5697C130.141 18.2031 130.65 17.9467 131.294 17.8077C131.963 17.6628 132.736 17.678 133.581 17.8494C133.826 17.9063 134.06 17.9142 134.275 17.8749C134.511 17.8323 134.724 17.7289 134.908 17.5677C135.102 17.3962 135.232 17.1604 135.29 16.8846C135.375 16.5537 135.402 15.922 134.622 15.4058Z'
        fill='white'
      />
      <path
        d='M142.446 24.6738H141.714C141.385 24.6738 141.124 24.5405 140.89 24.2539C140.638 23.9442 140.515 23.5629 140.515 23.088V18.2052H141.907C142.322 18.2052 142.669 18.0791 142.938 17.8298C143.214 17.5751 143.36 17.2399 143.36 16.8605C143.36 16.4528 143.214 16.1027 142.938 15.8478C142.669 15.5991 142.322 15.4731 141.907 15.4731H140.515V12.8101C140.515 12.3749 140.371 12.009 140.085 11.7236C139.799 11.4376 139.434 11.2929 138.999 11.2929C138.563 11.2929 138.198 11.4377 137.912 11.7239C137.626 12.0102 137.482 12.3756 137.482 12.8102V15.4732H136.93C136.515 15.4732 136.168 15.5992 135.899 15.8486C135.623 16.1031 135.478 16.4531 135.478 16.8608C135.478 17.2401 135.623 17.5754 135.899 17.8301C136.168 18.0794 136.515 18.2055 136.93 18.2055H137.482V23.0883C137.482 23.9467 137.665 24.7328 138.027 25.425C138.391 26.1227 138.9 26.6829 139.538 27.0898C140.181 27.4998 140.914 27.7078 141.714 27.7078H142.101C142.581 27.7078 142.985 27.5713 143.301 27.3017C143.636 27.0187 143.812 26.6343 143.812 26.1908C143.812 25.7654 143.685 25.4059 143.431 25.1224C143.169 24.8287 142.828 24.6738 142.446 24.6738Z'
        fill='white'
      />
      <path
        d='M156.785 12.6186C156.652 12.1827 156.383 11.8573 155.995 11.6563C155.577 11.4265 155.137 11.3886 154.721 11.5457C154.312 11.6998 154.005 11.9951 153.801 12.4446L150.042 21.9897L146.236 12.4239C146.043 11.9989 145.747 11.704 145.357 11.5484C144.945 11.3847 144.52 11.4253 144.147 11.6564C143.742 11.8798 143.467 12.2034 143.325 12.6195C143.186 13.0305 143.201 13.4514 143.371 13.8712L148.507 26.4938C148.943 27.4792 149.598 27.6862 150.07 27.6862C150.55 27.6862 151.203 27.4763 151.592 26.4815L156.723 13.8706C156.889 13.4572 156.91 13.0363 156.785 12.6186Z'
        fill='white'
      />
      <path
        d='M114.554 12.6186C114.421 12.1827 114.153 11.8573 113.765 11.6563C113.346 11.4265 112.907 11.3886 112.49 11.5457C112.081 11.6998 111.774 11.9951 111.57 12.4448L107.811 21.9901L104.005 12.4239C103.812 11.9989 103.516 11.704 103.126 11.5487C102.716 11.3847 102.29 11.4253 101.916 11.6564C101.512 11.8798 101.235 12.2034 101.094 12.6195C100.955 13.0305 100.97 13.4514 101.14 13.8711L106.276 26.4938C106.712 27.4792 107.367 27.6862 107.84 27.6862C108.319 27.6862 108.973 27.4763 109.361 26.4815L114.492 13.8706C114.659 13.4572 114.68 13.0363 114.554 12.6186Z'
        fill='white'
      />
      <path
        d='M164.747 15.7786C163.793 15.2324 162.69 14.9556 161.47 14.9556C160.235 14.9556 159.123 15.2324 158.17 15.7786C157.213 16.3268 156.451 17.0927 155.906 18.0548C155.359 19.0151 155.083 20.1357 155.083 21.3852C155.083 22.6213 155.359 23.7347 155.905 24.6944C156.451 25.6572 157.213 26.4233 158.17 26.9706C159.122 27.5168 160.232 27.7936 161.47 27.7936C162.706 27.7936 163.816 27.5168 164.769 26.9706C165.725 26.4229 166.484 25.6565 167.025 24.6922C167.561 23.7321 167.834 22.6191 167.834 21.3852C167.834 20.136 167.558 19.0154 167.012 18.0548C166.465 17.0922 165.703 16.3265 164.747 15.7786ZM164.843 21.3852C164.843 22.0991 164.698 22.7325 164.411 23.2683C164.128 23.7975 163.728 24.2191 163.225 24.5211C162.722 24.8224 162.131 24.9756 161.47 24.9756C160.807 24.9756 160.216 24.8224 159.714 24.5211C159.209 24.2184 158.805 23.7959 158.515 23.2643C158.222 22.7306 158.074 22.0984 158.074 21.3852C158.074 20.6722 158.222 20.0356 158.516 19.4936C158.807 18.9569 159.21 18.5311 159.714 18.2286C160.215 17.9273 160.806 17.7743 161.47 17.7743C162.132 17.7743 162.723 17.9273 163.225 18.2291C163.729 18.5304 164.126 18.9553 164.41 19.4904C164.697 20.0339 164.843 20.6716 164.843 21.3852Z'
        fill='white'
      />
      <path
        d='M173.126 24.6737H172.587C172.521 24.6737 172.366 24.6737 172.192 24.3745C172.031 24.0999 171.95 23.7322 171.95 23.2818V11.5167C171.95 11.0811 171.805 10.7158 171.52 10.4308C171.234 10.1448 170.868 10 170.433 10C169.998 10 169.632 10.1448 169.346 10.4308C169.061 10.7165 168.916 11.082 168.916 11.5167V23.2818C168.916 24.1166 169.066 24.8707 169.365 25.5225C169.669 26.1864 170.102 26.7207 170.653 27.1098C171.215 27.5064 171.866 27.7074 172.587 27.7074H172.631C173.157 27.7074 173.6 27.5773 173.947 27.3204C174.333 27.0369 174.536 26.6463 174.536 26.1904C174.536 25.7655 174.407 25.4058 174.154 25.122C173.892 24.8286 173.536 24.6737 173.126 24.6737Z'
        fill='white'
      />
      <path
        d='M181.372 25.1225C181.111 24.8288 180.77 24.6738 180.388 24.6738H179.655C179.326 24.6738 179.065 24.5405 178.832 24.254C178.579 23.9439 178.456 23.5624 178.456 23.0878V18.205H179.849C180.263 18.205 180.61 18.0789 180.879 17.8302C181.155 17.5755 181.301 17.2403 181.301 16.8605C181.301 16.4522 181.155 16.1022 180.879 15.8478C180.61 15.599 180.263 15.473 179.849 15.473H178.456V12.81C178.456 12.3751 178.311 12.0097 178.026 11.723C177.741 11.4375 177.375 11.2927 176.94 11.2927C176.504 11.2927 176.139 11.4375 175.854 11.7234C175.567 12.0088 175.422 12.3748 175.422 12.8099V15.4729H174.871C174.456 15.4729 174.11 15.5989 173.841 15.8476C173.565 16.1022 173.419 16.4522 173.419 16.8603C173.419 17.2402 173.565 17.5754 173.84 17.8296C174.11 18.0789 174.456 18.205 174.871 18.205H175.422V23.0878C175.422 23.9469 175.607 24.7335 175.969 25.4245C176.333 26.1222 176.841 26.6824 177.48 27.0894C178.122 27.4993 178.855 27.7073 179.655 27.7073H180.043C180.522 27.7073 180.926 27.571 181.244 27.3011C181.577 27.0177 181.754 26.6337 181.754 26.1903C181.754 25.7643 181.625 25.4048 181.372 25.1225Z'
        fill='white'
      />
      <path
        d='M65.1523 64.4V85.955C64.8223 86.045 64.3573 86.12 63.7573 86.18C63.1573 86.27 62.5273 86.315 61.8673 86.315C60.4573 86.315 59.4673 86.075 58.8973 85.595C58.3273 85.115 58.0423 84.245 58.0423 82.985V64.4H50.9773C50.7973 64.1 50.6173 63.71 50.4373 63.23C50.2873 62.75 50.2123 62.225 50.2123 61.655C50.2123 60.635 50.4373 59.9 50.8873 59.45C51.3373 58.97 51.9523 58.73 52.7323 58.73H72.3973C72.6073 59.03 72.7873 59.42 72.9373 59.9C73.0873 60.38 73.1623 60.905 73.1623 61.475C73.1623 62.465 72.9373 63.2 72.4873 63.68C72.0373 64.16 71.4223 64.4 70.6423 64.4H65.1523Z'
        fill='white'
      />
      <path
        d='M99.0285 67.505C99.0285 69.245 98.5635 70.805 97.6335 72.185C96.7335 73.565 95.5035 74.66 93.9435 75.47C95.1735 77.09 96.3435 78.62 97.4535 80.06C98.5935 81.47 99.4335 82.61 99.9735 83.48C99.7035 84.44 99.1935 85.175 98.4435 85.685C97.7235 86.165 96.9285 86.405 96.0585 86.405C94.9185 86.405 94.0485 86.165 93.4485 85.685C92.8485 85.175 92.2785 84.485 91.7385 83.615L87.4185 76.91H84.3135V85.955C83.9835 86.045 83.5185 86.12 82.9185 86.18C82.3185 86.27 81.6885 86.315 81.0285 86.315C79.6185 86.315 78.6285 86.075 78.0585 85.595C77.5185 85.115 77.2485 84.245 77.2485 82.985V61.16C77.2485 60.56 77.3985 60.095 77.6985 59.765C78.0285 59.435 78.4935 59.18 79.0935 59C80.0535 58.64 81.2085 58.385 82.5585 58.235C83.9085 58.085 85.3185 58.01 86.7885 58.01C90.8685 58.01 93.9285 58.865 95.9685 60.575C98.0085 62.255 99.0285 64.565 99.0285 67.505ZM87.0135 71.465C88.4535 71.465 89.6235 71.15 90.5235 70.52C91.4235 69.86 91.8735 68.87 91.8735 67.55C91.8735 64.97 90.1485 63.68 86.6985 63.68C86.2185 63.68 85.7835 63.71 85.3935 63.77C85.0035 63.8 84.6135 63.845 84.2235 63.905V71.465H87.0135Z'
        fill='white'
      />
      <path
        d='M108.32 86.09C107.18 86.09 106.265 85.76 105.575 85.1C104.915 84.41 104.585 83.495 104.585 82.355V62.465C104.585 61.325 104.915 60.425 105.575 59.765C106.265 59.075 107.18 58.73 108.32 58.73H123.215C123.395 59.03 123.56 59.405 123.71 59.855C123.86 60.305 123.935 60.815 123.935 61.385C123.935 62.375 123.71 63.11 123.26 63.59C122.84 64.07 122.24 64.31 121.46 64.31H111.47V69.35H121.91C122.09 69.65 122.255 70.025 122.405 70.475C122.555 70.925 122.63 71.435 122.63 72.005C122.63 72.995 122.42 73.73 122 74.21C121.58 74.66 120.98 74.885 120.2 74.885H111.47V80.51H123.395C123.575 80.81 123.74 81.2 123.89 81.68C124.04 82.16 124.115 82.685 124.115 83.255C124.115 84.245 123.89 84.965 123.44 85.415C123.02 85.865 122.435 86.09 121.685 86.09H108.32ZM108.275 52.475C108.245 52.355 108.23 52.205 108.23 52.025C108.23 51.815 108.23 51.665 108.23 51.575C108.23 50.585 108.5 49.805 109.04 49.235C109.61 48.665 110.315 48.38 111.155 48.38C111.695 48.38 112.205 48.515 112.685 48.785C113.165 49.025 113.66 49.4 114.17 49.91L118.04 53.87C117.92 54.83 117.575 55.535 117.005 55.985C116.435 56.435 115.82 56.66 115.16 56.66C114.59 56.66 114.095 56.57 113.675 56.39C113.255 56.18 112.835 55.91 112.415 55.58L108.275 52.475Z'
        fill='white'
      />
      <path
        d='M137.426 81.005C139.016 81.005 140.141 80.735 140.801 80.195C141.491 79.625 141.836 78.95 141.836 78.17C141.836 77.45 141.566 76.88 141.026 76.46C140.516 76.01 139.736 75.62 138.686 75.29L136.391 74.57C135.131 74.18 133.991 73.76 132.971 73.31C131.951 72.83 131.081 72.275 130.361 71.645C129.641 70.985 129.071 70.22 128.651 69.35C128.261 68.45 128.066 67.37 128.066 66.11C128.066 63.59 129.011 61.595 130.901 60.125C132.821 58.655 135.476 57.92 138.866 57.92C140.156 57.92 141.341 58.01 142.421 58.19C143.531 58.37 144.476 58.655 145.256 59.045C146.036 59.405 146.651 59.855 147.101 60.395C147.551 60.935 147.776 61.565 147.776 62.285C147.776 62.975 147.596 63.59 147.236 64.13C146.906 64.64 146.516 65.075 146.066 65.435C145.376 64.955 144.461 64.55 143.321 64.22C142.181 63.89 140.936 63.725 139.586 63.725C138.146 63.725 137.081 63.95 136.391 64.4C135.701 64.85 135.356 65.42 135.356 66.11C135.356 66.71 135.581 67.175 136.031 67.505C136.481 67.805 137.186 68.12 138.146 68.45L140.576 69.26C141.986 69.74 143.216 70.265 144.266 70.835C145.346 71.375 146.246 72.005 146.966 72.725C147.686 73.415 148.226 74.225 148.586 75.155C148.946 76.055 149.126 77.09 149.126 78.26C149.126 79.52 148.871 80.675 148.361 81.725C147.881 82.745 147.146 83.63 146.156 84.38C145.196 85.13 143.996 85.715 142.556 86.135C141.146 86.555 139.511 86.765 137.651 86.765C136.271 86.765 134.996 86.645 133.826 86.405C132.656 86.195 131.636 85.88 130.766 85.46C129.926 85.04 129.251 84.53 128.741 83.93C128.261 83.3 128.021 82.595 128.021 81.815C128.021 81.005 128.246 80.33 128.696 79.79C129.176 79.25 129.701 78.815 130.271 78.485C131.081 79.145 132.086 79.73 133.286 80.24C134.516 80.75 135.896 81.005 137.426 81.005Z'
        fill='white'
      />
      <path
        d='M18.9987 126.09C17.8587 126.09 16.9437 125.76 16.2537 125.1C15.5937 124.41 15.2637 123.495 15.2637 122.355V102.465C15.2637 101.325 15.5937 100.425 16.2537 99.765C16.9437 99.075 17.8587 98.73 18.9987 98.73H33.8937C34.0737 99.03 34.2387 99.405 34.3887 99.855C34.5387 100.305 34.6137 100.815 34.6137 101.385C34.6137 102.375 34.3887 103.11 33.9387 103.59C33.5187 104.07 32.9187 104.31 32.1387 104.31H22.1487V109.35H32.5887C32.7687 109.65 32.9337 110.025 33.0837 110.475C33.2337 110.925 33.3087 111.435 33.3087 112.005C33.3087 112.995 33.0987 113.73 32.6787 114.21C32.2587 114.66 31.6587 114.885 30.8787 114.885H22.1487V120.51H34.0737C34.2537 120.81 34.4187 121.2 34.5687 121.68C34.7187 122.16 34.7937 122.685 34.7937 123.255C34.7937 124.245 34.5687 124.965 34.1187 125.415C33.6987 125.865 33.1137 126.09 32.3637 126.09H18.9987Z'
        fill='white'
      />
      <path
        d='M63.9052 125.145C63.4852 125.505 62.9152 125.79 62.1952 126C61.4752 126.24 60.6202 126.36 59.6302 126.36C58.6102 126.36 57.6502 126.195 56.7502 125.865C55.8502 125.535 55.1002 124.785 54.5002 123.615L49.2802 113.535C48.7702 112.575 48.2902 111.615 47.8402 110.655C47.4202 109.695 47.0002 108.69 46.5802 107.64L46.2652 107.73C46.4152 109.53 46.5052 111.255 46.5352 112.905C46.5652 114.525 46.5802 116.1 46.5802 117.63V126C46.2802 126.06 45.8302 126.12 45.2302 126.18C44.6602 126.27 44.0602 126.315 43.4302 126.315C42.0802 126.315 41.1352 126.09 40.5952 125.64C40.0552 125.16 39.7852 124.32 39.7852 123.12V99.945C40.1452 99.435 40.7152 99.045 41.4952 98.775C42.3052 98.475 43.1602 98.325 44.0602 98.325C45.1102 98.325 46.0702 98.49 46.9402 98.82C47.8402 99.15 48.5902 99.885 49.1902 101.025L54.4552 111.15C54.9652 112.11 55.4302 113.07 55.8502 114.03C56.3002 114.99 56.7352 115.995 57.1552 117.045L57.3352 117C57.1852 114.99 57.0952 113.085 57.0652 111.285C57.0652 109.485 57.0652 107.76 57.0652 106.11V98.64C57.3652 98.58 57.8002 98.505 58.3702 98.415C58.9702 98.325 59.6002 98.28 60.2602 98.28C61.6102 98.28 62.5552 98.52 63.0952 99C63.6352 99.45 63.9052 100.275 63.9052 101.475V125.145Z'
        fill='white'
      />
      <path
        d='M94.2714 121.86C94.2714 122.73 94.1064 123.375 93.7764 123.795C93.4464 124.215 92.9214 124.635 92.2014 125.055C91.7814 125.295 91.2714 125.52 90.6714 125.73C90.0714 125.94 89.3964 126.12 88.6464 126.27C87.9264 126.42 87.1614 126.54 86.3514 126.63C85.5714 126.72 84.7914 126.765 84.0114 126.765C81.8514 126.765 79.8414 126.495 77.9814 125.955C76.1514 125.385 74.5464 124.515 73.1664 123.345C71.7864 122.175 70.7064 120.69 69.9264 118.89C69.1464 117.09 68.7564 114.93 68.7564 112.41C68.7564 110.04 69.1464 107.955 69.9264 106.155C70.7364 104.325 71.8164 102.81 73.1664 101.61C74.5464 100.38 76.1514 99.465 77.9814 98.865C79.8414 98.235 81.8364 97.92 83.9664 97.92C86.7564 97.92 88.9764 98.355 90.6264 99.225C92.2764 100.095 93.1014 101.205 93.1014 102.555C93.1014 103.245 92.9214 103.86 92.5614 104.4C92.2014 104.91 91.7814 105.315 91.3014 105.615C90.5514 105.135 89.6064 104.685 88.4664 104.265C87.3564 103.845 86.0364 103.635 84.5064 103.635C83.2464 103.635 82.0914 103.845 81.0414 104.265C80.0214 104.655 79.1364 105.225 78.3864 105.975C77.6364 106.725 77.0514 107.64 76.6314 108.72C76.2114 109.8 76.0014 111.015 76.0014 112.365C76.0014 113.835 76.1964 115.125 76.5864 116.235C77.0064 117.315 77.5764 118.215 78.2964 118.935C79.0164 119.655 79.8714 120.195 80.8614 120.555C81.8814 120.915 82.9764 121.095 84.1464 121.095C84.8664 121.095 85.5114 121.02 86.0814 120.87C86.6814 120.72 87.1464 120.57 87.4764 120.42V115.335H82.3014C82.1214 115.035 81.9564 114.645 81.8064 114.165C81.6564 113.685 81.5814 113.175 81.5814 112.635C81.5814 111.675 81.8064 110.97 82.2564 110.52C82.7064 110.07 83.2914 109.845 84.0114 109.845H91.5714C92.4114 109.845 93.0714 110.085 93.5514 110.565C94.0314 111.015 94.2714 111.66 94.2714 112.5V121.86Z'
        fill='white'
      />
      <path
        d='M115.419 120.015H106.599C106.269 121.095 105.954 122.16 105.654 123.21C105.384 124.26 105.144 125.19 104.934 126C104.544 126.12 104.139 126.225 103.719 126.315C103.299 126.405 102.789 126.45 102.189 126.45C100.869 126.45 99.8639 126.225 99.1739 125.775C98.5139 125.295 98.1839 124.62 98.1839 123.75C98.1839 123.33 98.2439 122.925 98.3639 122.535C98.4839 122.145 98.6189 121.695 98.7689 121.185C98.9789 120.375 99.2789 119.37 99.6689 118.17C100.059 116.97 100.479 115.68 100.929 114.3C101.409 112.89 101.904 111.45 102.414 109.98C102.924 108.51 103.419 107.115 103.899 105.795C104.379 104.445 104.814 103.215 105.204 102.105C105.594 100.995 105.924 100.11 106.194 99.45C106.644 99.18 107.334 98.925 108.264 98.685C109.224 98.445 110.169 98.325 111.099 98.325C112.449 98.325 113.634 98.52 114.654 98.91C115.704 99.27 116.379 99.885 116.679 100.755C117.249 102.345 117.864 104.19 118.524 106.29C119.184 108.39 119.844 110.55 120.504 112.77C121.194 114.99 121.854 117.18 122.484 119.34C123.114 121.5 123.669 123.435 124.149 125.145C123.819 125.535 123.324 125.85 122.664 126.09C122.034 126.33 121.269 126.45 120.369 126.45C119.079 126.45 118.164 126.225 117.624 125.775C117.114 125.325 116.739 124.62 116.499 123.66L115.419 120.015ZM111.054 104.625C110.634 105.975 110.109 107.52 109.479 109.26C108.879 110.97 108.309 112.725 107.769 114.525H114.204C113.694 112.635 113.169 110.835 112.629 109.125C112.119 107.385 111.684 105.885 111.324 104.625H111.054Z'
        fill='white'
      />
      <path
        d='M151.884 121.86C151.884 122.73 151.719 123.375 151.389 123.795C151.059 124.215 150.534 124.635 149.814 125.055C149.394 125.295 148.884 125.52 148.284 125.73C147.684 125.94 147.009 126.12 146.259 126.27C145.539 126.42 144.774 126.54 143.964 126.63C143.184 126.72 142.404 126.765 141.624 126.765C139.464 126.765 137.454 126.495 135.594 125.955C133.764 125.385 132.159 124.515 130.779 123.345C129.399 122.175 128.319 120.69 127.539 118.89C126.759 117.09 126.369 114.93 126.369 112.41C126.369 110.04 126.759 107.955 127.539 106.155C128.349 104.325 129.429 102.81 130.779 101.61C132.159 100.38 133.764 99.465 135.594 98.865C137.454 98.235 139.449 97.92 141.579 97.92C144.369 97.92 146.589 98.355 148.239 99.225C149.889 100.095 150.714 101.205 150.714 102.555C150.714 103.245 150.534 103.86 150.174 104.4C149.814 104.91 149.394 105.315 148.914 105.615C148.164 105.135 147.219 104.685 146.079 104.265C144.969 103.845 143.649 103.635 142.119 103.635C140.859 103.635 139.704 103.845 138.654 104.265C137.634 104.655 136.749 105.225 135.999 105.975C135.249 106.725 134.664 107.64 134.244 108.72C133.824 109.8 133.614 111.015 133.614 112.365C133.614 113.835 133.809 115.125 134.199 116.235C134.619 117.315 135.189 118.215 135.909 118.935C136.629 119.655 137.484 120.195 138.474 120.555C139.494 120.915 140.589 121.095 141.759 121.095C142.479 121.095 143.124 121.02 143.694 120.87C144.294 120.72 144.759 120.57 145.089 120.42V115.335H139.914C139.734 115.035 139.569 114.645 139.419 114.165C139.269 113.685 139.194 113.175 139.194 112.635C139.194 111.675 139.419 110.97 139.869 110.52C140.319 110.07 140.904 109.845 141.624 109.845H149.184C150.024 109.845 150.684 110.085 151.164 110.565C151.644 111.015 151.884 111.66 151.884 112.5V121.86Z'
        fill='white'
      />
      <path
        d='M161.252 126.09C160.112 126.09 159.197 125.76 158.507 125.1C157.847 124.41 157.517 123.495 157.517 122.355V102.465C157.517 101.325 157.847 100.425 158.507 99.765C159.197 99.075 160.112 98.73 161.252 98.73H176.147C176.327 99.03 176.492 99.405 176.642 99.855C176.792 100.305 176.867 100.815 176.867 101.385C176.867 102.375 176.642 103.11 176.192 103.59C175.772 104.07 175.172 104.31 174.392 104.31H164.402V109.35H174.842C175.022 109.65 175.187 110.025 175.337 110.475C175.487 110.925 175.562 111.435 175.562 112.005C175.562 112.995 175.352 113.73 174.932 114.21C174.512 114.66 173.912 114.885 173.132 114.885H164.402V120.51H176.327C176.507 120.81 176.672 121.2 176.822 121.68C176.972 122.16 177.047 122.685 177.047 123.255C177.047 124.245 176.822 124.965 176.372 125.415C175.952 125.865 175.367 126.09 174.617 126.09H161.252ZM171.107 88.155C172.247 88.155 173.132 88.44 173.762 89.01C174.422 89.55 174.752 90.225 174.752 91.035C174.752 91.605 174.617 92.115 174.347 92.565C174.077 93.015 173.567 93.48 172.817 93.96L168.452 96.705C167.372 96.705 166.547 96.465 165.977 95.985C165.407 95.505 165.122 94.935 165.122 94.275C165.122 93.915 165.182 93.585 165.302 93.285C165.422 92.955 165.692 92.61 166.112 92.25L171.107 88.155Z'
        fill='white'
      />
      <path
        d='M16.6399 157.32C16.6399 158.253 16.2932 158.987 15.5999 159.52C14.9065 160.04 13.8932 160.3 12.5599 160.3C12.0132 160.3 11.5132 160.26 11.0599 160.18C10.6199 160.1 10.2332 159.987 9.89988 159.84C9.57988 159.68 9.32655 159.493 9.13988 159.28C8.96655 159.053 8.87988 158.807 8.87988 158.54C8.87988 158.287 8.93322 158.067 9.03988 157.88C9.15988 157.693 9.31322 157.54 9.49988 157.42C9.87322 157.66 10.2999 157.873 10.7799 158.06C11.2732 158.247 11.8399 158.34 12.4799 158.34C13.0265 158.34 13.4399 158.253 13.7199 158.08C13.9999 157.893 14.1399 157.64 14.1399 157.32C14.1399 156.773 13.7399 156.413 12.9399 156.24L11.8199 155.98C10.8332 155.753 10.0999 155.413 9.61988 154.96C9.15322 154.507 8.91988 153.9 8.91988 153.14C8.91988 152.273 9.26655 151.573 9.95988 151.04C10.6532 150.493 11.6265 150.22 12.8799 150.22C13.3599 150.22 13.7999 150.26 14.1999 150.34C14.6132 150.407 14.9665 150.513 15.2599 150.66C15.5665 150.793 15.7999 150.96 15.9599 151.16C16.1332 151.347 16.2199 151.567 16.2199 151.82C16.2199 152.06 16.1665 152.273 16.0599 152.46C15.9532 152.633 15.8265 152.773 15.6799 152.88C15.5599 152.8 15.3999 152.72 15.1999 152.64C15.0132 152.56 14.7999 152.487 14.5599 152.42C14.3332 152.353 14.0865 152.3 13.8199 152.26C13.5665 152.207 13.3132 152.18 13.0599 152.18C12.5399 152.18 12.1332 152.267 11.8399 152.44C11.5465 152.6 11.3999 152.833 11.3999 153.14C11.3999 153.367 11.4799 153.553 11.6399 153.7C11.8132 153.847 12.1065 153.967 12.5199 154.06L13.4999 154.3C14.6065 154.553 15.4065 154.927 15.8999 155.42C16.3932 155.9 16.6399 156.533 16.6399 157.32Z'
        fill='white'
      />
      <path
        d='M22.5897 158.38C22.9764 158.38 23.3297 158.347 23.6497 158.28C23.9697 158.2 24.2031 158.107 24.3497 158V155.78L22.4097 155.96C21.8764 156.013 21.4697 156.133 21.1897 156.32C20.9097 156.493 20.7697 156.773 20.7697 157.16C20.7697 157.547 20.9097 157.847 21.1897 158.06C21.4831 158.273 21.9497 158.38 22.5897 158.38ZM22.5097 150.24C23.8164 150.24 24.8564 150.52 25.6297 151.08C26.4164 151.64 26.8097 152.507 26.8097 153.68V158.3C26.8097 158.62 26.7297 158.873 26.5697 159.06C26.4097 159.247 26.2097 159.413 25.9697 159.56C25.5964 159.787 25.1231 159.967 24.5497 160.1C23.9764 160.233 23.3231 160.3 22.5897 160.3C21.2564 160.3 20.2031 160.047 19.4297 159.54C18.6697 159.02 18.2897 158.247 18.2897 157.22C18.2897 156.327 18.5697 155.647 19.1297 155.18C19.7031 154.7 20.5297 154.407 21.6097 154.3L24.3497 154.02V153.66C24.3497 153.153 24.1631 152.78 23.7897 152.54C23.4297 152.3 22.9164 152.18 22.2497 152.18C21.7297 152.18 21.2231 152.247 20.7297 152.38C20.2364 152.5 19.7964 152.653 19.4097 152.84C19.2631 152.733 19.1364 152.593 19.0297 152.42C18.9364 152.233 18.8897 152.033 18.8897 151.82C18.8897 151.553 18.9497 151.34 19.0697 151.18C19.2031 151.007 19.4097 150.853 19.6897 150.72C20.0764 150.56 20.5164 150.44 21.0097 150.36C21.5031 150.28 22.0031 150.24 22.5097 150.24Z'
        fill='white'
      />
      <path
        d='M35.5789 153.9C35.5789 153.327 35.4123 152.907 35.0789 152.64C34.7589 152.373 34.3189 152.24 33.7589 152.24C33.3723 152.24 33.0123 152.287 32.6789 152.38C32.3589 152.473 32.0789 152.593 31.8389 152.74V159.98C31.7189 160.007 31.5589 160.04 31.3589 160.08C31.1589 160.12 30.9323 160.14 30.6789 160.14C30.2123 160.14 29.8656 160.053 29.6389 159.88C29.4123 159.707 29.2989 159.4 29.2989 158.96V152.54C29.2989 152.22 29.3656 151.96 29.4989 151.76C29.6323 151.56 29.8389 151.367 30.1189 151.18C30.5056 150.913 31.0189 150.693 31.6589 150.52C32.2989 150.333 33.0056 150.24 33.7789 150.24C35.1523 150.24 36.2123 150.547 36.9589 151.16C37.7189 151.76 38.0989 152.647 38.0989 153.82V159.98C37.9923 160.007 37.8323 160.04 37.6189 160.08C37.4189 160.12 37.1989 160.14 36.9589 160.14C36.4789 160.14 36.1256 160.053 35.8989 159.88C35.6856 159.707 35.5789 159.4 35.5789 158.96V153.9Z'
        fill='white'
      />
      <path
        d='M48.0266 157.32C48.0266 158.253 47.6799 158.987 46.9866 159.52C46.2933 160.04 45.2799 160.3 43.9466 160.3C43.3999 160.3 42.8999 160.26 42.4466 160.18C42.0066 160.1 41.6199 159.987 41.2866 159.84C40.9666 159.68 40.7133 159.493 40.5266 159.28C40.3533 159.053 40.2666 158.807 40.2666 158.54C40.2666 158.287 40.3199 158.067 40.4266 157.88C40.5466 157.693 40.6999 157.54 40.8866 157.42C41.2599 157.66 41.6866 157.873 42.1666 158.06C42.6599 158.247 43.2266 158.34 43.8666 158.34C44.4133 158.34 44.8266 158.253 45.1066 158.08C45.3866 157.893 45.5266 157.64 45.5266 157.32C45.5266 156.773 45.1266 156.413 44.3266 156.24L43.2066 155.98C42.2199 155.753 41.4866 155.413 41.0066 154.96C40.5399 154.507 40.3066 153.9 40.3066 153.14C40.3066 152.273 40.6533 151.573 41.3466 151.04C42.0399 150.493 43.0133 150.22 44.2666 150.22C44.7466 150.22 45.1866 150.26 45.5866 150.34C45.9999 150.407 46.3533 150.513 46.6466 150.66C46.9533 150.793 47.1866 150.96 47.3466 151.16C47.5199 151.347 47.6066 151.567 47.6066 151.82C47.6066 152.06 47.5533 152.273 47.4466 152.46C47.3399 152.633 47.2133 152.773 47.0666 152.88C46.9466 152.8 46.7866 152.72 46.5866 152.64C46.3999 152.56 46.1866 152.487 45.9466 152.42C45.7199 152.353 45.4733 152.3 45.2066 152.26C44.9533 152.207 44.6999 152.18 44.4466 152.18C43.9266 152.18 43.5199 152.267 43.2266 152.44C42.9333 152.6 42.7866 152.833 42.7866 153.14C42.7866 153.367 42.8666 153.553 43.0266 153.7C43.1999 153.847 43.4933 153.967 43.9066 154.06L44.8866 154.3C45.9933 154.553 46.7933 154.927 47.2866 155.42C47.7799 155.9 48.0266 156.533 48.0266 157.32Z'
        fill='white'
      />
      <path
        d='M15.5399 171.9C15.5399 171.327 15.3732 170.907 15.0399 170.64C14.7199 170.373 14.2799 170.24 13.7199 170.24C13.3332 170.24 12.9732 170.287 12.6399 170.38C12.3199 170.473 12.0399 170.593 11.7999 170.74V177.98C11.6799 178.007 11.5199 178.04 11.3199 178.08C11.1199 178.12 10.8932 178.14 10.6399 178.14C10.1732 178.14 9.82655 178.053 9.59988 177.88C9.37322 177.707 9.25988 177.4 9.25988 176.96V170.54C9.25988 170.22 9.32655 169.96 9.45988 169.76C9.59322 169.56 9.79988 169.367 10.0799 169.18C10.4665 168.913 10.9799 168.693 11.6199 168.52C12.2599 168.333 12.9665 168.24 13.7399 168.24C15.1132 168.24 16.1732 168.547 16.9199 169.16C17.6799 169.76 18.0599 170.647 18.0599 171.82V177.98C17.9532 178.007 17.7932 178.04 17.5799 178.08C17.3799 178.12 17.1599 178.14 16.9199 178.14C16.4399 178.14 16.0865 178.053 15.8599 177.88C15.6465 177.707 15.5399 177.4 15.5399 176.96V171.9Z'
        fill='white'
      />
      <path
        d='M29.4075 176.14C29.4075 176.447 29.3542 176.707 29.2475 176.92C29.1409 177.12 28.9475 177.3 28.6675 177.46C28.2809 177.7 27.7875 177.9 27.1875 178.06C26.6009 178.22 25.9275 178.3 25.1675 178.3C24.4742 178.3 23.8475 178.22 23.2875 178.06C22.7275 177.913 22.2475 177.68 21.8475 177.36C21.4475 177.04 21.1409 176.633 20.9275 176.14C20.7142 175.647 20.6075 175.06 20.6075 174.38V168.56C20.7142 168.52 20.8675 168.487 21.0675 168.46C21.2809 168.42 21.5142 168.4 21.7675 168.4C22.2342 168.4 22.5809 168.487 22.8075 168.66C23.0342 168.82 23.1475 169.127 23.1475 169.58V174.34C23.1475 175.033 23.3209 175.533 23.6675 175.84C24.0275 176.133 24.5342 176.28 25.1875 176.28C25.6009 176.28 25.9475 176.24 26.2275 176.16C26.5209 176.08 26.7409 175.993 26.8875 175.9V168.56C26.9942 168.52 27.1475 168.487 27.3475 168.46C27.5609 168.42 27.7875 168.4 28.0275 168.4C28.5075 168.4 28.8542 168.487 29.0675 168.66C29.2942 168.82 29.4075 169.127 29.4075 169.58V176.14Z'
        fill='white'
      />
      <path
        d='M36.8357 170.26C36.4357 170.26 36.0623 170.327 35.7157 170.46C35.3823 170.593 35.089 170.787 34.8357 171.04C34.5957 171.293 34.4023 171.607 34.2557 171.98C34.109 172.353 34.0357 172.787 34.0357 173.28C34.0357 174.267 34.2957 175.013 34.8157 175.52C35.3357 176.013 36.009 176.26 36.8357 176.26C37.3023 176.26 37.7023 176.2 38.0357 176.08C38.3823 175.947 38.689 175.807 38.9557 175.66C39.1423 175.793 39.289 175.947 39.3957 176.12C39.5157 176.293 39.5757 176.493 39.5757 176.72C39.5757 177.173 39.309 177.547 38.7757 177.84C38.2423 178.133 37.5223 178.28 36.6157 178.28C35.8557 178.28 35.1557 178.18 34.5157 177.98C33.889 177.767 33.349 177.453 32.8957 177.04C32.4423 176.613 32.089 176.087 31.8357 175.46C31.5957 174.833 31.4757 174.107 31.4757 173.28C31.4757 172.44 31.609 171.707 31.8757 171.08C32.1423 170.44 32.5023 169.913 32.9557 169.5C33.4223 169.073 33.9623 168.76 34.5757 168.56C35.189 168.347 35.8423 168.24 36.5357 168.24C37.429 168.24 38.1423 168.4 38.6757 168.72C39.209 169.027 39.4757 169.407 39.4757 169.86C39.4757 170.073 39.4157 170.267 39.2957 170.44C39.189 170.613 39.0623 170.753 38.9157 170.86C38.649 170.713 38.349 170.58 38.0157 170.46C37.6957 170.327 37.3023 170.26 36.8357 170.26Z'
        fill='white'
      />
      <path
        d='M44.2832 177.98C44.1765 178.007 44.0165 178.04 43.8032 178.08C43.6032 178.12 43.3832 178.14 43.1432 178.14C42.6632 178.14 42.3098 178.053 42.0832 177.88C41.8698 177.707 41.7632 177.4 41.7632 176.96V165C41.8698 164.96 42.0232 164.927 42.2232 164.9C42.4365 164.86 42.6632 164.84 42.9032 164.84C43.3832 164.84 43.7298 164.927 43.9432 165.1C44.1698 165.273 44.2832 165.58 44.2832 166.02V177.98Z'
        fill='white'
      />
      <path
        d='M48.9957 174.4C49.1823 175.08 49.529 175.573 50.0357 175.88C50.5423 176.187 51.169 176.34 51.9157 176.34C52.4757 176.34 52.989 176.26 53.4557 176.1C53.9357 175.927 54.3223 175.747 54.6157 175.56C54.8023 175.667 54.9557 175.813 55.0757 176C55.1957 176.187 55.2557 176.387 55.2557 176.6C55.2557 176.867 55.1623 177.107 54.9757 177.32C54.8023 177.52 54.5557 177.693 54.2357 177.84C53.929 177.987 53.5623 178.1 53.1357 178.18C52.709 178.26 52.249 178.3 51.7557 178.3C50.969 178.3 50.249 178.193 49.5957 177.98C48.9557 177.767 48.4023 177.447 47.9357 177.02C47.4823 176.58 47.1223 176.04 46.8557 175.4C46.6023 174.76 46.4757 174.013 46.4757 173.16C46.4757 172.333 46.6023 171.613 46.8557 171C47.109 170.387 47.449 169.873 47.8757 169.46C48.3157 169.047 48.8223 168.74 49.3957 168.54C49.969 168.34 50.5757 168.24 51.2157 168.24C51.869 168.24 52.469 168.347 53.0157 168.56C53.5623 168.76 54.029 169.047 54.4157 169.42C54.8023 169.78 55.1023 170.22 55.3157 170.74C55.5423 171.247 55.6557 171.8 55.6557 172.4C55.6557 172.773 55.5557 173.053 55.3557 173.24C55.169 173.427 54.9023 173.547 54.5557 173.6L48.9957 174.4ZM51.2157 170.14C50.5623 170.14 50.0157 170.36 49.5757 170.8C49.1357 171.227 48.889 171.84 48.8357 172.64L53.2757 171.98C53.2223 171.487 53.029 171.06 52.6957 170.7C52.3623 170.327 51.869 170.14 51.2157 170.14ZM52.5357 163.6C53.029 163.6 53.409 163.713 53.6757 163.94C53.9423 164.167 54.0757 164.42 54.0757 164.7C54.0757 164.953 54.0223 165.16 53.9157 165.32C53.809 165.467 53.629 165.653 53.3757 165.88L51.5157 167.56C51.089 167.56 50.7557 167.453 50.5157 167.24C50.289 167.027 50.1757 166.793 50.1757 166.54C50.1757 166.393 50.2023 166.267 50.2557 166.16C50.3223 166.053 50.4223 165.927 50.5557 165.78L52.5357 163.6Z'
        fill='white'
      />
      <path
        d='M61.3593 176.38C61.7459 176.38 62.0993 176.347 62.4193 176.28C62.7393 176.2 62.9726 176.107 63.1193 176V173.78L61.1793 173.96C60.6459 174.013 60.2393 174.133 59.9593 174.32C59.6793 174.493 59.5393 174.773 59.5393 175.16C59.5393 175.547 59.6793 175.847 59.9593 176.06C60.2526 176.273 60.7193 176.38 61.3593 176.38ZM61.2793 168.24C62.5859 168.24 63.6259 168.52 64.3993 169.08C65.1859 169.64 65.5793 170.507 65.5793 171.68V176.3C65.5793 176.62 65.4993 176.873 65.3393 177.06C65.1793 177.247 64.9793 177.413 64.7393 177.56C64.3659 177.787 63.8926 177.967 63.3193 178.1C62.7459 178.233 62.0926 178.3 61.3593 178.3C60.0259 178.3 58.9726 178.047 58.1993 177.54C57.4393 177.02 57.0593 176.247 57.0593 175.22C57.0593 174.327 57.3393 173.647 57.8993 173.18C58.4726 172.7 59.2993 172.407 60.3793 172.3L63.1193 172.02V171.66C63.1193 171.153 62.9326 170.78 62.5593 170.54C62.1993 170.3 61.6859 170.18 61.0193 170.18C60.4993 170.18 59.9926 170.247 59.4993 170.38C59.0059 170.5 58.5659 170.653 58.1793 170.84C58.0326 170.733 57.9059 170.593 57.7993 170.42C57.7059 170.233 57.6593 170.033 57.6593 169.82C57.6593 169.553 57.7193 169.34 57.8393 169.18C57.9726 169.007 58.1793 168.853 58.4593 168.72C58.8459 168.56 59.2859 168.44 59.7793 168.36C60.2726 168.28 60.7726 168.24 61.2793 168.24Z'
        fill='white'
      />
      <path
        d='M68.1685 168.6C68.2751 168.573 68.4285 168.54 68.6285 168.5C68.8418 168.46 69.0685 168.44 69.3085 168.44C69.7885 168.44 70.1351 168.527 70.3485 168.7C70.5751 168.873 70.6885 169.18 70.6885 169.62V177.98C70.5818 178.007 70.4218 178.04 70.2085 178.08C70.0085 178.12 69.7885 178.14 69.5485 178.14C69.0685 178.14 68.7151 178.053 68.4885 177.88C68.2751 177.707 68.1685 177.4 68.1685 176.96V168.6ZM67.9685 165.7C67.9685 165.313 68.1018 164.987 68.3685 164.72C68.6485 164.44 69.0018 164.3 69.4285 164.3C69.8551 164.3 70.2018 164.44 70.4685 164.72C70.7351 164.987 70.8685 165.313 70.8685 165.7C70.8685 166.1 70.7351 166.44 70.4685 166.72C70.2018 166.987 69.8551 167.12 69.4285 167.12C69.0018 167.12 68.6485 166.987 68.3685 166.72C68.1018 166.44 67.9685 166.1 67.9685 165.7Z'
        fill='white'
      />
      <path
        d='M75.8428 177.98C75.7228 178.007 75.5629 178.04 75.3629 178.08C75.1629 178.12 74.9362 178.14 74.6829 178.14C74.2162 178.14 73.8695 178.053 73.6429 177.88C73.4162 177.707 73.3028 177.4 73.3028 176.96V170.62C73.3028 170.273 73.3829 169.98 73.5429 169.74C73.7029 169.5 73.9362 169.287 74.2429 169.1C74.6562 168.847 75.1628 168.64 75.7628 168.48C76.3762 168.32 77.0362 168.24 77.7429 168.24C79.0095 168.24 79.6429 168.633 79.6429 169.42C79.6429 169.607 79.6095 169.787 79.5429 169.96C79.4895 170.12 79.4295 170.253 79.3629 170.36C79.0562 170.293 78.6762 170.26 78.2229 170.26C77.7562 170.26 77.3162 170.313 76.9029 170.42C76.4895 170.527 76.1362 170.66 75.8428 170.82V177.98Z'
        fill='white'
      />
      <path
        d='M83.0191 174.4C83.2058 175.08 83.5524 175.573 84.0591 175.88C84.5658 176.187 85.1924 176.34 85.9391 176.34C86.4991 176.34 87.0124 176.26 87.4791 176.1C87.9591 175.927 88.3458 175.747 88.6391 175.56C88.8258 175.667 88.9791 175.813 89.0991 176C89.2191 176.187 89.2791 176.387 89.2791 176.6C89.2791 176.867 89.1858 177.107 88.9991 177.32C88.8258 177.52 88.5791 177.693 88.2591 177.84C87.9524 177.987 87.5858 178.1 87.1591 178.18C86.7324 178.26 86.2724 178.3 85.7791 178.3C84.9924 178.3 84.2724 178.193 83.6191 177.98C82.9791 177.767 82.4258 177.447 81.9591 177.02C81.5058 176.58 81.1458 176.04 80.8791 175.4C80.6258 174.76 80.4991 174.013 80.4991 173.16C80.4991 172.333 80.6258 171.613 80.8791 171C81.1324 170.387 81.4724 169.873 81.8991 169.46C82.3391 169.047 82.8458 168.74 83.4191 168.54C83.9924 168.34 84.5991 168.24 85.2391 168.24C85.8924 168.24 86.4924 168.347 87.0391 168.56C87.5858 168.76 88.0524 169.047 88.4391 169.42C88.8258 169.78 89.1258 170.22 89.3391 170.74C89.5658 171.247 89.6791 171.8 89.6791 172.4C89.6791 172.773 89.5791 173.053 89.3791 173.24C89.1924 173.427 88.9258 173.547 88.5791 173.6L83.0191 174.4ZM85.2391 170.14C84.5858 170.14 84.0391 170.36 83.5991 170.8C83.1591 171.227 82.9124 171.84 82.8591 172.64L87.2991 171.98C87.2458 171.487 87.0524 171.06 86.7191 170.7C86.3858 170.327 85.8924 170.14 85.2391 170.14Z'
        fill='white'
      />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='191'
          y1='0'
          x2='-3.09851e-06'
          y2='188'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.34375' stop-color='#94C356' />
          <stop offset='1' stop-color='#128371' />
        </linearGradient>
      </defs>
    </Wrapper>
  )
}
