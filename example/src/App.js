import React from 'react'

import { useMyHook } from 'html-refine'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
