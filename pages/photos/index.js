import Link from 'next/link'
import AspectRatio from '../../components/aspect-ratio'
import Shell from '../../components/shell'
import Header from '../../components/header'
import Image from '../../components/image'
import HeaderDivider from '../../components/header-divider'
import { white4 } from '../../util/colors'
import { css } from '@emotion/core'

const containerStyle = css`
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    a {
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 1024px) {
    a {
      flex-basis: calc(50% - 0.5rem);
    }
  }
`

function Photos () {
  return (
    <Shell width="100%">
      <Header pageName="/ Photos" />

      <div css={containerStyle}>
        <section>
          <HeaderDivider
            title="Hawaii"
            subtitle="2017"
            sticky
            style={{ marginTop: 0 }}
          />
          <Link href="/photos/2017-hawaii/billabong-pipeline-masters-1">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-hawaii/billabong-pipeline-masters-1-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-hawaii/billabong-pipeline-masters-2">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-hawaii/billabong-pipeline-masters-2-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-hawaii/byodo-in-temple">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-hawaii/byodo-in-temple-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-hawaii/honolulu-from-diamond-head">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-hawaii/honolulu-from-diamond-head-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-hawaii/horizon">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-hawaii/horizon-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-hawaii/jurassic-park">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-hawaii/jurassic-park-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-hawaii/kaena-point-sunset">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-hawaii/kaena-point-sunset-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-hawaii/lanikai">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-hawaii/lanikai-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-hawaii/lighthouse">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-hawaii/lighthouse-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-hawaii/oahu-mountains-at-sunset">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-hawaii/oahu-mountains-at-sunset-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
        </section>

        <section>
          <HeaderDivider
            title="Mauna Kea Observatories"
            subtitle="2017"
            sticky
          />
          <Link href="/photos/2017-mauna-kea-observatories/radio-antena">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-mauna-kea-observatories/radio-antena-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-mauna-kea-observatories/sky-and-telescope">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-mauna-kea-observatories/sky-and-telescope-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-mauna-kea-observatories/telescope-and-sunset">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-mauna-kea-observatories/telescope-and-sunset-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-mauna-kea-observatories/telescopes">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-mauna-kea-observatories/telescopes-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
        </section>

        <section>
          <HeaderDivider
            title="Times Square"
            subtitle="2017"
            sticky
          />
          <Link href="/photos/2017-times-square/nasdaq">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-times-square/nasdaq-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-times-square/square">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-times-square/square-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-times-square/sunset">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-times-square/sunset-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-times-square/yellow">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-times-square/yellow-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
        </section>

        <section>
          <HeaderDivider
            title="New York"
            subtitle="2017"
            sticky
          />
          <Link href="/photos/2017-new-york/brooklyn-bridge">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-new-york/brooklyn-bridge-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-new-york/lower-manhattan">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-new-york/lower-manhattan-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-new-york/manhattan-from-top-of-the-rock">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-new-york/manhattan-from-top-of-the-rock-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2017-new-york/toms-restaurant">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2017-new-york/toms-restaurant-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
        </section>

        <section>
          <HeaderDivider
            title="New York"
            subtitle="2016"
            sticky
          />
          <Link href="/photos/2016-new-york/brooklyn-bridge">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2016-new-york/brooklyn-bridge-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2016-new-york/love">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2016-new-york/love-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2016-new-york/manhattan-bridge">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2016-new-york/manhattan-bridge-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
          <Link href="/photos/2016-new-york/oculus">
            <a>
              <AspectRatio ratio="16:9" backgroundColor={white4}>
                <Image src="/static/photos/2016-new-york/oculus-preview.jpg" />
              </AspectRatio>
            </a>
          </Link>
        </section>
      </div>
    </Shell>
  )
}

export default Photos
