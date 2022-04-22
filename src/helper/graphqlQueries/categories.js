
const getAllCateories = `query{ 
  categories {
    data { 
    id
    attributes{
      Name
      Url
      Order
      Childrens {
        data {
          id
        }
      }
    }
    }
  }
}`