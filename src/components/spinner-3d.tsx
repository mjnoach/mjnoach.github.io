import { useRef } from 'react'
import React from 'react'

import type { SPEObject, Application as SplineApp } from '@splinetool/runtime'

const Spline = React.lazy(() => import('@splinetool/react-spline'))

const SPLINE_OBJECT_NAME = 'Spinner'

export function Spinner3D() {
  const splineObject = useRef<SPEObject>()

  function onLoad(spline: SplineApp) {
    const obj = spline.findObjectByName(SPLINE_OBJECT_NAME)
    splineObject.current = obj
  }

  return (
    // <Suspense fallback={<Fallback />}>
    //   </Suspense>
    <Spline
      className="pointer-events-none aspect-square"
      onLoad={onLoad}
      scene="https://prod.spline.design/svFbPY8kxdT8ELTn/scene.splinecode"
    />
  )
}

// function Fallback() {
//   return (
//     <div className="text-center">
//       <h4>Loading...</h4>
//     </div>
//   )
// }
