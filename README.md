# html-refine

> an util extracts duplicated html templates

[![NPM](https://img.shields.io/npm/v/html-refine.svg)](https://www.npmjs.com/package/html-refine) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save html-refine
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'html-refine'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [ansrlm](https://github.com/ansrlm)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
