export default class Song {
  constructor ({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong (musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://dl.stream.qqmusic.qq.com/${musicData.songid}.m4a?vkey=670282833604BCB6056307A1EBCBE5AB2FDC1B6024161C89CFC8F525F31CED2A2516660BA23FD928A598AD20DCDBF4520536A0F4F682F7F3&guid=1003447380&uin=0&fromtag=66`
  })
}
// http://dl.stream.qqmusic.qq.com/C4000022VCY125pxlH.m4a?vkey=670282833604BCB6056307A1EBCBE5AB2FDC1B6024161C89CFC8F525F31CED2A2516660BA23FD928A598AD20DCDBF4520536A0F4F682F7F3&guid=1003447380&uin=0&fromtag=66
function filterSinger (singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach(item => {
    ret.push(item.name)
  })
  return ret.join('/')
}
