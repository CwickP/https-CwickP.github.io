import React, { useRef, useEffect } from 'react'; /* highlight-line */
import { useGLTF, useAnimations } from '@react-three/drei'; /* highlight-line */

export default function Model({ ...props }) {
   const group = useRef();
   const { scene, nodes, materials, animations } = useGLTF('./3D/me_model_Standing_W_Briefcase_Idle_Anim.gltf', true);

   const { actions, mixer } = useAnimations(animations, group); /* highlight-line */

   // 'Armature|mixamo.com|Layer0' is the name of the animation we need to run.
   // console.log(actions);

   useEffect(() => {/* highlight-line */
   console.log(animations)
//   actions.Animation[0].play();
     actions['me_model_Standing_W_Briefcase_Idle_Anim_0']?.play(); /* highlight-line */
   }, [mixer]); /* highlight-line */
   return (
    <primitive ref={group} object={scene} scale={10} position={[0, -16, 0]}/>
   );
}

useGLTF.preload('./3D/me_model_Standing_W_Briefcase_Idle_Anim.gltf');