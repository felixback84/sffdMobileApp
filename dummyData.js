// test obj
let dummyData = {
    companies:[
        {
            id:0,
            type:"companies",
            imgUrl:"https://picsum.photos/600/480",
            metadata:{
                tags:["audi","mercedes","mini"],
                categories:["automovils"]
            },
            metrics:{
                mts:32,
                qualityMatch:5,
            },
            credentials:{
                img:"https://picsum.photos/600/400",
                title:"Autogermana",
                shortDescription:"Some text for the cover",
                website:"www.autogermana.co",
                headquarters:"Cra 23c - 23",
                bio:"some juicy shit!!!",
                social:{
                    ig:"",
                    youtube:"",
                    linkendIn:""
                },
            },
            networking:{
                comments:[
                    {
                        id:"0123",
                        docIdTo:"2312321",
                        createdAt:Date(),
                        body:"Some comment for this post",
                        userImage:"https://picsum.photos/100/100",
                        userHandle:"Pepe1984",
                        type:"Companies"
                    }
                ],
                likes:[
                    {
                        id:"9290",
                        docIdTo:"3821",
                        userHandle:"Pepe1984",
                        createdAt:Date(),
                        type:"Companies"
                    }
                ],
            },
            products:[
                {
                    taxonomy:{
                        cars:{
                            cc:1600,
                            origenNation:"Germany",
                            brand:"VW",
                            model:1994,
                            location:"Bogota D.C",
                            condition:"Used",
                            aidFinancial:null,
                            price:5000,
                            transmition:"manual",
                            gasType:"normal",
                            tractionControl:"4x2",
                            chasisType:"coupe",
                            color:"red flash",
                            doorsNumber:5,
                            directionType:"asisted",
                            others:"stripes"
                        },
                    },
                    
                }
            ]
        },
        {

        }
    ],
    products:[
        {
            taxonomy:{
                automovils:{
                    cc:0,
                    origenNation:"",
                    brand:"",
                    model:0,
                    location:"",
                    condition:"",
                    aidFinancial:"",
                    price:0,
                    transmition:"",
                    gasType:"",
                    tractionControl:"",
                    chasisType:"",
                    color:"",
                    doorsNumber:0,
                    directionType:"",
                    others:""
                },
                motocycles:{
                    numberOfWheels:"",
                    origenNation:"",
                    brand:"",
                    model:0,
                    cc:0,
                    type:"",
                    gasType:"",
                    color:"",
                    location:"",
                    condition:"",
                    aidFinancial:"",
                    price:0,
                    others:""
                },
                trucks:{
                    cc:0,
                    type:"",
                    model:"",
                    brand:"",
                    model:0,
                    price:0,
                    transmition:"",
                    color:"",
                    directionType:"",
                }
            },
            id:789127891
        },
        
    ]
}

export default dummyData