export default class Singer {
  constructor ({id, name}) {
    this.id = id
    this.name = name
    // 歌手图片嵌入地址002J4UUk29y8BY
    this.avatar = `http://y.gtimg.cn/music/photo_new/T001R150x150M000${id}.jpg?max_age=2592000`
  }
}
