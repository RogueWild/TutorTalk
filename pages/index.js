import React, { useEffect } from 'react';
import Link from 'next/link'

import * as network from '../network'

export default function Home() {

  const Register = async () => {
    var data = await network.registerStudent('test@email', 'password', 'skylar', 'z', '89854408')
    console.log(data)
  }
  useEffect(() => {
    Register();
  }, [])

  return (
    <div className="main">
      Hello
    </div>
  )
}
