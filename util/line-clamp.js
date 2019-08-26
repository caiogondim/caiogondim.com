import { css } from '@emotion/core'

export default function lineClamp ({ lines }) {
  return css`
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    display: -webkit-box;
  `
}
