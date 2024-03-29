import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

function AnimCursor() {
  return (
    <AnimatedCursor
        innerSize={20}
        outerSize={50}
        color='187, 103, 255'
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={1.5}
        clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
        ]}
    />
  )
}

export default AnimCursor