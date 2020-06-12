import { random } from '@/utils/util'

// 产品列表
const productList = []

const productModel = [
  {
    productModel: 1,
    offerType: 0 // 0: 无优惠, 1: 折扣，2：满赠 3：折扣+满赠
  },
  {
    productModel: 2,
    offerType: 1 // 0: 无优惠, 1: 折扣，2：满赠 3：折扣+满赠
  },
  {
    productModel: 3,
    offerType: 2 // 0: 无优惠, 1: 折扣，2：满赠 3：折扣+满赠
  },
  {
    productModel: 4,
    offerType: 3 // 0: 无优惠, 1: 折扣，2：满赠 3：折扣+满赠
  }
]

const ruleList = [
  {
    minCount: 10,
    minPrice: 1000,
    giftCount: 3,
    zIndex: 100,
    offerType: 2
  },
  {
    minCount: 5,
    minPrice: 500,
    giftCount: 1,
    zIndex: 1,
    offerType: 2
  },
  {
    minCount: 10,
    minPrice: 1000,
    disCount: 0.7,
    zIndex: 100,
    offerType: 1
  },
  {
    minCount: 5,
    minPrice: 500,
    disCount: 0.8,
    zIndex: 1,
    offerType: 1
  },
  {
    minCount: 3,
    minPrice: 300,
    disCount: 0.9,
    zIndex: 1,
    offerType: 1
  }
]

for (let i = 0; i < 1000; i++) {
  productList.push({
    name: '产品' + i,
    productId: i + 1,
    productModel: random(1, 4),
    sqt: 1,
    price: random(1, 1000)
  })
}

export {
  productList,
  productModel,
  ruleList
}
