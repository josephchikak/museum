export const Card = {
    slug: 'card',
    labels: {
        singular:'Card',
        plural: 'Cards'
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
        {
            name:'year',
            label: 'Year',
            type: 'text',
            
        },
        {
            name:'file',
            label: 'File',
            type:'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name:'author(s)',
            label: 'Author(s)',
            type: 'text',
        
        },
        {
            name:'keyword',
            label: 'Keyword',
            type: 'text',
        },
        {
            name:'condition',
            label: 'Condition',
            type: 'text',
        },
        {
            name:'location',
            label: 'Location',
            type: 'text',
        },
        {
            name:'rights',
            label: 'Rights',
            type: 'text',
           
        },
        {
            name:'identifiers',
            label: 'Identifiers',
            type: 'text',
        },
        {
            name:'provenance',
            label: 'Provenance',
            type: 'text',
        },
        {
            name:'slug',
            label:'slug',
            type:'text',
        },
   
     

    ]
}