import React, { useState, useEffect } from 'react';
import LogoHeader from '../comps/LogoHeader';
import Nav from '../comps/Nav';
import Tips from '../comps/Tips';
import Button from '../comps/Button';
import HeaderAccount from '../comps/Header';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
import * as network from '../network';

import { useRouter } from 'next/router'

// stylings
// const TipsBox = styled.div`
//     display:flex;
//     flex-direction:column;
//     min-width:70%;
//     background-color:#FFF3D3;
//     border-radius:5px;
//     padding:20px;

//     .tiptextbox{
//         background-color:#FFF;
//         padding:18px;
//         margin:15px 0 5px 0;
//         border-radius:5px;
//     }
//     .dots{
//         text-align:right;
//         padding-right:15px;
//         cursor:pointer;
//     }
// `;

// const TutorName = styled.div`
//     font-size:14pt;
//     font-weight:bold;
//     cursor:pointer;
// `;

// const TutorInfo = styled.div`
//     font-size:12pt;
//     cursor:pointer;
// `;

// const Tips = ({ tips }) => {
//   const router = useRouter();

//   const handleToAddTip = async () => {
//     let data = await network.checkRole();
//     console.log(data);
//     if (data.role === "tutor") {
//       router.push('/addTips');
//     } else {
//       alert("Sorry, only tutors can share tips.")
//     }
//   }

//   return (
//     <div className="tips_main">
//       <LogoHeader displayIcon={true} />
//       <Nav />
//       <div className="tips_cont">
//         <div className="tips_header">
//           <HeaderAccount text="Friendly Advice from Tutors on How to Succeed" />
//         </div>
//         <div className="tips_add_button">
//           <Button text="Add Tip" onClick={handleToAddTip} />
//         </div>
//         <div className="tips_content">
//           {tips.map(tip => {
//             return (
//               <TipsBox>
//                 <div className="tipstitle">
//                   <motion.div whileHover={{ scale: 1.015 }}>
//                     <TutorName>
//                       {tip.tutor}
//                     </TutorName>
//                     <TutorInfo>
//                       {/* {tip.subject} */}
//                     </TutorInfo>
//                   </motion.div>
//                 </div>
//                 <div className="tiptextbox">
//                   <div className="tiptext">jo</div>
//                 </div>
//               </TipsBox>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// Tips.getServerSideProps = async () => {
//   let tips = await network.tips();
//   console.log(tips);
//   return {
//     props: {
//       tips
//     }
//   }
// }

// export default Tips;

export default function TipsPage() {
  const router = useRouter();

  const handleToAddTip = async () => {
    let data = await network.checkRole();
    console.log(data);
    if (data.role === "tutor") {
      router.push('/addTips');
    } else {
      alert("Sorry, only tutors can share tips.")
    }
  }

  const displayTips = async () => {
    let tips = await network.tips();
    console.log(tips);
  }

  // useEffect(() => {
  //   displayTips();
  // }, [])

  return (
    <div className="tips_main">
      <LogoHeader displayIcon={true} />
      <Nav />
      <div className="tips_cont">
        <div className="tips_header">
          <HeaderAccount text="Friendly Advice from Tutors on How to Succeed" />
        </div>
        <div className="tips_add_button">
          <Button text="Add Tip" onClick={handleToAddTip} />
        </div>
        <div className="tips_content">
          {/* {tips.map(tip => {
            console.log(tip.subject)
          })} */}
          <Tips />
        </div>
      </div>
    </div>
  )
}
