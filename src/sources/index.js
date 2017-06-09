import { normalize } from 'normalizr'

import { commonFetchGet } from 'sources/utils'
import { pictures, albums } from 'sources/schemas'

export const getAlbumPictures = albumId => {
  return Promise.resolve([
    {
      id: '1',
      src: '/assets/cover@2x.png',
      desc: '我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿',
      date: '2014-05-20',
      isLiked: false,
      user: {
        id: 1,
        nickname: 'SHINAN'
      },
      comments: [
        {
          user: {
            id: 2,
            nickname: '麦冬',
          },
          content: '还是本人比较帅'
        },
        {
          user: {
            id: 2,
            nickname: '麦冬',
          },
          content: '还是本人比较帅'
        },
        {
          user: {
            id: 2,
            nickname: '麦冬',
          },
          content: '还是本人比较帅'
        },
        {
          user: {
            id: 2,
            nickname: '麦冬',
          },
          content: '还是本人比较帅'
        },
        {
          user: {
            id: 2,
            nickname: '麦冬',
          },
          content: '还是本人比较帅'
        }
      ]
    },
    {
      id: '2',
      src: '/assets/cover@2x.png',
      desc: '我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿我拍的照片和我本人一样苦苦的嘿嘿',
      date: '2014-05-20',
      isLiked: true,
      user: {
        id: 1,
        nickname: 'SHINAN'
      },
      comments: [
        {
          user: {
            id: 2,
            nickname: '麦冬',
          },
          content: '还是本人比较帅'
        },
        {
          user: {
            id: 2,
            nickname: '麦冬',
          },
          content: '还是本人比较帅'
        },
        {
          user: {
            id: 2,
            nickname: '麦冬',
          },
          content: '还是本人比较帅'
        },
        {
          user: {
            id: 2,
            nickname: '麦冬',
          },
          content: '还是本人比较帅'
        },
        {
          user: {
            id: 2,
            nickname: '麦冬',
          },
          content: '还是本人比较帅'
        },
        {
          user: {
            id: 2,
            nickname: '麦冬',
          },
          content: '还是本人比较帅'
        },
        {
          user: {
            id: 2,
            nickname: '麦冬',
          },
          content: '还是本人比较帅'
        }
      ]
    }
  ])
    .then(data => normalize(data, pictures))
}