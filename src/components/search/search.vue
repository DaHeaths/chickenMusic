<template>
  <div class="search">
    <div class="serach-box-wrapper">
      <search-box ref="searchBox"></search-box>
    </div>
    <!-- 热门搜索 start -->
    <div class="shortcut-wrapper">
      <div class="shortcut">
          <div class="hot-key">
          <h1 class="title">热门搜索</h1>
          <ul>
            <li @click="addQuery(item.first)" class="item" v-for="item in hotkey">
              <span>{{item.first}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 热门搜索 start -->
  </div>
</template>

<script type="text/ecmascript-6">
import searchBox from 'base/search-box/search-box'
import { getHotKey } from 'api/search'
import { ERR_ONE } from 'api/config'
export default {
  data () {
    return {
      hotkey: []
    }
  },
  components: {
    searchBox
  },
  methods: {
    addQuery (query) {
      this.$refs.searchBox.setQuery(query)
    },
    _getHotKey () {
      getHotKey().then((res) => {
        if (res.data.code === ERR_ONE) {
          this.hotkey = res.data.result.hots
        }
      })
    }
  },
  created () {
    this._getHotKey()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

.search
  .search-box-wrapper
    margin: 20px
  .shortcut-wrapper
    position: fixed
    top: 178px
    bottom: 0
    width: 100%
    .shortcut
      height: 100%
      overflow: hidden
      .hot-key
        margin: 0 20px 20px 20px
        .title
          margin-bottom: 20px
          font-size: $font-size-medium
          color: $color-text-l
        .item
          display: inline-block
          padding: 5px 10px
          margin: 0 20px 10px 0
          border-radius: 6px
          background: $color-highlight-background
          font-size: $font-size-medium
          color: $color-text-d
      .search-history
        position: relative
        margin: 0 20px
        .title
          display: flex
          align-items: center
          height: 40px
          font-size: $font-size-medium
          color: $color-text-l
          .text
            flex: 1
          .clear
            extend-click()
            .icon-clear
              font-size: $font-size-medium
              color: $color-text-d
  .search-result
    position: fixed
    width: 100%
    top: 178px
    bottom: 0
</style>
