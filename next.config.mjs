/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData:
      `$black: #151515;
      $darkgrey: #242424;
      $green: #4EE1A0;
      $grey: #D9D9D9;
      $white: #FFFFFF;
      $error: #FF6F5B;

      $tablet : 821px;
      $mobile : 640px;
      `,
  },
}

export default nextConfig
