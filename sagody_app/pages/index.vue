<template>
  <div>
    <Banner />
    <Facility />
    <Category />
    <LatestProducts />
    <Offer />
    <Subscribe />
  </div>
</template>

<script>
import Banner from "../components/diction-three/Banner";
import Facility from "../components/diction-two/Facility";
import Category from "../components/diction-three/Category";
import LatestProducts from "../components/landing-one/LatestProducts";
import Offer from "../components/diction-three/Offer";
import Subscribe from "../components/common/Subscribe";
import InstagramPhotos from "../components/common/InstagramPhotos";
export default {
  components: {
    Banner,
    Facility,
    Category,
    LatestProducts,
    Offer,
    Subscribe,
    InstagramPhotos
  }
};
</script>