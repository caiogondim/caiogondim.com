import Head from 'next/head'
import superstylin from 'superstylin'

function Shell({ children }) {
  return (
    <div>
      <Head>
       <style jsx global>{superstylin}</style>
       <style jsx global>{`
         body {
           margin: calc((100vw / 25) * 1.563);
           max-width: 100%;
         }

         ection {
           margin: 0 0 3.815rem 0;
         }

         section:last-child {
           margin: 0;
         }

         a {
           -webkit-tap-highlight-color: rgba(243, 243, 243, 0.5);
         }

         ::selection {
           filter: invert(100%);
           background-color: #343334;
           color: white;
         }

         @keyframes fadeIn {
           0% {
             opacity: 0;
           }
           100% {
             opacity: 1;
           }
         }

         main {
           opacity: 0;
           animation: fadeIn 0.262s 0.1672s forwards;
         }

         main .from-back-forward-cache {
           opacity: 1;
           animation: none;
         }

         // Remove extra line on code blocks
         code::after {
           display: none;
         }
       `}</style>
     </Head>
     {children}
    </div>
  )
}

export default Shell
