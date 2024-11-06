import { Card } from "@/blocks/card/Card"

export const Maps ={
    slug:'maps',
    labels: {
        singular:'map',
        plural: 'maps'
    },
    fields: [
        {
            name:'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name:'description',
            label: 'Description',
            type: 'textarea',
            
        },
      
    ]
}