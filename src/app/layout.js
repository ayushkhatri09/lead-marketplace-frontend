
// import { Inter } from "next/font/google";
// import Script from "next/script";

// import "./globals.css";

// import Navbar from "@/components/navbar/Navbar";

// import { AuthProvider } from "@/context/AuthContext";
// import { ProviderAuthProvider } from "@/context/ProviderAuthContext";
// import { NotificationProvider } from "@/context/NotificationContext";

// const inter = Inter({
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Lead Marketplace",
//   description: "Lead Marketplace Platform",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <AuthProvider>
//           <ProviderAuthProvider>
//             <NotificationProvider>
//               <Navbar />
//               {children}
//             </NotificationProvider>
//           </ProviderAuthProvider>
//         </AuthProvider>

//         <Script
//           src="https://checkout.razorpay.com/v1/checkout.js"
//           strategy="afterInteractive"
//         />
//       </body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Navbar from "@/components/navbar/Navbar";

import { AuthProvider } from "@/context/AuthContext";
import { ProviderAuthProvider } from "@/context/ProviderAuthContext";
import { NotificationProvider } from "@/context/NotificationContext";


const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "Lead Marketplace",
  description: "Lead Marketplace Platform",
};


export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body className={inter.className}>


        <AuthProvider>


          <NotificationProvider>


            <ProviderAuthProvider>


              <Navbar />


              {children}


            </ProviderAuthProvider>


          </NotificationProvider>


        </AuthProvider>




        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />


      </body>

    </html>

  );

}
