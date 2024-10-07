import { Card } from "@/blocks/card/Card"

export const Maps ={
    slug:'maps',
    fields: [
        {
            name: 'internalName',
            type:'text',
            label:'Internal Name',
            required: true,

        },
        {
            name:'nav',
            label:'Navgation',
            type: 'array',
            fields:[
               { name:'label',
                label: 'Label',
                type: 'text',
               },
               {
                name: 'link',
                label: 'Link',
                type: 'text'
               }
            ],
            minRows:1
        },
        {
            name: 'pageSection',
            type: 'group',
            interfaceName: 'Section',
            fields:[
                {
                    name:'layout',
                    label:'layout',
                    type: 'blocks',
                    blocks:[
                            Card
                    ]
                }
             
    
            ]
    
        },
      
    ]
}