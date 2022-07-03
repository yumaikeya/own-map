import BaseMap from 'Features/map/BaseMap'
import ThreePic from 'Features/map/ThreePic'
import DetailDrawer from 'Features/map/DetailDrawer'

const TopPage = () => {
  return (
    <>
      <BaseMap>
        <ThreePic />
      </BaseMap>
      <DetailDrawer />
    </>
  )
}

export default TopPage