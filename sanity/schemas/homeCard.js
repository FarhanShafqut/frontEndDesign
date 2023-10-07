const homeCard  = {
    name : 'homeCard',
    title : 'HomeCard',
    type : `document`,
    fields :[
        // {
        //     name :'image',
        //     title :'image',
        //     type : 'array',
        //     of :[{type : 'image'}],
        //     options : {
        //         hotspot : true
        //     }
        // },
        {
            name: 'image',
            title: 'Home image',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative Text',
              }
            ]
          },
        {
            name : 'name',
            title : 'name',
            type : 'string'
        },
        {
            name : 'slug',
            title : 'Slug',
            type : 'slug',
            options :{
                source : 'name',
                maxLength : 90
            }
        }
        ,
        {
            name : 'price',
            title : 'Price',
            type : 'number',
        }
        ,
        {
            name : 'details',
            title : 'Details',
            type : 'string',
        }
        ,
        {
            name : 'button',
            title : 'button',
            type : 'string',
        }
    ]
}
export default homeCard ;