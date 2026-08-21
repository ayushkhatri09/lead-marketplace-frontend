// "use client";
// import Link from "next/link";
// import { Button } from "@/components/ui/button"

// const navLinks = [
//   {
//     name: "Home",
//     href: "/",
//   },
  
//   {
//     name: "About",
//     href: "/about",
//   },
//   {
//     name: "Contact",
//     href: "/contact",
//   },
// ];

// export default function NavLinks() {
//   return (
//     <nav>
//       <ul>
//         {navLinks.map((link) => (
//           <li key={link.href} >
            
//             <Button variant="link" className="
//     transition-all
//     duration-300
//     hover:-translate-y-1" ><Link href={link.href}>{link.name}</Link></Button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }