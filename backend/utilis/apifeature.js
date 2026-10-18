class Apifeature {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
    }
  
    Search() {
      const keyword = this.queryStr.keyword
        ? {
            location: {
              $regex: this.queryStr.keyword,
              $options: "i",
            },
          }
        : {};
  
      this.query = this.query.find({ ...keyword });
      return this;
    }
    filter() {
        const queryCopy = { ...this.queryStr };
        //   Removing some fields for category
        const removeFields = ["keyword", "services","limit","sort"];
    
        removeFields.forEach((key) => delete queryCopy[key]);
    
        // Filter For Price and Rating
    
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
        //  console.log((queryStr))
        const lowercase=JSON.parse(queryStr);
        this.query = this.query.find(lowercase);
        // console.log(this)
    
        return this;
      }
      facility(){
        const queryCopy = { ...this.queryStr };
        const services=queryCopy['services']
       if(services){
        let newservice=services.substring(1, services.length-1);
        const newarray=newservice.split(',')
        this.query=this.query.find({services: { $all:newarray}})
        return this;
       }else{
        return this;
       }
       
      }
    sort(){
      const queryCopy = { ...this.queryStr };
      const sortvalue=queryCopy['sort']
     if(sortvalue==='price1'){
      this.query=this.query.find().sort({price:1})
     }
     else if(sortvalue==='price-1'){
      this.query=this.query.find().sort({price:-1})
     }
    else if(sortvalue==='fresh'){
      this.query=this.query.find().sort({createdat:-1})
     }
    else if(sortvalue==='rating'){
      this.query=this.query.find().sort({totalratings:-1})
    }
    else if(sortvalue==='popular'){
      this.query=this.query.find().sort({totalmembers:-1})
    }
       return this;
    }
}
module.exports=Apifeature
