<template>
  <div class="container">
    <Row class="main">
      <Col span="16" class="main-lf">
        <Card title="Announcements" icon="ios-alert-outline" dis-hover :padding="10">
          <div style="margin: 0 10px">
            <Row class="announce-subtitle">
              <Col span="18">Title</Col>
              <Col span="6">Time</Col>
            </Row>
            <Row class="announce-item" v-for="item in announcements" :key="item.url">
              <Col span="18">{{ item.title }}</Col>
              <Col span="6">{{ item.time }}</Col>
            </Row>
          </div>
        </Card>
      </Col>
      <Col span="8" class="main-ri">
        <Card dis-hover title="Search" icon="ios-search">
          <template>
            <div class="global-search">
              <Input style="width: 100%; display: block;" type="text" autocomplete="off" placeholder="ID" />
            </div>
          </template>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data: function() {
    return {
      carouselSettings: {
        value: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: 'inside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'hover'
      },
      carouselImgs: [
        // test imgs
        'https://www.cs.sdu.edu.cn/images/ban1news.jpg'
      ],
      announcements: [
        { title: 'SDUOJ 于 2020年10月26日成功入塔', time: '2020-10-26', url: '1' },
        { title: 'SDUOJ 国庆期间项目进度推进', time: '2020-10-01', url: '2' }
      ]
    }
  }
};
</script>

<style scoped>

</style>
