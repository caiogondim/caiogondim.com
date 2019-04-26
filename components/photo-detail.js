import { css } from '@emotion/core'
import Shell from './shell'
import Header from './header'
import HeaderDivider from './header-divider'
import AspectRatio from './aspect-ratio'
import { gray90, gray30 } from '../util/colors'

const descriptionStyle = css`
  text-align: right;
  color: ${gray30};
`

function PhotoDetail ({ title, subtitle, imgSrc, imgRatio, camera, shutter, lens, iso }) {
  return (
    <Shell>
      <Header pageName="/ Photos" />
      <HeaderDivider
        title={title}
        subtitle={subtitle}
       />
       <p>
         <AspectRatio ratio={imgRatio}>
           <img src={imgSrc} />
         </AspectRatio>
       </p>
       <p css={descriptionStyle}>
         {camera}<br />
         {shutter}<br />
         {lens}<br />
         {iso}
       </p>
    </Shell>
  )
}

export default PhotoDetail
