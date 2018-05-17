<template>
  <section>

    <h2>我是itemcontainer</h2>
    <header>
      <span v-if="fatherComponent == 'home'">我是home</span>
      <span v-if="fatherComponent == 'item'">我是item</span>
    </header>

    <div v-if="fatherComponent == 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link class="start button_style" to="item"></router-link>
    </div>

    <div v-if="fatherComponent == 'item'">
      <div class="item_back item_container_style">

        <div class="item_list_container" v-if="itemDetail.length > 0">
          <header>{{itemDetail[itemNum - 1].topic_name}}</header>
          <ul>
            <li v-for="(item,index) in itemDetail[itemNum - 1].topic_answer" @click="choosed(index, item.topic_answer_id)">
              <span :class="{'has_choosed': choosedNum == index}"> {{choosedType(index)}} </span>
              <span> {{item.answer_name}} </span>
            </li>
          </ul>
        </div>

      </div>
      <span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length">下一题</span>
      <span class="submit_item button_style" @click="submitAnswer" v-else>提交</span>
    </div>

  </section>
</template>

<script>
  import {
    mapState
  } from "vuex";
  import {
    mapActions
  } from "vuex";

  export default {
    name: "itemcontainer",

    props: ["fatherComponent"],

    data() {
      return {
        choosedNum: null, //选中大答案索引
        choosedId: null, //选中答案id

      };
    },

    methods: {
      //如果有很多的actions方法需要使用可以使用mapActions函数.避免需要多次使用this.$store.dispatch()
      ...mapActions(["addNum", "initializeData", "aaa"]),

      submitAnswer() {
        if (this.choosedNum !== null) {
          this.addNum(this.choosedId)
          clearInterval(this.timer)
          this.$router.push('score')
        } else {
          alert('您还没有选择答案哦!')
        }
      },
      choosed(type, id) {
        this.choosedNum = type;
        this.choosedId = id;
      },
      choosedType(index) {
        switch (index) {
          case 0:
            return "A";
          case 1:
            return "B";
          case 2:
            return "C";
          case 3:
            return "D";
        }
      },
      nextItem() {
        if (this.choosedNum !== null) {
          this.choosedNum = null;
          //保存答案,题目索引加一,跳到下一题;

          this.addNum(this.choosedId)
        } else {
          alert("您还没有选择答案哦!");
        }
      }
    },

    computed: {
      ...mapState([
        "itemNum", //第几题
        "level", //第几周
        "itemDetail", //题目详情
        "timer" //计时器
      ])
    },
    created() {
      //初始化信息
      if (this.fatherComponent == 'home') {
        this.initializeData();
        document.body.style.backgroundImage = 'url(./static/images/1-1.jpg)'

      }
    }
  };

</script>

<style lang="less" scoped>

  .has_choosed {
    background-color: pink;
  }

</style>
