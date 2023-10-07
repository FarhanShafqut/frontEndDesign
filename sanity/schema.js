import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import product from './schemas/product'
import banner from './schemas/banner'
import navCategory from './schemas/navCategory'
import homeCard from './schemas/homeCard'

export const schema = {
  types: [post, author, category, blockContent,product,banner,navCategory,homeCard],
}
